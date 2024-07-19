# README

## How to run the examples

- run `pnpm i` to install dependencies (you can use `npm/bun/yarn` as well)

- use [tsx](https://tsx.is/getting-started) or [bun](https://bun.sh/docs/runtime/typescript) to run the example script

for example:

```bash
# use tsx (Node.js v18 or higher is required)
npx tsx src/examples/getShareRate.ts
```

```bash
# use bun
bun src/examples/getShareRate.ts
```

## Info

- cgUSD address: `0xCa72827a3D211CfD8F6b00Ac98824872b72CAb49`
- cgUSD ABI: see [src/abi/index.ts](src/abi/index.ts)

## Examples

### get share rate of wcgUSD / cgUSD

- see the [implementation](src/examples/getShareRate.ts) (explained with comments) for details.
- [usage](src/examples/getShareRate.ts)
