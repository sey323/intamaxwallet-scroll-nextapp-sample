![Website Deploy](https://deploy-badge.vercel.app/?url=https://intamaxwallet-scrolll-nextapp-sample.vercel.app//&name=Demo)

# 概要

Intmax Wallet SDK を利用し Scroll のテストネットに接続するサンプルです

- [デモサイト](https://intamaxwallet-scrolll-nextapp-sample.vercel.app/)

以下のことができます.

- Intmax Wallet SDK を利用して Scroll のテストネットに接続
- Metamask、WalletConnect、で Scroll のテストネットに接続

本リポジトリの解説記事は以下を参照。

- [RainbowKit を利用し INTMAX Wallet で Dapps に接続する - Qiita](https://qiita.com/sey323/items/e0771797db17be2bfc3b)

## Quick Start

ローカルで起動する場合、以下のコマンドを実行して下さい

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## コントラクト

デフォルトで設定されている NFT のコントラクトアドレスは以下の通り。Scroll のテストネットでデプロイされています。

- `0x3db5bb7de1e85fabef286cc03c8a46787d60d98c`
- [検証用のコントラクト](https://sepolia.scrollscan.com/address/0x3db5bb7de1e85fabef286cc03c8a46787d60d98c)

上記のコントラクトのデプロイ手順などの詳細は以下の記事を参照。

- [Solidity で NFT を作成し Foundry を利用してローカルのテストネットにデプロイする - Qiita](https://qiita.com/sey323/items/6701b34d66a2e8c5ea17)
