import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('4irHn7Acqz6FkddbudFR8n6CY53woxeYrWDkMEnZfN7Fi145rCwSBr86uy8uxcEq3nCX2LiLJiikiMqEGsXvy8XQ')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('6uvooKTwC4too4qQCd8K3AKFudiYkjvjz44x8dQgVch4');
    const publicKeyTo = new Web3.PublicKey('CBn8yK1BF31He3NEC5svNLDk173fiH8F3wJda7T2RQZA');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 3,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();