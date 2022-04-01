import React, { useState } from 'react';
import AppContext from './AppContext';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

interface QRContainerProps {
  active?: boolean;
}

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
  @media (max-width: 800px) {
    height: 40vh;
  }
`;
const Wallet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 20vh;
  }
`;
const H2 = styled.h2`
  margin: 0;
  width: 20%;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    /* width: 100%; */
    margin-bottom: 4rem;
  }
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
  border: none;
  padding: 1rem;
  height: 4rem;
  width: 4rem;
  border-radius: 3px;
  background: rgb(78, 4, 253);
  background: linear-gradient(
    90deg,
    rgba(78, 4, 253, 1) 0%,
    rgba(167, 48, 230, 1) 100%
  );
`;
const Uncopied = styled.button`
  border: none;
  padding: 1rem;
  height: 4rem;
  width: 4rem;
  border-radius: 3px;
  background: rgb(78, 4, 253);
  background: linear-gradient(
    90deg,
    rgba(78, 4, 253, 1) 0%,
    rgba(167, 48, 230, 1) 100%
  );
`;
const QR1 = styled.div<QRContainerProps>`
  margin: 0 2rem;
  visibility: ${(p) => (p.active ? 'visible' : 'hidden')};
`;
const QR2 = styled.div<QRContainerProps>`
  margin: 0 2rem;
  visibility: ${(p) => (p.active ? 'visible' : 'hidden')};
`;
const Show = styled.button`
  color: white;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  height: 4rem;
  width: 10rem;
  min-width: 10rem;
  background: rgb(78, 4, 253);
  background: linear-gradient(
    90deg,
    rgba(78, 4, 253, 1) 0%,
    rgba(167, 48, 230, 1) 100%
  );
`;
const Hide = styled.button`
  color: white;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  height: 4rem;
  width: 10rem;
  min-width: 10rem;
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
  const [showQR1, setShowQR1] = useState(false);
  const [showQR2, setShowQR2] = useState(false);
  // @ts-ignore

  const copy = (pubKey: string) => {
    // Grab either the testPublicKey if received arg.
    let copyText: any =
      pubKey === 'testPublicKey'
        ? document.getElementById('testPublicKey')
        : document.getElementById('myPublicKey');

    // Copies the appropriate DOM target.
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    // Toggle alternate icon for UX.
    setCopied(true);

    // Reset the icon so users can recopy.
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
        {showQR1 ? (
          <Hide onClick={() => setShowQR1(false)}>Hide QR</Hide>
        ) : (
          <Show onClick={() => setShowQR1(true)}>Show QR</Show>
        )}
        <QR1 active={showQR1}>
          <QRCode id='code1' value={myPublicKey} />
        </QR1>
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
        {showQR2 ? (
          <Hide onClick={() => setShowQR2(false)}>Hide QR</Hide>
        ) : (
          <Show onClick={() => setShowQR2(true)}>Show QR</Show>
        )}
        <QR2 active={showQR2}>
          <QRCode id='code2' value={testPublicKey} />
        </QR2>
      </Wallet>
    </Section>
  );
}
