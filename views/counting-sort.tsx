import { Prism } from "@mantine/prism";
import { Image } from "@mantine/core";

import { js } from "../constants/countingSort/javascript";
import { java } from "../constants/countingSort/java";
import { python } from "../constants/countingSort/python";
import { cpp } from "../constants/countingSort/cpp";

import { IProp } from "../pages";
import InputArrayHeader from "../components/inputArrayHeader";
import Visualizer from "../components/visualizer";
import { countingSort } from "../helpers/algorithms/countingSort";

export default function CountingSort(prop: IProp) {
  return (
    <div>
      <InputArrayHeader array={prop.array} />
      <br />
      <Visualizer algorithm={countingSort} array={prop.array} />
      <h1>Counting Sort</h1>
      <h4 style={{ margin: 0 }}>Difficulty Level : Easy</h4>
      <p style={{ margin: 0 }}>Resource: GeeksForGeeks</p>
      <p>
        Counting sort is a sorting technique based on keys between a specific
        range. It works by counting the number of objects having distinct key
        values (kind of hashing). Then do some arithmetic to calculate the
        position of each object in the output sequence.
        <br />
        Counting sort makes assumptions about the data, for example, it assumes
        that values are going to be in the range of 0 to 10 or 10 – 99 etc, Some
        other assumptions counting sort makes are input data will be all real
        numbers.
        <br />
        Like other algorithms this sorting algorithm is not a comparison-based
        algorithm, it hashes the value in a temporary count array and uses them
        for sorting.
        <br />
        It uses a temporary array making it a non <b> In Place algorithm</b>.
      </p>
      <p>
        <b>Points to be noted:</b>
        <li>
          Counting sort is efficient if the range of input data is not
          significantly greater than the number of objects to be sorted. <br />
          Consider the situation where the input sequence is between range 1 to
          10K and the data is 10, 5, 10K, 5K.
        </li>
        <li>
          It is not a comparison-based sorting. Its running time complexity is
          O(n) with space proportional to the range of data.
        </li>
        <li>
          Counting sort is able to achieve this because we are making
          assumptions about the data we are sorting.
        </li>
        <li>
          It is often used as a sub-routine to another sorting algorithm like
          radix sort.
        </li>
        <li>
          Counting sort uses partial hashing to count the occurrence of the data
          object in O(1).
        </li>
        <li>
          Counting sort is not a stable algorithm. But it can be made stable
          with some code changes.
        </li>
      </p>
      <br />
      <h4>The following are implementations of Counting Sort. </h4>
      <Prism.Tabs>
        <Prism.Tab
          colorScheme="dark"
          language="javascript"
          label="javascript"
          withLineNumbers
          copyLabel="Copy code to clipboard"
          copiedLabel="Code copied to clipboard"
          icon={
            <Image
              src={"/svg/javascript.svg"}
              height={20}
              width={20}
            />
          }
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
          icon={
            <Image src={"/svg/python.svg"} height={20} width={20} />
          }
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
          icon={
            <Image
              src={"/svg/c-plus-plus.svg"}
              height={20}
              width={20}
            />
          }
        >
          {cpp}
        </Prism.Tab>
      </Prism.Tabs>
    </div>
  );
}
