import beli from '../src'

const provider = new beli.provider('');

async function getNewTransactions() {
  const blockNumber = await provider.getBlockNumber()
  const block = await provider.getBlock(blockNumber);

  const transactions = [];

  for (const hash of block.transactions) {
    provider.getTransaction(hash).then((transaction) => {
      transactions.push(transaction)
    })
  }

  return transactions;
}

async function getNewTransactionsAlternative() {
  const blockNumber = await provider.getBlockNumber()
  const block = await provider.getBlock(blockNumber, true);

  return block.transactions;
}

