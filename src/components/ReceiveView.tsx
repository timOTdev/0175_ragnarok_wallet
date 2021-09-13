import React, { useState } from 'react';
import AppContext from './AppContext';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

const Section = styled.section`
  border: 1px solid #333333;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 1px 1px 7px var(--teal);
  background: rgb(33, 212, 170);
  background: linear-gradient(
    210deg,
    rgba(33, 212, 170, 1) 0%,
    rgba(109, 136, 204, 1) 50%,
    rgba(190, 54, 236, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H2 = styled.h2`
  margin: 0;
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
  height: 50%;
  background: rgb(78, 4, 253);
  background: linear-gradient(
    90deg,
    rgba(78, 4, 253, 1) 0%,
    rgba(167, 48, 230, 1) 100%
  );
`;

export default function ReceiveView() {
  // @ts-ignore
  const { myPublicKey } = React.useContext(AppContext);
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  // @ts-ignore

  const copy = () => {
    let copyText: any = document.getElementById('myInput');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 2000);
  };

  const inputHandler = (event: any) => {
    // setText(event.target.value);
  };

  return (
    <Section>
      <H2>My public key</H2>
      <Div>
        <Textarea id='myInput' value={myPublicKey} />
        <>
          {copied ? <Copied>✔</Copied> : <Uncopied onClick={copy}>📄</Uncopied>}
        </>
      </Div>
      <QRCode value={myPublicKey} />
    </Section>
  );
}
