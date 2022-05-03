import { IProp } from ".";
import QuickSort from "../views/quickSort";
export default function InsertionSortPage(prop: IProp) {
  return <QuickSort array={prop.array} />;
}
