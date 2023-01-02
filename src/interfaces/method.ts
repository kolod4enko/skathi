export enum Methods {
  GetNetVersion = 'net_version',
  GetGasPrice = 'eth_gasPrice',
  GetCode = 'eth_getCode',

  GetBlockByNumber = 'eth_getBlockByNumber',
  GetBlockByHash = 'eth_getBlockByHash',
  GetBlockNumber = 'eth_blockNumber',

  GetTransactionByHash = 'eth_getTransactionByHash',
  GetTransactionByBlockNumber = 'eth_getTransactionByBlockNumberAndIndex',
  GetTransactionByBlockHash = 'eth_getTransactionByBlockHashAndIndex',

  GetBlockTransactionCountByHash = 'eth_getBlockTransactionCountByHash',
  GetBlockTransactionCountByNumber = 'eth_getBlockTransactionCountByNumber',
  GetTransactionReceipt = 'eth_getTransactionReceipt',
  GetTransactionCount = 'eth_getTransactionCount',

  GetUncleByBlockHashAndIndex = 'eth_getUncleByBlockHashAndIndex',
  GetUncleByBlockNumberAndIndex = 'eth_getUncleByBlockNumberAndIndex',
  GetUncleCountByBlockHash = 'eth_getUncleCountByBlockHash',
  GetUncleCountByBlockNumber = 'eth_getUncleCountByBlockNumber',

  GetLogs = 'eth_getLogs',

  // Sing
  Sign = 'eth_sign',
  SignTransaction = 'eth_signTransaction',
  SendTransaction = 'eth_sendTransaction',
  SendRawTransaction = 'eth_sendRawTransaction',
  Call = 'eth_call',
  EstimateGas = 'eth_estimateGas',

  // Account
  GetAccounts = 'eth_accounts',
  GetBalance = 'eth_getBalance',

  // Filter
  NewFilter = 'eth_newFilter',
  NewBlockFilter = 'eth_newBlockFilter',
  NewPendingTransactionFilter = 'eth_newPendingTransactionFilter',
  UninstallFilter = 'eth_uninstallFilter',
  GetFilterChanges = 'eth_getFilterChanges',
  GetFilterLogs = 'eth_getFilterLogs',
}
