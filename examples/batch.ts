import beli from "../src";
import {requests} from "../src/requests";

const batch = new beli.batch('');

async function parseAdd(range: { from: number, to: number }) {
  for (let i = range.from; i < range.to; i++) {
    batch.add(requests.getBlock(i, true));
  }

  const result = await batch.execute();

  console.log(result)

  batch.clear();
}

parseAdd({ from: 1, to: 500 })


async function parse(numbers: number[]) {
  const result = await batch.execute(numbers.map((item) => requests.getBlock(item)));

  console.log(result);

  batch.clear();
}

parse([1, 2, 3, 4]);


async function parseCombine(num: number, numbers: number[]) {
  batch.add(requests.getBlock(num));

  const result = await batch.execute(numbers.map((item) => requests.getBlock(item)));

  console.log(result);

  batch.clear();
}

parseCombine(1, [2, 3, 4]);