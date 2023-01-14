const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
  const encryptedJsonkey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  ) //用上面这个密码加密下面这个私钥
  console.log(encryptedJsonkey)
  fs.writeFileSync("./.encryptKey.json", encryptedJsonkey)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
