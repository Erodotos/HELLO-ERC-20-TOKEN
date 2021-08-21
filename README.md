# A very basic ERC-20 Token 

## Table of contents

* [About](#general-info)
* [Technologies](#technologies)
* [Deployment](#deployment)
* [Demonstation](#demonstration)

## About

In this elementary stage project, we will be using [OpenZeppelin](https://openzeppelin.com/), an open-source blockchain security product, to implement a very basic ERC-20 Token. OpenZeppelin provides developers a set of smart contracts that enables them to create and deploy secure and efficient code on a wide range of blockchains using [Solidity](https://docs.soliditylang.org/en/v0.8.7/).

My goal for this project is to deploy a functional ERC-20 token on Ethereum's test network "Ropsten" and use [Metamask](https://metamask.io/) to send and receive tokens. You can have a complete code walkthrough on the related [post]() on my website.

## Technologies

<p align="center">
    <a href="https://soliditylang.org/" target="_blank">
        <img src="https://docs.soliditylang.org/en/latest/_images/logo.svg" height="200">
    </a>
</p>

<br>

<p align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" height="100">
  </a>
</p>

<br>

<p align="center">
  <a href="https://www.trufflesuite.com/truffle">
    <img src="https://miro.medium.com/max/400/1*P-T7USHsmPYOSBorXAqXYA.png" width="150" height="165">
  </a>
</p>

<br>

<p align="center">
  <a href="https://openzeppelin.com/">
    <img src="https://d33wubrfki0l68.cloudfront.net/564ac8ab1f12d5b26a0754b7404db2c76f997339/b463f/images/logos/openzeppelin/oz_main_color.svg" height="50">
  </a>
</p>

## Deployment

To deploy this project locally, we need to have installed on our local environment [NodeJS](https://nodejs.org/en/) and [Truffle](https://www.trufflesuite.com/truffle). Subsequently, we can proceed with applying the following commands.

```shell
$ git clone https://github.com/Erodotos/HELLO-ERC-20-TOKEN
$ cd HELLO-ERC-20-TOKEN
$ npm install
```

Additionally, we need to generate a new file with the name ```.env```. In this file, we will be introducing some local variables that are required. For the moment, name a variable for the total supply of our token as shown below.

```text
TOTAL_SUPPLY = 100000
```

After that, we need to get into the [Truffle](https://www.trufflesuite.com/truffle) development console and deploy our smart contracts. The following commands shall do the work. 

```shell
$ truffle develop
$ truffle(develop)> migrate
$ truffle(develop)> test
```

After running the last command, all code tests shall be passed, and we should receive the following result.

``` shell
Contract: Token Test
    ✓ All tokens should be in the deployer's account (84ms)
    ✓ I can send tokens between accounts (203ms)
    ✓ It's not possible to send more tokens than account 1 has (537ms)
3 passing (1s)
```

Now we are ready to send and receive our token via [Metamask](https://metamask.io/) wallet in the browser.

**BONUS**

To deploy the token on [Ethereum's test network](https://ethereum.org/en/developers/docs/networks/) "Ropsten" you need to import your [Metamask](https://metamask.io/) wallet in Truffle to deploy our smart contracts on "Ropsten." 

Find your wallet's ***Secret Recovery Phrase*** as shown below and then copy it.

![](https://i.imgur.com/1DpFsnk.gif)

Afterward, go to our ```.env``` file, create a new variable with the name MNEMONIC, and paste your secret phrase. Furthermore, we need to access the network via an Ethereum Node. To do so you have to create an account into [INFURA](https://infura.io/), create a project and get its ID into our ```.env``` file.

``` text
MNEMONIC = <secret phrase>
INFURA_PROJECT_ID = <infura project id>
```

Finally, execute the following command to deploy our smart contract on [Ethereum's test network](https://ethereum.org/en/developers/docs/networks/) "Ropsten".

```shell
$ truffle(develop)> migrate --network ropsten
```
## Demonstration\

Click on the Image/Link below to view the demonstration video.

[![Demo Video](https://i.imgur.com/AVYTJwR.png)](https://www.youtube.com/watch?v=jUDCeGHQ-zI)
