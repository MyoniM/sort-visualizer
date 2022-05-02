import { Prism } from "@mantine/prism";
import Image from "next/image";

import jsSvg from "../public/svg/javascript.svg";
import pythonSvg from "../public/svg/python.svg";
import javaSvg from "../public/svg/java.svg";
import cppSvg from "../public/svg/c-plus-plus.svg";
import { js } from "../constants/bubbleSort/javascript";
import { java } from "../constants/bubbleSort/java";
import { python } from "../constants/bubbleSort/python";
import { cpp } from "../constants/bubbleSort/cpp";

import { IProp } from "../pages";
import InputArrayHeader from "../components/inputArrayHeader";
import { bubbleSort } from "../helpers/algorithms/bubbleSort";
import Visualizer from "../components/visualizer";

export default function BubbleSort(prop: IProp) {
  return (
    <div>
      <InputArrayHeader array={prop.array} />
      <br />
      <Visualizer algorithm={bubbleSort} array={prop.array} />
      <h1>Bubble Sort</h1>
      <h4 style={{ margin: 0 }}>Difficulty Level : Easy</h4>
      <p style={{ margin: 0 }}>Resource: GeeksForGeeks</p>
      <p>
        <b> Worst and Average Case Time Complexity:</b> O(n*n). The worst case
        occurs when an array is reverse sorted. <br />
        <b> Best Case Time Complexity:</b> O(n). The best case occurs when an
        array is already sorted.
        <br />
        <b> Auxiliary Space:</b> O(1) <br /> <b>Boundary Cases:</b> Bubble sort
        takes minimum time (Order of n) when elements are already sorted. <br />{" "}
        <b> Sorting In Place:</b> Yes <br /> <b> Stable:</b>Yes
        <br /> Due to its simplicity, bubble sort is often used to introduce the
        concept of a sorting algorithm. In computer graphics, it is popular for
        its capability to detect a very small error (like a swap of just two
        elements) in almost-sorted arrays and fix it with just linear complexity
        (2n).
      </p>
      <h4>The following are implementations of Bubble Sort. </h4>
      <Prism.Tabs>
        <Prism.Tab
          colorScheme="dark"
          language="javascript"
          label="javascript"
          withLineNumbers
          copyLabel="Copy code to clipboard"
          copiedLabel="Code copied to clipboard"
          icon={<Image src={jsSvg} height={20} width={20} />}
        >
          {js}
        </Prism.Tab>
        <Prism.Tab
          language="python"
          label="python3"
          colorScheme="dark"
          withLineNumbers
          copyLabel="Copy code to clipboard"
          copiedLabel="Code copied to clipboard"
          icon={<Image src={pythonSvg} height={20} width={20} />}
        >
          {python}
        </Prism.Tab>
        <Prism.Tab
          language="cpp"
          label="java"
          colorScheme="dark"
          withLineNumbers
          copyLabel="Copy code to clipboard"
          copiedLabel="Code copied to clipboard"
          icon={<Image src={javaSvg} height={20} width={20} />}
        >
          {java}
        </Prism.Tab>
        <Prism.Tab
          language="cpp"
          label="c++"
          colorScheme="dark"
          withLineNumbers
          copyLabel="Copy code to clipboard"
          copiedLabel="Code copied to clipboard"
          icon={<Image src={cppSvg} height={20} width={20} />}
        >
          {cpp}
        </Prism.Tab>
      </Prism.Tabs>
    </div>
  );
}
