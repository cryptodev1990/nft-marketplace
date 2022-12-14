import React from 'react';
import { NFTDetailList } from "./dataList"
import NFTDetail from "../NFTDetail"

export default function ItemsOwned() {
  return (
    <div className="flex flex-col py-5">
      <h1 className="text-5xl font-medium py-8" style={{fontFamily:'Furore'}}>ITEMS OWNED</h1>
      <div className="flex flex-col gap-8 w-3/4">
        {NFTDetailList.map((menu, idx) => {
          return (
            <NFTDetail NFT={menu} key={idx} />
          );
        }
        )}
      </div>
    </div>
  )
}