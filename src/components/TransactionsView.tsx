import React, { useEffect, useState } from 'react';
import { getRpcURL } from '../lib/utils';
import { Connection, PublicKey } from '@solana/web3.js';
import AppContext from './AppContext';
import styled from 'styled-components';

interface DataProp {
  data: Array<TransactionProp>;
  shouldReload: boolean;
}

// blockTime - estimated production time, as Unix timestamp (seconds since the Unix epoch) of when transaction was processed. null if not available.
// slot -the period of time for which each leader ingests transactions and produces a block. Slots are ordered sequentially and non-overlapping, comprising roughly equal real-world time.
// signature - transaction signature as base-58 encoded string
interface TransactionProp {
  blockTime: number;
  confirmationStatus: string;
  slot: number;
  signature: string;
}

const getTransactions = (myPublicKey: PublicKey): any => {
  // Grab the url from utils.
  const url = getRpcURL();

  // Check if url is not undefined.
  const connection =
    url !== undefined ? new Connection(url) : new Connection('');

  const result = connection
    .getSignaturesForAddress(myPublicKey, {
      limit: 5,
    })
    .then((res) => {
      console.log('res', res);
      return res;
    });

  return result;
};

const Section = styled.section`
  border: 1px solid #333333;
  width: 100%;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 1px 1px 7px var(--teal);
  background: rgb(33, 212, 170);
  background: linear-gradient(
    210deg,
    rgba(33, 212, 170, 1) 0%,
    rgba(109, 136, 204, 1) 50%,
    rgba(190, 54, 236, 1) 100%
  );
`;
const Table = styled.table`
  border: 1px solid black;
  font-size: 1.8rem;
  margin: 0 auto;
`;

const HeaderRows = styled.tr`
  font-weight: 700;
`;
const HeaderCells = styled.td`
  border-bottom: 1px solid black;
  padding: 2rem 4rem;
`;

const BodyCells = styled.td`
  padding: 2rem 4rem;
`;

export default function TransactionsView() {
  let [state, setState] = useState<DataProp>({
    data: [],
    shouldReload: false,
  });

  // @ts-ignore
  const { myPublicKey }: PublicKey = React.useContext(AppContext);
  // @ts-ignore

  // //tbc Why doesn't plugging into new PublicKey doesn't work after refreshing page?
  // console.log('publicKey', myPublicKey); // ARFZVbY4QXAgVmWPh79UcVJJhXVihtGyqcgx7GaqcaZL
  // console.log('publicKey', typeof myPublicKey); // string

  // Convert base-58 encoded string to PublicKey class.
  const publicKey: PublicKey = new PublicKey(
    'ARFZVbY4QXAgVmWPh79UcVJJhXVihtGyqcgx7GaqcaZL'
  );

  useEffect(() => {
    getTransactions(publicKey).then((result: any) => {
      console.log(result);
      setState({
        data: result,
        shouldReload: true,
      });
    });
  }, [publicKey]);

  useEffect(() => {
    renderTransactions(state.data);
  }, [state.data]);

  return (
    <Section>
      <h1>Transactions</h1>

      <Table>
        <tbody>
          <HeaderRows>
            <HeaderCells>Status</HeaderCells>
            <HeaderCells>Blocktime</HeaderCells>
            <HeaderCells>Slot</HeaderCells>
            <HeaderCells>Transaction</HeaderCells>
          </HeaderRows>
          {renderTransactions(state.data)}
        </tbody>
      </Table>
    </Section>
  );
}

const renderTransactions = (transactions: DataProp['data']) => {
  // Reverse() shows new items at the top.
  return transactions.reverse().map((tx, index) => {
    return (
      <tr key={index}>
        <BodyCells>{tx.confirmationStatus}</BodyCells>
        <BodyCells>{tx.blockTime}</BodyCells>
        <BodyCells>{tx.slot}</BodyCells>
        <BodyCells>
          <a
            href={`https://explorer.solana.com/tx/${tx.signature}?cluster=devnet`}
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            transaction
          </a>
        </BodyCells>
      </tr>
    );
  });
};
