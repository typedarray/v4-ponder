import { createConfig } from "ponder";
import { http } from "viem";

import { PoolManagerAbi } from "./abis/PoolManager";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
    unichain: {
      chainId: 130,
      transport: http(process.env.PONDER_RPC_URL_130),
    },
  },
  contracts: {
    PoolManager: {
      network: {
        mainnet: {
          address: "0x000000000004444c5dc75cb358380d2e3de08a90",
          startBlock: 21688329
        },
        unichain: {
          address: "0x1f98400000000000000000000000000000000004",
          startBlock: 0
        },
      },
      abi: PoolManagerAbi,
      startBlock: 9860887,
      filter: [
        {
          event: "Initialize",
          args: {}
        },
      ],
    },
  },
});
