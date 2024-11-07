import React, { ReactNode } from "react";
import classes from './Pile.module.css'

type Props = {
  children?: ReactNode;
  theme: "DANGER" | "MUTE";
};

const themes = {
  DANGER: {
    color: "white",
    backgroundColor: "red",
  },
  MUTE: {
    color: "#767575",
    backgroundColor: "#EEECEC",
  },
};

function Pile({theme,children}: Props) {
  return <div className={classes.container} style={themes[theme]}>{children}</div>;
}

export default Pile;
