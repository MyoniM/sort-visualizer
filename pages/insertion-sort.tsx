import { IProp } from ".";
import InsertionSort from "../views/insertionSort";
export default function InsertionSortPage(prop: IProp) {
  return <InsertionSort array={prop.array}/>;
}
