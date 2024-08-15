import { defineChain } from "viem";

export const SepoliaTestnet = defineChain({
  id: 11155111,
  name: "Sepolia Testnet",
  iconBackground: "#fff",
  nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["	https://eth-sepolia-public.unifra.io"] },
  },
  blockExplorers: {
    default: { name: "EtherScan", url: "https://sepolia.etherscan.io" },
  },
});
