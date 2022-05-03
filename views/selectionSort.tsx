import { Prism } from "@mantine/prism";
import { Image } from '@mantine/core';

import { js } from "../constants/selectionSort/javascript";
import { java } from "../constants/selectionSort/java";
import { python } from "../constants/selectionSort/python";
import { cpp } from "../constants/selectionSort/cpp";

import { IProp } from "../pages";
import InputArrayHeader from "../components/inputArrayHeader";
import Visualizer from "../components/visualizer";
import { selectionSort } from "../helpers/algorithms/selectionSort";

export default function SelectionSort(prop: IProp) {
  return (
    <div>
      <InputArrayHeader array={prop.array} />
      <br />
      <Visualizer algorithm={selectionSort} array={prop.array} />
      <h1>Selection Sort</h1>
      <h4 style={{ margin: 0 }}>Difficulty Level : Easy</h4>
      <p style={{ margin: 0 }}>Resource: GeeksForGeeks</p>
      <p>
        <b> Time Complexity:</b> O(n*n) as there are two nested loops. <br />
        <b> Auxiliary Space:</b> O(1) <br />
        <br />
        The good thing about selection sort is it never makes more than O(n)
        swaps and can be useful when memory write is a costly operation.
        <br />
        The selection sort algorithm sorts an array by repeatedly finding the
        minimum element (considering ascending order) from unsorted part and
        putting it at the beginning. The algorithm maintains two subarrays in a
        given array. <br />
        <li>The subarray which is already sorted. </li>
        <li>Remaining subarray which is unsorted.</li>
        In every iteration of selection sort, the minimum element (considering
        ascending order) from the unsorted subarray is picked and moved to the
        sorted subarray.
      </p>
      <h4>The following are implementations of Selection Sort. </h4>
      <Prism.Tabs>
        <Prism.Tab
          colorScheme="dark"
          language="javascript"
          label="javascript"
          withLineNumbers
          copyLabel="Copy code to clipboard"
          copiedLabel="Code copied to clipboard"
          icon={<Image src={"/svg/javascript.svg"} height={20} width={20} />}
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
          icon={<Image src={"/svg/python.svg"} height={20} width={20} />}
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
          icon={<Image src={"/svg/java.svg"} height={20} width={20} />}
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
          icon={<Image src={"/svg/c-plus-plus.svg"} height={20} width={20} />}
        >
          {cpp}
        </Prism.Tab>
      </Prism.Tabs>
    </div>
  );
}
