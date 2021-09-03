import React, { useState } from 'react';
import AppContext from './AppContext';
import QRCode from 'qrcode.react';
import styled from 'styled-components';

const Copied = styled.button`
  color: green;
`;
const Uncopied = styled.button``;

export default function ReceiveView() {
  // @ts-ignore
  const { myPublicKey } = React.useContext(AppContext);
  // @ts-ignore

  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 2000);
  };

  const inputHandler = (event: any) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>ReceiveView</h1>
      <h2>My public key:</h2>
      <input type='text' value={myPublicKey} onChange={inputHandler} />
      {copied ? (
        <Copied onClick={copy}>✔</Copied>
      ) : (
        <Uncopied onClick={copy}>📄</Uncopied>
      )}
      <h2>My QR Code:</h2>
      <QRCode value={myPublicKey} />
    </>
  );
}
