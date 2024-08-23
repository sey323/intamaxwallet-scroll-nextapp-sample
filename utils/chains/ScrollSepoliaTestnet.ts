import { defineChain } from "viem";

export const ScrollSepoliaTestnet = defineChain({
  id: 534351,
  name: "Scroll Sepolia Testnet",
  iconBackground: "#fff",
  nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_CABINET_SCROLL_SEPORIA_RPC_JSON_API_KEY!],
    },
  },
  blockExplorers: {
    default: { name: "Scrollscan", url: "https://sepolia.scrollscan.com" },
  },
});
