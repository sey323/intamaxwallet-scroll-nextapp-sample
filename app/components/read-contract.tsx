"use client";
import { useReadContract } from "wagmi";
import { WagmiSample } from "@/utils/contracts/wagmi-sample";

export function ReadContract() {
  const name = useReadContract({
    abi: WagmiSample,
    address: "0xa9c12F47836207879Ec1bbec09361DB932Db2f09",
    functionName: "name",
  });

  const totalSupply = useReadContract({
    abi: WagmiSample,
    address: "0xa9c12F47836207879Ec1bbec09361DB932Db2f09",
    functionName: "totalSupply",
  });

  return (
    <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 className="flex justify-center font-semibold text-gray-900 dark:text-white">
        コントラクト名: {name.data}
      </h1>

      {totalSupply.isLoading && <div>Loading...</div>}
      {totalSupply.isSuccess && (
        <div>トークンの発行量は {totalSupply.data?.toString()}です</div>
      )}
    </div>
  );
}
