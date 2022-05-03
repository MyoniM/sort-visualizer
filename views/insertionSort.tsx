import { Prism } from "@mantine/prism";
import { Image } from '@mantine/core';

import { js } from "../constants/insertionSort/javascript";
import { java } from "../constants/insertionSort/java";
import { python } from "../constants/insertionSort/python";
import { cpp } from "../constants/insertionSort/cpp";

import { IProp } from "../pages";
import InputArrayHeader from "../components/inputArrayHeader";
import { insertionSort } from "../helpers/algorithms/insertionSort";
import Visualizer from "../components/visualizer";

export default function InsertionSort(prop: IProp) {
  return (
    <div>
      <InputArrayHeader array={prop.array} />
      <br />
      <Visualizer algorithm={insertionSort} array={prop.array} />
      <h1>Insertion Sort</h1>
      <h4 style={{ margin: 0 }}>Difficulty Level : Easy</h4>
      <p style={{ margin: 0 }}>Resource: GeeksForGeeks</p>
      <p>
        Insertion sort is a simple sorting algorithm that works similar to the
        way you sort playing cards in your hands. The array is virtually split
        into a sorted and an unsorted part. Values from the unsorted part are
        picked and placed at the correct position in the sorted part.
        <br />
        <br />
        <b> Time Complexity:</b> O(n*n). <br />
        <b> Boundary Cases: </b> Insertion sort takes maximum time to sort if
        elements are sorted in reverse order. And it takes minimum time (Order
        of n) when elements are already sorted.
        <br />
        <b> Algorithmic Paradigm: </b>Incremental Approach
        <b> Sorting In Place: </b> Yes <br />
        <b> Stable:</b>Yes
        <br />
        <b> Uses: </b>Insertion sort is used when number of elements is small.
        It can also be useful when input array is almost sorted, only few
        elements are misplaced in complete big array.
        <br />
        <br />
        <b> What is Binary Insertion Sort?</b>
        <br />
        We can use binary search to reduce the number of comparisons in normal
        insertion sort. Binary Insertion Sort uses binary search to find the
        proper location to insert the selected item at each iteration. In normal
        insertion, sorting takes
        <i>
          <b>O(i)</b>
        </i>{" "}
        (at ith iteration) in worst case. We can reduce it to
        <i>
          <b>O(logi)</b>
        </i>{" "}
        by using binary search. The algorithm, as a whole, still has a running
        worst case running time of
        <i>
          <b>O(n^2)</b>
        </i>{" "}
        because of the series of swaps required for each insertion.
      </p>
      <h4>The following are implementations of Insertion Sort. </h4>
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
