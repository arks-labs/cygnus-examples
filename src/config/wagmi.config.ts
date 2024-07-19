import { http, createConfig } from '@wagmi/core'
import { base } from '@wagmi/core/chains'

export const wagmiConfig = createConfig({
  // cgUSD is on Base chain
  chains: [base],
  transports: {
    [base.id]: http(),
  },
})