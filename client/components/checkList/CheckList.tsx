import React from "react";
import classes from "./CheckList.module.css";
import { ChecklistItem } from "@/types/Task";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  checkList: ChecklistItem[];
};

function CheckList({}: Props) {
  let checkList = useAppSelector((state) => state.task.checkList);
  let totalTasks = checkList.length;
  let completed = checkList.filter((ele) => ele.status == true).length;
  console.log(checkList);

  return (
    <div className={classes.container}>
      <details>
        <summary>Check List {`(${completed}/${checkList.length})`}</summary>
        <div className={classes.taskList}>
          {checkList.map((task: ChecklistItem) => (
            <CheckBox
              status={task.status}
              id={task.id}
              key={task.id}
              task={task.task}
            />
          ))}
        </div>
      </details>
    </div>
  );
}

function CheckBox({ id, task, status }: ChecklistItem) {
  return (
    <div className={classes.checkBoxContainer}>
      <input type="checkbox" checked={status} />
      <label className={classes.task}>{task}</label>
    </div>
  );
}

export default CheckList;
