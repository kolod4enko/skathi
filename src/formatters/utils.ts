export const assertNotNull = (value: any, msg?: string): void => {
  if (!value) {
    throw new Error(msg || 'Value cannot be empty');
  }
}

export const getAddress = (value: any): string => {
  return getHex(value);
}

export const getTopics = (value: any): (string | string[])[] => {
  if (!Array.isArray(value)) {
    throw new Error('Invalid value');
  }

  return getHex(value);
}

export const assertNotType = (value: any, type: string, msg?: string): void => {
  if (typeof value !== type) {
    throw new Error(msg || 'Value must be a number');
  }
}

export const numberToHex = (value: any): string => {

  return isNumber(value) ? `0x${value.toString(16)}` : ''
}

export const isHex = (value: any): boolean =>
  (typeof value === 'string' && !!value.match(/^0x[0-9A-Fa-f]*$/))

export const getHex = <T extends any>(value: any): T => {
  if (Array.isArray(value)) {
    for (const item of value) {
      if (Array.isArray(item)) {
        getHex(item);
      }

      if (!isHex(item)) {
        throw new Error('Invalid value');
      }
    }
  }

  if (!isHex(value)) {
    throw new Error('Invalid value');
  }

  return value;
}

export const hexToNumber = (value: string): number => {
  if (!value) {
    throw new Error('Hex cannot be empty');
  }

  if (typeof value === 'string' && !isHex(value)) {
    throw new Error(`The value of "${value}" is not a hex string`);
  }

  return parseInt(value);
}

export const toLowerCase = (value: string): string => value.toLowerCase()

export const toHexString = (value: string): string => {
  if (!value)

    if (typeof value !== 'string') {
      throw new Error('Hex cannot be empty');
    }

  return ''
}

export const isNumber = (data: any): boolean => typeof data === 'number';

// export const isAddress = (address: string): boolean => {
//   if (typeof address !== 'string') {
//     throw new Error(`The value of "${address}" is not a string`);
//   }
//
//   if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
//     if (address.substring(0, 2) !== "0x") { address = "0x" + address; }
//   } else {
//     throw new Error('Invalid address')
//   }
// };
