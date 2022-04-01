import React, { useState } from 'react';
import AppContext from './AppContext';
import styled from 'styled-components';
import {
  Connection,
  PublicKey,
  SystemProgram,
  sendAndConfirmTransaction,
  Transaction,
} from '@solana/web3.js';
import { getTxExplorerURL } from '../lib/utils';
import { getRpcURL, getWebSocketURL } from '../lib/utils';
import Conversions from './subcomponents/Conversions';
import { numberWithCommas } from '../lib/utils';

const Section = styled.section`
  border: 1px solid #333333;
  width: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 7px var(--teal);
  background: rgb(33, 212, 170);
  background: linear-gradient(
    210deg,
    rgba(33, 212, 170, 1) 0%,
    rgba(109, 136, 204, 1) 50%,
    rgba(190, 54, 236, 1) 100%
  );
`;
const Form = styled.form`
  margin: 2rem;
  line-height: 2;
`;
const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  input {
    width: 70%;
    padding: 1rem;
    border-radius: 3px;
    border: none;
    color: white;
    background: rgb(78, 4, 253);
    background: linear-gradient(
      90deg,
      rgba(78, 4, 253, 1) 0%,
      rgba(167, 48, 230, 1) 100%
    );
    &::placeholder {
      color: darkgray;
    }
    &:focus,
    &:active {
      border: none;
      color: white;
      background: rgb(78, 4, 253);
      background: linear-gradient(
        90deg,
        rgba(78, 4, 253, 1) 0%,
        rgba(167, 48, 230, 1) 100%
      );
    }
  }
`;
const Submit = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  button {
    color: white;
    background: transparent;
    border: 5px outset var(--indigo);
    border-radius: 5px;
    padding: 1rem;
    &:hover {
      cursor: pointer;
      background: var(--blue);
      border: 5px outset var(--indigo);
    }
  }
`;
const Hr = styled.hr`
  width: 70%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;
export default function WalletStats() {
  // @ts-ignore
  const { balance, myPublicKey } = React.useContext(AppContext);
  // @ts-ignore

  // Set up hooks.
  const [recipientPubKey, setRecipientPubKey] = useState('');
  const [sendAmount, setSendAmount] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [txSignature, setTxSignature] = useState('');
  const [transactionUrl, setTransactionUrl] = useState('');

  // Transfer function to move lamports.
  const transfer = (e: any) => {
    e.preventDefault();

    // Check if amount is not NaN.
    if (isNaN(sendAmount)) {
      alert('Send amount needs to be a valid number');
    }

    // Make a PublicKey instance from public keys.
    const fromPubKey = new PublicKey(myPublicKey);
    const toPubKey = new PublicKey(recipientPubKey);

    // Instructions to attach to the transfer.
    const instructions = SystemProgram.transfer({
      fromPubkey: fromPubKey,
      toPubkey: toPubKey,
      lamports: sendAmount,
    });

    // Grab the private key from env variables to sign transaction.
    const myPrivateKey = process.env.REACT_APP_PRIVATE_WALLET_KEY
      ? JSON.parse(process.env.REACT_APP_PRIVATE_WALLET_KEY)
      : '';

    // Set the signer array object.
    const signers = [
      {
        publicKey: fromPubKey,
        secretKey: new Uint8Array(myPrivateKey),
      },
    ];

    // Zero out the current signature and toggle fetching state.
    setTxSignature('');
    setFetching(true);

    // Create a transaction instance.
    const transaction = new Transaction();

    // Add instructions.
    transaction.add(instructions);

    // Get the url endpoint.
    const url = getRpcURL();

    // Check for valid url.
    const isValidUrl = url ? url : '';

    // make connection instance.
    const connection = new Connection(isValidUrl, {
      wsEndpoint: getWebSocketURL(),
    });

    // Call sendAndConfirmTransaction
    // Arguments: Connection, Transaction, Signer[], optional ConfirmOptions
    // Returns: Promise of TransactionSignature
    // A transaction signature sample - "4LUURhcd4h2LMjnMaERBS1Q6vPH5oSKzXLM89Pqv2aoPFjsnPfgNV2p5uXAfKn4aeAZba4VSNkxgQw6h2m35ttuS")
    // You can explore Solana Explorer (https://explorer.solana.com/)
    // See libs/utils.js for address format.
    sendAndConfirmTransaction(connection, transaction, signers)
      .then((signature) => {
        setTxSignature(signature);
        setTransactionUrl(getTxExplorerURL(signature));
        setFetching(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Section>
      <Form name='transfer' onSubmit={(e) => transfer(e)}>
        <h1>Send Transaction</h1>
        <Inputs>
          <label htmlFor='receiver'>Recipient Address</label>
          <input
            name='receiver'
            id='receiver'
            type='string'
            value={recipientPubKey}
            placeholder='Send to address...'
            onChange={(e) => setRecipientPubKey(e.target.value)}
            required
          />
        </Inputs>
        <Inputs>
          <label htmlFor='amount'>Send Amount</label>
          <input
            name='amount'
            id='amount'
            type='number'
            value={
              sendAmount || `${numberWithCommas(balance)} lamports available...`
            }
            placeholder={`${numberWithCommas(balance)} lamports available...`}
            max={200}
            onChange={(e) => setSendAmount(parseInt(e.target.value))}
            required
          />
        </Inputs>
        <Submit>
          <button type='submit'>Submit Transfer</button>
        </Submit>
        {fetching && <p>Making transfer...</p>}
        {transactionUrl && (
          <>
            <p>
              Successfully sent {sendAmount} lamports to{' '}
              <em>{recipientPubKey}</em>!
            </p>
            <p>
              See your transaction at{' '}
              <a
                href={transactionUrl}
                target='_blank'
                rel='noreferrer'
                title={txSignature}
              >
                Solana Explorer
              </a>
              .
            </p>
          </>
        )}
        <Hr />
        <Conversions />
      </Form>
    </Section>
  );
}
