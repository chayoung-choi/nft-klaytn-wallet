import CaverExtKAS from 'caver-js-ext-kas'

const accessKeyId = "KASK57J04X14W26URJZRYHNF";
const secretAccessKey = "Q3lgSAZQy9nOvoEXD8cFdl8-4CGt8Q3Js88M4miB";

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
