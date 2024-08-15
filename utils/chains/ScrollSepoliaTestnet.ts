import { Chain } from "@rainbow-me/rainbowkit";

export const ScrollSepoliaTestnet = {
  id: 534351,
  name: "Scroll Sepolia Testnet",
  iconBackground: "#fff",
  nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://sepolia-rpc.scroll.io/"] },
  },
  blockExplorers: {
    default: { name: "Scrollscan", url: "https://sepolia.scrollscan.com" },
  },
} as const satisfies Chain;
