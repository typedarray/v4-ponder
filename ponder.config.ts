import { createConfig } from "ponder";

import { PoolManagerAbi } from "./abis/PoolManager";

export default createConfig({
  chains: {
    mainnet: {
      id: 1,
      rpc: process.env.PONDER_RPC_URL_1,
      maxRequestsPerSecond: 200,
    },
    unichain: {
      id: 130,
      rpc: process.env.PONDER_RPC_URL_130,
      maxRequestsPerSecond: 200,
    },
    arbitrum: {
      id: 42161,
      rpc: process.env.PONDER_RPC_URL_42161,
      maxRequestsPerSecond: 200,
    },
    optimism: {
      id: 10,
      rpc: process.env.PONDER_RPC_URL_10,
      maxRequestsPerSecond: 200,
    },
    base: {
      id: 8453,
      rpc: process.env.PONDER_RPC_URL_8453,
      maxRequestsPerSecond: 200,
    },
    polygon: {
      id: 137,
      rpc: process.env.PONDER_RPC_URL_137,
      maxRequestsPerSecond: 200,
    },
    worldchain: {
      id: 480,
      rpc: process.env.PONDER_RPC_URL_480,
      maxRequestsPerSecond: 200,
    },
    blast: {
      id: 81457,
      rpc: process.env.PONDER_RPC_URL_81457,
      maxRequestsPerSecond: 200,
    },
  },
  contracts: {
    PoolManager: {
      chain: {
        mainnet: {
          address: "0x000000000004444c5dc75cb358380d2e3de08a90",
          startBlock: 23_000_000
        },
        unichain: {
          address: "0x1f98400000000000000000000000000000000004",
          startBlock: 23_000_000
        },
        // arbitrum: {
        //   address: "0x360e68faccca8ca495c1b759fd9eee466db9fb32",
        //   startBlock: 297842872,
        // },
        optimism: {
          address: "0x9a13f98cb987694c9f086b1f5eb990eea8264ec3",
          startBlock: 139_000_000,
        },
        base: {
          address: "0x498581ff718922c3f8e6a244956af099b2652b2b",
          startBlock: 33_000_000,
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
    },
  },
});
