import { IResult } from "./bubbleSort";

export function insertionSort(arrToBeSorted: number[]) {
  let arr = [...arrToBeSorted];
  let resultArray: IResult[] = [];
  var n = arr.length;

  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    // Move elements of arr[0..i-1], that are
    // greater than key, to one position ahead
    // of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      resultArray.push({
        array: [...arr],
      });
    }
    // console.log({ items: [key], array: [...arr] });
    arr[j + 1] = key;
    resultArray.push({
      array: [...arr],
    });
  }

  return resultArray;
}
