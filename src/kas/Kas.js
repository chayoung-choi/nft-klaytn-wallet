import CaverExtKAS from 'caver-js-ext-kas'

const accessKeyId = process.env.REACT_APP_ACCESS_KEY_ID
const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY

const caver = new CaverExtKAS(1001, accessKeyId, secretAccessKey)


const option = {
  headers: [
    {name: 'Authorization', value: 'Basic ' + Buffer.from(accessKeyId + ':' + secretAccessKey).toString('base64')},
    {name: 'x-chain-id', value: 1001},
  ]
}

// const caver = new CaverExtKAS(new CaverExtKAS.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option))

export const blockNumber = async () => {
  const result = await caver.rpc.klay.getBlockNumber()
  console.log(result)
  return result
}

// ** 클레이튼 계정 생성
export const walletCreateAccount = async () => await caver.kas.wallet.createAccount()
