import { ReadContract } from "./components/read-contract";
import { MintNFT } from "./components/write-mint";

function Page() {
  return (
    <div>
      <div className="flex items-center justify-center my-3">
        <ReadContract></ReadContract>
      </div>

      <div className="flex items-center justify-center my-4">
        <MintNFT></MintNFT>
      </div>
    </div>
  );
}

export default Page;
