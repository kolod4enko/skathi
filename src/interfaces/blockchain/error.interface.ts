export enum ErrorCode {
  // Invalid JSON was received by the server.
  // An error occurred on the server while parsing the JSON text.
  ParseError = -32700,
  // The JSON sent is not a valid Request object.
  InvalidRequest = -32600,
  // The method does not exist / is not available.
  MethodNotFound = -32601,
  // Invalid method parameter(s).
  InvalidParams = -32602,
  // Internal JSON-RPC error.
  InternalError = -32603,
  // The server is currently unable to handle the request due to a temporary overload or maintenance.
  ServerError = -32000,
  // Invalid Ethereum address.
  InvalidAddress = -32001,
  // Invalid value for the "value" field in a call or transact.
  InvalidValue = -32002,
  // Nonce has already been used.
  NonceTooLow = -32003,
  // Transaction cost exceeds current gas limit.
  GasLimitExceeded = -32004,
  // The data field is too long.
  DataTooLong = -32005,
  // Invalid signature.
  InvalidSignature = -32006,
  // The server returned an empty response.
  // This may occur if the server is not running or if there is a network error.
  EmptyResponse = -32007,
  // The server returned a non-JSON response.
  NonJsonResponse = -32008,
}