import React from "react";

import classes from "../styles/Home.module.css";

interface IProps {
  array: number[];
}

export default function Arr(props: IProps) {
  return (
    <>
      <div className={classes.arrayElements}>
        {props.array.map((e, i) => {
          let maxElement = Math.max(...props.array);
          let minElement = Math.min(...props.array);
          return (
            <div
              key={i}
              className={`${e == maxElement ? classes.max : ""}${
                e == minElement ? classes.min : ""
              }`}
            >
              <b>{e}</b>
            </div>
          );
        })}
      </div>
    </>
  );
}
