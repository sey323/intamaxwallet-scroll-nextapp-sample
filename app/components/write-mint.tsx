"use client";

import { WagmiSample } from "@/utils/contracts/wagmi-sample";
import * as React from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";

export function MintNFT({ address }: { address: `0x${string}` }) {
  const { data: hash, isPending, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const sentence = formData.get("sentence") as string;
    const ownerAddress = formData.get("ownerAddress") as `0x${string}`;
    writeContract({
      address: address,
      abi: WagmiSample,
      functionName: "mintNft",
      args: [ownerAddress, sentence],
    });
  }

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError,
    error,
  } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {address ? (
        <>
          <h1 className="flex justify-center font-semibold text-gray-900 dark:text-white">
            NFTを発行する
          </h1>
          <form onSubmit={submit}>
            <div className="grid gap-6 mb-6">
              <div>
                <label
                  htmlFor="ownerAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NFTの所有者のアドレス
                </label>
                <input
                  type="text"
                  id="ownerAddress"
                  name="ownerAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0x7FF84a54d3d7070391Dd9808696Fc547a910af91"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="sentence"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NFTに記録する文字列
                </label>
                <input
                  type="text"
                  id="sentence"
                  name="sentence"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="NFTに記録する文字列"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isPending}
                type="submit"
              >
                {isPending ? "Confirming..." : "Mint"}
              </button>
            </div>
          </form>

          <div>
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {isError && <div>Error: {error.message}</div>}
          </div>
        </>
      ) : (
        <div className="flex justify-center font-semibold text-gray-900 dark:text-white">
          アドレスを入力すると、ERC20トークンを発行します
        </div>
      )}
    </div>
  );
}
