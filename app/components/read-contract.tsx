"use client";
import { useReadContract } from "wagmi";
import { SimpleNftDropAbi } from "@/utils/contracts/simple-nft-drop";

export function ReadContract() {
  const result = useReadContract({
    abi: SimpleNftDropAbi,
    address: "0xe22E258bF0B9E24AedC301b01A3643a7A082aDAd",
    functionName: "totalMinted",
  });

  return (
    <div>
      {result.isLoading && <div>Loading...</div>}
      {result.isSuccess && (
        <div>totalMinted: {result.data?.toString()}です</div>
      )}
    </div>
  );
}
