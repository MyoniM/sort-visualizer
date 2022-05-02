import React from "react";

import classes from "./bar.module.css";

interface IProp {
  value: number;
  height: number;
  color?: string;
}
export default function Bar(prop: IProp) {
  return (
    <div
      className={classes.bar}
      style={{ height: prop.height, background: prop.color }}
    >
      <span>{prop.value}</span>
    </div>
  );
}
