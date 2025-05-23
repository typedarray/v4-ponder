import { createConfig } from "ponder";
import { http } from "viem";

import { PoolManagerAbi } from "./abis/PoolManager";

export default createConfig({
  ordering: "multichain",
  networks: {
    mainnet: {
      chainId: 1,
      transport: http("https://eth-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8"),
      maxRequestsPerSecond: 200,
    },
    unichain: {
      chainId: 130,
      transport: http("https://unichain-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8"),
      maxRequestsPerSecond: 200,
    },
    arbitrum: {
      chainId: 42161,
      transport: http("https://arb-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8"),
      maxRequestsPerSecond: 200,
    },
    optimism: {
      chainId: 10,
      transport: http("https://opt-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8"),
      maxRequestsPerSecond: 200,
    },
    base: {
      chainId: 8453,
      transport: http("https://base-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8"),
      maxRequestsPerSecond: 200,
    },
    polygon: {
      chainId: 137,
      transport: http("https://polygon-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8"),
      maxRequestsPerSecond: 200,
    },
    worldchain: {
      chainId: 480,
      transport: http("https://worldchain-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8"),
      maxRequestsPerSecond: 200,
    },
    blast: {
      chainId: 81457,
      transport: http("https://blast-mainnet.g.alchemy.com/v2/SF8Vq82Y1rHsKx3N3T8sVfyd-CNH3Va8"),
      maxRequestsPerSecond: 200,
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
        arbitrum: {
          address: "0x360e68faccca8ca495c1b759fd9eee466db9fb32",
          startBlock: 297842872,
        },
        optimism: {
          address: "0x9a13f98cb987694c9f086b1f5eb990eea8264ec3",
          startBlock: 130947675,
        },
        base: {
          address: "0x498581ff718922c3f8e6a244956af099b2652b2b",
          startBlock: 25350988,
        },
        polygon: {
          address: "0x67366782805870060151383f4bbff9dab53e5cd6",
          startBlock: 66980384,
        },
        worldchain: {
          address: "0xb1860d529182ac3bc1f51fa2abd56662b7d13f33",
          startBlock: 9111872,
        },
        blast: {
          address: "0x1631559198a9e474033433b2958dabc135ab6446",
          startBlock: 14377311,
        },
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
