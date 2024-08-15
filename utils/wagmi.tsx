import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, base, mainnet, optimism, polygon } from "wagmi/chains";
import { ScrollSepoliaTestnet } from "./chains/ScrollSepoliaTestnet";
import { SepoliaTestnet } from "./chains/SepoliaTestnet";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "TEST",
  chains: [SepoliaTestnet, ScrollSepoliaTestnet],
  ssr: true,
});
