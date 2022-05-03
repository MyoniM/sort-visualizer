import { Prism } from "@mantine/prism";
import { Image } from "@mantine/core";

import { js } from "../constants/countingSort/javascript";
import { java } from "../constants/countingSort/java";
import { python } from "../constants/countingSort/python";
import { cpp } from "../constants/countingSort/cpp";

import { IProp } from "../pages";
import InputArrayHeader from "../components/inputArrayHeader";
import Visualizer from "../components/visualizer";
import { quickSort } from "../helpers/algorithms/quickSort";

export default function QuickSort(prop: IProp) {
  return (
    <div>
      <InputArrayHeader array={prop.array} />
      <br />
      <Visualizer algorithm={quickSort} array={prop.array} />
      <h1>Quick Sort</h1>
      <h4 style={{ margin: 0 }}>Difficulty Level : Medium</h4>
      <p style={{ margin: 0 }}>Resource: GeeksForGeeks</p>

      <p></p>
      <br />
      <h4>The following are implementations of Quick Sort. </h4>
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
              src={"../public/svg/javascript.svg"}
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
            <Image src={"../public/svg/python.svg"} height={20} width={20} />
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
          icon={<Image src={"../public/svg/java.svg"} height={20} width={20} />}
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
              src={"../public/svg/c-plus-plus.svg"}
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
