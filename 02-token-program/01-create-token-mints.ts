import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('4irHn7Acqz6FkddbudFR8n6CY53woxeYrWDkMEnZfN7Fi145rCwSBr86uy8uxcEq3nCX2LiLJiikiMqEGsXvy8XQ');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('MINT_'), //mint 
        new Web3.PublicKey('4irHn7Acqz6FkddbudFR8n6CY53woxeYrWDkMEnZfN7Fi145rCwSBr86uy8uxcEq3nCX2LiLJiikiMqEGsXvy8XQ'), //owner
        new Web3.PublicKey('AUTHORITY'), //authority
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()