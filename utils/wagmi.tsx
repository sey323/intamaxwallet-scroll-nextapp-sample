import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { ScrollSepoliaTestnet } from "./chains/ScrollSepoliaTestnet";
import { intmaxwalletsdk } from "intmax-walletsdk/rainbowkit";
import { createConfig, http } from "wagmi";

// Intmax Walletの設定
const intmaxWallet = intmaxwalletsdk({
  wallet: {
    url: "https://wallet.intmax.io/",
    name: "INTMAX Wallet",
    iconUrl: "https://wallet.intmax.io/favicon.ico",
  },
  metadata: {
    name: "IntmaxWallet Connect Sample App",
    description:
      "This is a sample of connecting to the polygon using intmax Wallet.",
  },
});

// 接続可能なウォレットの設定
const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended Wallet",
      wallets: [intmaxWallet],
    },
  ],
  { projectId: "N/A", appName: "Sample Wallet" }
);

export const config = createConfig({
  chains: [ScrollSepoliaTestnet],
  transports: {
    [ScrollSepoliaTestnet.id]: http(),
  },
  connectors,
  ssr: true,
});
