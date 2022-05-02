import { IProp } from ".";
import SelectionSort from "../views/selectionSort";
export default function InsertionSortPage(prop: IProp) {
  return <SelectionSort array={prop.array} />;
}
