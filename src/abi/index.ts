/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xCa72827a3D211CfD8F6b00Ac98824872b72CAb49)
 */
export const cgUsdABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_asset', internalType: 'address', type: 'address' },
      { name: '_owner', internalType: 'address', type: 'address' },
      {
        name: '_authority',
        internalType: 'contract Authority',
        type: 'address'
      }
    ]
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode'
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance'
  },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      }
    ],
    name: 'Approval'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reportTimestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true
      },
      {
        name: 'withdrawalsWithdrawn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'postBufferedAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'postInvestedAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      }
    ],
    name: 'AssetsDistributed'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'newAuthority',
        internalType: 'contract Authority',
        type: 'address',
        indexed: true
      }
    ],
    name: 'AuthorityUpdated'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'postBufferedAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'postInvestedAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      }
    ],
    name: 'Invested'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'locator',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'LocatorSet'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      }
    ],
    name: 'OwnershipTransferred'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Paused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'preRebaseTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'postRebaseTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'sharesAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      }
    ],
    name: 'SharesBurnt'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'referral',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Submitted'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reportTimestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true
      },
      {
        name: 'timeElapsed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'preTotalShares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'preTotalAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'postTotalShares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      {
        name: 'postTotalAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      }
    ],
    name: 'TokenRebased'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      }
    ],
    name: 'Transfer'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'sharesValue',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      }
    ],
    name: 'TransferShares'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Unpaused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      }
    ],
    name: 'WithdrawalsReceived'
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_spender', internalType: 'address', type: 'address' }
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_spender', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'asset',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'authority',
    outputs: [{ name: '', internalType: 'contract Authority', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'canDeposit',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_sharesAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'convertToAssets',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_assetsAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'convertToShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_spender', internalType: 'address', type: 'address' },
      { name: '_subtractedValue', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getLocator',
    outputs: [{ name: '', internalType: 'contract ILocator', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTotalAssets',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' }
    ]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTotalPooledAssets',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTotalShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_reportTimestamp', internalType: 'uint256', type: 'uint256' },
      { name: '_timeElapsed', internalType: 'uint256', type: 'uint256' },
      { name: '_newInvestedAssets', internalType: 'uint256', type: 'uint256' },
      {
        name: '_withdrawalVaultBalance',
        internalType: 'uint256',
        type: 'uint256'
      },
      {
        name: '_sharesRequestedToBurn',
        internalType: 'uint256',
        type: 'uint256'
      },
      {
        name: '_withdrawalFinalizationBatches',
        internalType: 'uint256[]',
        type: 'uint256[]'
      },
      { name: '_simulatedShareRate', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'handleOracleReport',
    outputs: [
      {
        name: 'postRebaseAmounts',
        internalType: 'uint256[3]',
        type: 'uint256[3]'
      }
    ]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_spender', internalType: 'address', type: 'address' },
      { name: '_addedValue', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_locator', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_assetsAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'invest',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_referral', internalType: 'address', type: 'address' },
      { name: '_assetsAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'mint',
    outputs: [
      { name: 'sharesAmount', internalType: 'uint256', type: 'uint256' }
    ]
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_assetsAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'previewDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_sharesAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'previewMint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_sharesAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'previewRedeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_assetsAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'previewWithdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'resume',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'newAuthority',
        internalType: 'contract Authority',
        type: 'address'
      }
    ],
    name: 'setAuthority',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'sharesOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_sharesAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'transferShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_sharesAmount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'transferSharesFrom',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  }
] as const