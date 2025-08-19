import { createConfig } from "ponder";

import { PoolManagerAbi } from "./abis/PoolManager";

export default createConfig({
  ordering: "isolated",
  chains: {
    mainnet: {
      id: 1,
      rpc: "https://eth-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8",
      maxRequestsPerSecond: 200,
    },
    // unichain: {
    //   id: 130,
    //   rpc: "https://unichain-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8",
    //   maxRequestsPerSecond: 200,
    // },
    // arbitrum: {
    //   id: 42161,
    //   rpc: "https://arb-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8",
    //   maxRequestsPerSecond: 200,
    // },
    optimism: {
      id: 10,
      rpc: "https://opt-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8",
      maxRequestsPerSecond: 200,
    },
    base: {
      id: 8453,
      rpc: "https://base-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8",
      maxRequestsPerSecond: 200,
    },
    // polygon: {
    //   id: 137,
    //   rpc: "https://polygon-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8",
    //   maxRequestsPerSecond: 200,
    // },
    // worldchain: {
    //   id: 480,
    //   rpc: "https://worldchain-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8",
    //   maxRequestsPerSecond: 200,
    // },
    // blast: {
    //   id: 81457,
    //   rpc: "https://blast-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8",
    //   maxRequestsPerSecond: 200,
    // },
  },
  contracts: {
    PoolManager: {
      chain: {
        mainnet: {
          address: "0x000000000004444c5dc75cb358380d2e3de08a90",
          startBlock: 21688329
        },
        // unichain: {
        //   address: "0x1f98400000000000000000000000000000000004",
        //   startBlock: 0
        // },
        // arbitrum: {
        //   address: "0x360e68faccca8ca495c1b759fd9eee466db9fb32",
        //   startBlock: 297842872,
        // },
        optimism: {
          address: "0x9a13f98cb987694c9f086b1f5eb990eea8264ec3",
          startBlock: 130947675,
        },
        base: {
          address: "0x498581ff718922c3f8e6a244956af099b2652b2b",
          startBlock: 25350988,
        },
        // polygon: {
        //   address: "0x67366782805870060151383f4bbff9dab53e5cd6",
        //   startBlock: 66980384,
        // },
        // worldchain: {
        //   address: "0xb1860d529182ac3bc1f51fa2abd56662b7d13f33",
        //   startBlock: 9111872,
        // },
        // blast: {
        //   address: "0x1631559198a9e474033433b2958dabc135ab6446",
        //   startBlock: 14377311,
        // },
      },
      abi: PoolManagerAbi,
      filter: [
        {
          event: "Initialize",
          args: {}
        },
        {
          event: "Swap",
          args: {}
        },
      ],
    },
  },
});
