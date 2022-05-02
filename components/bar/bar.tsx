import React from "react";

import classes from "./bar.module.css";

interface IProp {
  value: number,
  height: number;
}
export default function Bar(prop: IProp) {
  return (
    <div className={classes.bar} style={{ height: prop.height }}>
      <span>{prop.value}</span>
    </div>
  );
}
