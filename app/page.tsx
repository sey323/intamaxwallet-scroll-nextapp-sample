"use client";
import { useState } from "react";
import { ReadContract } from "./components/read-contract";
import { MintNFT } from "./components/write-mint";

function Page() {
  // textのinputの値を取得
  const [contractAddress, setContractAddress] = useState(
    "0xa9c12F47836207879Ec1bbec09361DB932Db2f09" as `0x${string}`
  );

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          id="address"
          defaultValue={contractAddress}
          onChange={(e) => setContractAddress(e.target.value as `0x${string}`)}
          className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="対象のコントラクトアドレスを入力"
          required
        />
      </div>

      <div className="flex justify-center my-3">
        <ReadContract address={contractAddress}></ReadContract>
      </div>

      <div className="flex justify-center my-4">
        <MintNFT address={contractAddress}></MintNFT>
      </div>
    </div>
  );
}

export default Page;
