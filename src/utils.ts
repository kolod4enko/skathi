import { BlockTags } from "./constants";
import { BlockTag } from "./interfaces/blockchain";

export const assertNotNull = (value: any, msg?: string) => {
  if (!value) {
    throw new Error(msg || `Cannot be null`);
  }
}

export const numberToHex = (num: number): string => {
  if (!num) {
    return null;
  }

  return `0x${num.toString(16)}`;
};

export const isHex = (hex: string): boolean =>
  ((typeof hex === 'string' || typeof hex === 'number') && /^(-0x|0x)?[0-9a-f]*$/i.test(hex));

export const hexToNumber = (hex: string): number => {
  if (!hex) {
    throw new Error('Hex cannot be empty');
  }

  if (typeof hex === 'string' && !isHex(hex)) {
    throw new Error(`The value of "${hex}" is not a hex string`);
  }

  return parseInt(hex);
}

export const toLowerCase = (str: string): string => str.toLowerCase()

export const isNumber = (data: any): boolean => typeof data === 'number';
export const isBlockTag = (data: any): boolean => BlockTags.includes(<BlockTag>data);
