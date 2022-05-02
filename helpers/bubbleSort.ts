export interface IResult {
  array: number[];
}

export function bubbleSort(arrToBeSorted: number[]) {
  let arr = [...arrToBeSorted];
  let resultArray: IResult[] = [];
  var n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    var hasSwapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        var hasSwapped = true;
        resultArray.push({ array: [...arr] });
      }
    }

    if (!hasSwapped) break;
  }

  return resultArray;
}
