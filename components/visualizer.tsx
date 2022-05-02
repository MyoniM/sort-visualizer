import { useEffect, useState } from "react";
import { IResult } from "../helpers/bubbleSort";
import Bars from "./bar/bars";

export interface IBarProp {
  array: number[];
  algorithm: (arrToBeSorted: number[]) => IResult[];
}
export default function Visualizer(prop: IBarProp) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [arrayBeingSorted, setArrayBeingSorted] = useState<IResult>({
    array: [...prop.array],
  });
  var sortedArray = prop.algorithm([...prop.array]);
  useEffect(() => {
    if (index < sortedArray.length && playing) {
      setTimeout(() => {
        setArrayBeingSorted(sortedArray[index]);
        setIndex(index + 1);
      }, 200 / speed);
    }
    if (index == sortedArray.length && playing) setPlaying(false);
  }, [index, playing]);
  return (
    <Bars
      done={index == sortedArray.length}
      playing={playing}
      setPlaying={setPlaying}
      setIndex={setIndex}
      setSpeed={setSpeed}
      result={arrayBeingSorted}
    />
  );
}
