import Link from "next/link";
import { useMantineTheme } from "@mantine/core";

import classes from "../styles/Home.module.css";
import InputArrayHeader from "../components/inputArrayHeader";
import Visualizer from "../components/visualizer";
import { insertionSort } from "../helpers/insertionSort";
import { bubbleSort } from "../helpers/bubbleSort";

export interface IProp {
  array: number[];
}
const navigation = [
  {
    name: "All Algorithms",
    route: "/",
  },
  {
    name: "Bubble Sort (Easy)",
    route: "/bubble-sort",
  },
  {
    name: "Insertion Sort (Easy)",
    route: "/insertion-sort",
  },
  {
    name: "Selection Sort (Easy)",
    route: "/selection-sort",
  },
  {
    name: "Merge Sort",
    route: "/merge-sort",
  },
  {
    name: "Quick Sort",
    route: "/quick-sort",
  },
  {
    name: "Heap Sort",
    route: "/heap-sort",
  },
];
export default function Home(prop: IProp) {
  const { colorScheme } = useMantineTheme();
  let style = {
    backgroundColor: colorScheme === "dark" ? "#1a3958" : "#e7f5ff",
  };
  return (
    <div>
      <InputArrayHeader array={prop.array} />
      <br />
      <div className={classes.algorithmWrapper}>
        <div className={classes.algorithm} style={style}>
          <Link href={"/bubble-sort"}>
            <h1>Bubble Sort</h1>
          </Link>
          <Visualizer algorithm={bubbleSort} array={prop.array} />
        </div>
        <div className={classes.algorithm} style={style}>
          <Link href={"/insertion-sort"}>
            <h1>Insertion Sort</h1>
          </Link>
          <Visualizer algorithm={insertionSort} array={prop.array} />
        </div>
      </div>
    </div>
  );
}
