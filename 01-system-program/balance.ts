import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('6uvooKTwC4too4qQCd8K3AKFudiYkjvjz44x8dQgVch4');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()