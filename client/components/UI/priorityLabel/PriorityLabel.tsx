import { Priority } from "@/types/Task";
import React, { ReactNode } from "react";
import classes from "./PriorityLabel.module.css";
import { color } from "@/utils/constants.";
import InputModal from "@/components/task/taskModalComponenets/inputAndLable/input/InputModal";

type Props = {
  priority: Priority;
  size: string;
  children?: ReactNode;
  isActive: boolean;
  onChange: (priority: Priority) => void;
};

function PriorityLabel({ priority, size, isActive, onChange }: Props) {
  return (
    <label
      htmlFor={priority}
      style={{ fontSize: size }}
      className={`${classes.priorityContainer} ${
        isActive ? classes.activePriority : ""
      }`}
    >
      <span
        className={classes.priorityColor}
        style={{ backgroundColor: color[priority] }}
      ></span>
      {priority} PRIORITY
      <InputModal
        style={{ appearance: "none" }}
        id={priority}
        onClick={() => onChange(priority)}
        type="radio"
        name="priority"
      />
    </label>
  );
}

export default PriorityLabel;
