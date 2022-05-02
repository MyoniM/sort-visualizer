import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Bar from "./bar";

import classes from "./bar.module.css";
import { useMantineTheme, Slider, ActionIcon } from "@mantine/core";

import {
  PlayerPlay,
  PlayerPause,
  PlayerStop,
  RotateClockwise,
} from "tabler-icons-react";
import { IResult } from "../../helpers/bubbleSort";
import { MARKS } from "../../constants/options";
interface IProp {
  result: IResult;
  playing: boolean;
  done: boolean;
  setIndex: Dispatch<SetStateAction<number>>;
  setSpeed: Dispatch<SetStateAction<number>>;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}

export default function Bars(prop: IProp) {
  function restart() {
    prop.setIndex(0);
    prop.setPlaying(true);
  }
  const { colorScheme } = useMantineTheme();

  const [proportionalHeight, setProportionalHeight] = useState(0);
  useEffect(() => {
    let screenHeight = window.innerHeight;
    setProportionalHeight(screenHeight * 1.6);
  }, []);

  return (
    <div>
      <div className={classes.barWrapper}>
        {prop.result.array.map((e, i) => {
          let elementHeight = (e * proportionalHeight) / 100;
          return <Bar key={i} value={e} height={elementHeight}></Bar>;
        })}
      </div>
      <div className={classes.controlWrapper}>
        <div className={classes.sliderWrapper}>
          <b>Speed: </b>
          <div className={classes.slider}>
            <Slider
              label={(val) => MARKS.find((mark) => mark.value == val)?.label}
              defaultValue={50}
              step={12.5}
              min={12.5}
              marks={MARKS}
              onChangeEnd={(value) => prop.setSpeed(value / 50)}
              style={{ display: "inline" }}
            />
          </div>
        </div>

        <div className={classes.actionsWrapper}>
          <ActionIcon
            disabled={prop.done}
            variant={prop.playing ? "filled" : "outline"}
            color={colorScheme == "dark" ? "#1a3958" : "blue"}
            onClick={() => {
              if (!prop.playing) prop.setPlaying(true);
            }}
            title="Start"
          >
            <PlayerPlay />
          </ActionIcon>
          <ActionIcon
            disabled={prop.done}
            variant={!prop.playing ? "filled" : "outline"}
            color={colorScheme == "dark" ? "#1a3958" : "blue"}
            onClick={() => {
              if (prop.playing) prop.setPlaying(false);
            }}
            title="Pause"
          >
            <PlayerPause />
          </ActionIcon>
          <ActionIcon
            disabled={!prop.done}
            variant={!prop.playing ? "filled" : "outline"}
            color={colorScheme == "dark" ? "#1a3958" : "blue"}
            title="Stopped"
          >
            <PlayerStop />
          </ActionIcon>
          <ActionIcon
            disabled={prop.playing}
            variant="outline"
            color={colorScheme == "dark" ? "#1a3958" : "blue"}
            onClick={() => restart()}
            title="Restart"
          >
            <RotateClockwise />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
}
