import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { ScrollSepoliaTestnet } from "./chains/ScrollSepoliaTestnet";
import { SepoliaTestnet } from "./chains/SepoliaTestnet";
import { intmaxwalletsdk } from "intmax-walletsdk/rainbowkit";
import { createConfig, http } from "wagmi";
import { walletConnectWallet } from "@rainbow-me/rainbowkit/wallets";
import { polygon } from "viem/chains";

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
    {
      groupName: "Popular Wallets",
      wallets: [walletConnectWallet],
    },
  ],
  { projectId: "N/A", appName: "Sample Wallet" }
);

export const config = createConfig({
  chains: [ScrollSepoliaTestnet, SepoliaTestnet],
  transports: {
    [ScrollSepoliaTestnet.id]: http(
      ScrollSepoliaTestnet.blockExplorers.default.url
    ),
    [SepoliaTestnet.id]: http(SepoliaTestnet.blockExplorers.default.url),
  },
  connectors,
});
