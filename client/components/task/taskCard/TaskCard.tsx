import React from "react";
import classes from "./TaskCard.module.css";
import { Task } from "@/types/Task";
import TaskCardHeader from "./header/TaskCardHeader";
import Tooltip from "@/components/tooltip/ToolTip";
import TaskCardFooter from "./footer/TaskCardFooter";
import CheckList from "@/components/checkList/CheckList";

type Props = {
  task: Task;
};

function TaskCard({ task }: Props) {
  return (
    <div className={classes.container}>
      <TaskCardHeader priority={task.priority} name={task.assignee} />

      <div className={classes.title}>
        <Tooltip text={task.title}>{task.title.slice(0, 50)}...</Tooltip>
      </div>

      <div className={classes.checkList}>
        <CheckList checkList={task.checkList}/>
      </div>

      <div className={classes.footer}>
         <TaskCardFooter date={task.date} />
      </div>

    </div>
  );
}

export default TaskCard;
