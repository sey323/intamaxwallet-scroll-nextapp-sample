import { Chain } from "@rainbow-me/rainbowkit";

export const SepoliaTestnet = {
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
} as const satisfies Chain;
