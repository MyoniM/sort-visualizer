import React from "react";
import classes from "../styles/Home.module.css";
import { useMantineTheme } from "@mantine/core";

interface IProps {
  array: number[];
}
export default function InputArrayHeader(prop: IProps) {
  const { colorScheme } = useMantineTheme();
  return (
    <div
      className={classes.arrayHeader}
      style={{
        color: "#5dbaff",
        backgroundColor: colorScheme === "dark" ? "#1a3958" : "#e7f5ff",
      }}
    >
      <div className={classes.arrayElements}>
        {prop.array.map((e, i) => {
          // let maxElement = Math.max(...props.array);
          // let minElement = Math.min(...props.array);
          // var isMax = maxElement == e;
          // var isMin = minElement == e;
          return (
            <p
              key={i}
              // className={`${isMax && classes.max} ${isMin && classes.min}`}
            >
              {e}
            </p>
          );
        })}
      </div>
      <b>Input Array</b>
    </div>
  );
}
