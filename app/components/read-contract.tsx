"use client";
import { useReadContract } from "wagmi";
import { WagmiSample } from "@/utils/contracts/wagmi-sample";

export function ReadContract({ address }: { address: `0x${string}` }) {
  const name = useReadContract({
    abi: WagmiSample,
    address: address,
    functionName: "name",
  });

  const totalSupply = useReadContract({
    abi: WagmiSample,
    address: address,
    functionName: "totalSupply",
  });

  const latestNftSentence = useReadContract({
    abi: WagmiSample,
    address: address,
    functionName: "getSentence",
    args: [BigInt(totalSupply.data?.toString() || "0") - BigInt(1)],
  });

  return (
    <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 className="flex justify-center font-semibold text-gray-900 dark:text-white">
        {address
          ? `トークン名: ${name.data}`
          : `アドレスを入力するとトークンの詳細を確認できます`}
      </h1>

      {totalSupply.isLoading && <div>Loading...</div>}
      {totalSupply.isSuccess && (
        <div>トークンの発行量は {totalSupply.data?.toString()}です</div>
      )}

      <div className="my-4 border-b border-gray-300"></div>

      <div>
        <h1 className="flex justify-center font-semibold text-gray-900 dark:text-white">
          最後に発行されたNFTに登録された文字列
        </h1>
        <div>{latestNftSentence.data}</div>
      </div>
    </div>
  );
}
