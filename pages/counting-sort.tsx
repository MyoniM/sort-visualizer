import { IProp } from ".";
import CountingSort from "../views/counting-sort";
export default function BubbleSortPage(prop: IProp) {
  return <CountingSort array={prop.array} />;
}
