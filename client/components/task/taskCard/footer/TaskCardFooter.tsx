import Pile from "@/components/UI/pile/Pile";
import { Stage } from "@/types/Task";
import React from "react";
import classes from "./TaskCardFooter.module.css";

type Props = {
  date?: string;
};

function TaskCardFooter({ date }: Props) {
  // Check if the date is valid and if it's in the future
  const isValidDate = date ? new Date(date).getTime() > Date.now() : false;
  const formattedDate: Date | null =
    isValidDate && date ? new Date(date) : null;

  return (
    <div className={classes.container}>
      <div>
        {date ? (
          <Pile theme={isValidDate ? "MUTE" : "DANGER"}>
            {formattedDate
              ? formattedDate.toUTCString().slice(5, 12).replace(",", "")
              : "Invalid Date"}
          </Pile>
        ) : (
          ""
        )}
      </div>

      <div className={classes.stages}>
        <Pile theme="MUTE">{Stage.BACKLOG}</Pile>
        <Pile theme="MUTE">{Stage.IN_PROGRESS}</Pile>
        <Pile theme="MUTE">{Stage.DONE}</Pile>
      </div>
    </div>
  );
}

export default TaskCardFooter;
