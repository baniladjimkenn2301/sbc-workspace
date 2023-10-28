import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("4CdbUgPGqYreaTj6FC92BEbWeWDQLq94iBqSp9r5MGWv")
const decoded = base58.decode('4irHn7Acqz6FkddbudFR8n6CY53woxeYrWDkMEnZfN7Fi145rCwSBr86uy8uxcEq3nCX2LiLJiikiMqEGsXvy8XQ')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();