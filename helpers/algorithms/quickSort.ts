import { IResult } from "./bubbleSort";

export function quickSort(arrToBeSorted: number[]) {
  let arr = [...arrToBeSorted];
  let resultArray: IResult[] = [];
  var n = arr.length;

  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);

  var range = max - min + 1;
  var count = Array.from({ length: range }, (_, i) => 0);
  var output = Array.from({ length: n }, (_, i) => 0);

  for (let i = 0; i < n; i++) {
    count[arr[i] - min]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
    resultArray.push({
      items: [i],
      array: [...arr],
    });
  }

  return resultArray;
}
