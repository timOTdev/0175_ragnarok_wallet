import React, { useState } from 'react';
import AppContext from './AppContext';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

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
const Wallet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 20vh;
    canvas {
      display: none;
    }
  }
`;
const H2 = styled.h2`
  margin: 0;
  width: 24%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;
const Textarea = styled.textarea`
  border-radius: 3px;
  border: none;
  padding: 1rem;
  margin-right: 1rem;
  color: white;
  height: 40px;
  background: rgb(78, 4, 253);
  background: linear-gradient(
    90deg,
    rgba(78, 4, 253, 1) 0%,
    rgba(167, 48, 230, 1) 100%
  );
  overflow: hidden;
  resize: none;
`;
const Copied = styled.button`
  color: green;
  padding: 1rem;
  border: none;
  border-radius: 3px;
  height: 60%;
  background: rgb(78, 4, 253);
  background: linear-gradient(
    90deg,
    rgba(78, 4, 253, 1) 0%,
    rgba(167, 48, 230, 1) 100%
  );
`;
const Uncopied = styled.button`
  border-radius: 3px;
  border: none;
  padding: 1rem;
  height: 60%;
  background: rgb(78, 4, 253);
  background: linear-gradient(
    90deg,
    rgba(78, 4, 253, 1) 0%,
    rgba(167, 48, 230, 1) 100%
  );
`;

export default function ReceiveView() {
  // @ts-ignore
  const { myPublicKey, testPublicKey } = React.useContext(AppContext);
  const [copied, setCopied] = useState(false);
  // @ts-ignore

  const copy = (pubKey: string) => {
    // Grab either the
    let copyText: any = pubKey === 'testPublicKey' ? 
    document.getElementById('testPublicKey'):
      document.getElementById('myPublicKey');
    
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 2000);
  };

  return (
    <Section>
      <Wallet>
        <H2>My Public Key</H2>
        <Div>
          <Textarea id='myPublicKey' defaultValue={myPublicKey} />
          <>
            {copied ? (
              <Copied>✔</Copied>
            ) : (
              <Uncopied onClick={() => copy('myPublicKey')}>📄</Uncopied>
            )}
          </>
        </Div>
        <Div>
          <QRCode value={myPublicKey} />
        </Div>
      </Wallet>
      <Wallet>
        <H2>My Test Key</H2>
        <Div>
          <Textarea id='testPublicKey' defaultValue={testPublicKey} />
          <>
            {copied ? (
              <Copied>✔</Copied>
            ) : (
              <Uncopied onClick={() => copy('testPublicKey')}>📄</Uncopied>
            )}
          </>
        </Div>
        <Div>
          <QRCode value={testPublicKey} />
        </Div>
      </Wallet>
    </Section>
  );
}
