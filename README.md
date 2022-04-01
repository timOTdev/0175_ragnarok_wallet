# Ragnarok Wallet

- Ragnarok Wallet is a Solana wallet and a remix of the Figment.io Solana Pathway project with some custom developments.
- Send coins to another wallet on devnet.
- View current wallet balance updated from latest price from CoinGecko.
- Copy wallet address or scan with QR code.
- Show transaction history for wallet. (Periodically will reset with Datahub free tier)

---

## Features

- [x] Wallet to display holdings
- Sending tokens
  - [x] Send to target address with specified amounts
- Receiving tokens
  - [x] Copy pubkey button
  - [x] QR code
- [x] Show transaction history

---

## Tech Stack

- React - javascript library
- Typescript - react superset
- Styled-Components - styling library
- solana/web3.js - API for interacting with RPC node to Solana
- Datahub - data layer on blockchain
- CoinGecko API - get latest price for solana and other information
- qrcode.react - used to generate QR code
- Github Pages - used to deploy site

---

## Resources

- [Datahub](https://figment.io/datahub/)
- [CoinGecko API](https://www.coingecko.com/en/api)
- [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/index.html)
- [qrcode.react](https://github.com/zpao/qrcode.react)

---

## Getting Started with Ragnarok Wallet

1. Make a new `.env.local` file and copy the format from `.env.example`.

- You will need to generate 2 keypairs and add the values for:
- REACT_APP_PUBLIC_WALLET_KEY=
- REACT_APP_PRIVATE_WALLET_KEY=
- REACT_APP_TEST_PUBLIC_WALLET_KEY=
- REACT_APP_TEST_PRIVATE_WALLET_KEY=

- Public Wallet Key should look like `ARFZVbY4QXAgVmWPh79UcVJJhXVihtGyqcgx7GaqcaZL`.
- Private Wallet Key should be saved like `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]`

- If you've gone through the figment Solana tutorial, you might already be familiar with this.
- Otherwise you need to run this code in your own app.

```js
// See https://learn.figment.io/tutorials/create-solana-keypair
const keypair = Keypair.generate();
const address = keypair?.publicKey.toString();
const secret = JSON.stringify(Array.from(keypair.secretKey));
```

2. You will need your own datahub API key. You can register at [Datahub](https://figment.io/datahub/). They have generous free offerings for developers.

- Add that to your `.env.local` for REACT_APP_DATAHUB_API_KEY.

---

## Working with Github Pages

- Use commands in package.json to deploy and re-deploy.
- Run `yarn predeploy` before `yarn deploy`.
- A gh-pages branch will be handled automatically on Github.
-

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
