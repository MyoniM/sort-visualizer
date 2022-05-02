import { IProp } from ".";
import BubbleSort from "../views/bubbleSort";
export default function BubbleSortPage(prop: IProp) {
  return <BubbleSort array={prop.array} />;
}
