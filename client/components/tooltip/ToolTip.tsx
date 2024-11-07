// components/Tooltip.tsx
import React, { useState } from "react";
import classes from "./ToolTip.module.css";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  children,
}) => {
  const [visible, setVisible] = useState(false);

  if(text.length<50){
    return <div>{text}</div>
  }

  return (
    <div
      className={classes.container}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`${classes.tooltip} ${position}`}>{text}</div>
      )}

    </div>
  );
};

export default Tooltip;
