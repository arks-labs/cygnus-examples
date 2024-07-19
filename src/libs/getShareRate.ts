import BigNumber from "bignumber.js"
import { readContracts } from '@wagmi/core'

import { cgUsdABI } from '../abi'
import { cgUsdAddress } from '../constants'
import { wagmiConfig } from '../config/wagmi.config'

/**
 * get the share rate of wcgUSD / cgUSD
 */
export const getShareRate = async () => {
  const contracts = [
    {
      address: cgUsdAddress,
      abi: cgUsdABI,
      functionName: 'totalSupply' // the function to get total assets
    },
    {
      address: cgUsdAddress,
      abi: cgUsdABI,
      functionName: 'getTotalShares' // the function to get total shares
    }
  ]

  // get results from contracts. (https://wagmi.sh/core/api/actions/readContracts)
  const [totalAssetsResult, totalSharesResult] = await readContracts(wagmiConfig, {
    contracts
  })

  // eg:
  // totalAssetsResult: {
  //   result: 31349415121240n,
  //   status: "success",
  // }
  console.log('totalAssetsResult:', totalAssetsResult)

  // eg:
  // totalSharesResult: {
  //   result: 28086849458947n,
  //   status: "success",
  // }
  console.log('totalSharesResult:', totalSharesResult)

  // check if all values are valid
  if (totalAssetsResult.result && totalSharesResult.result) {
    const totalAssets = totalAssetsResult.result as bigint
    const totalShares = totalSharesResult.result as bigint

    // compute share rate: rate = totalAssets / totalShares
    // types of values are bigint, so we use bignumber.js to keep decimals when performing division operation
    const shareRate = BigNumber(totalAssets.toString())
      .div(totalShares.toString())

    // eg: shareRate: 1.11615990134677484671
    console.log('shareRate before truncated:', shareRate.toString())

    // keep 4 decimal places for readability.
    return Number(shareRate.toFixed(4))
  }

  // handle error if values are not valid
  // simply print an warning message and return 1 here for example
  console.warn('Failed to get realtime share rate. Return 1 as default value')
  return 1
}
