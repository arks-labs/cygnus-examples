import { getShareRate } from "../libs/getShareRate"

getShareRate()
  .then((shareRate) => {
    // eg: shareRate: 1.1162
    console.log('shareRate:', shareRate)
  })