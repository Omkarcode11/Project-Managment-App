import Image from "next/image";
import React, { ChangeEvent } from "react";
import deleteSVG from "@/public/delete.svg";
import classes from "./CheckBoxInput.module.css";
import InputModal from "../inputAndLable/input/InputModal";
import { useAppDispatch } from "@/redux/hooks";
import {
  deleteCheckList,
  updateStatus,
  updateTask,
} from "@/redux/reducers/taskSlice";

type Props = {
  id: string;
  status: boolean;
  task: string;
};

function CheckBoxInput({ id, status, task }: Props) {
  let dispatch = useAppDispatch();

  function changeStatus(e: ChangeEvent<HTMLInputElement>) {
    let status = e.target.checked;
    dispatch(updateStatus({ id, status }));
  }

  function changeTask(e: ChangeEvent<HTMLInputElement>) {
    let task = e.target.value;
    dispatch(updateTask({ id, task }));
  }

  function deleteTask() {
    dispatch(deleteCheckList(id));
  }

  return (
    <li className={classes.container}>
      <InputModal
        type="checkbox"
        className={classes.checkbox}
        name="taskStatus"
        checked={status}
        onChange={changeStatus}
      />
      <InputModal
        type="text"
        value={task}
        className={classes.textInput}
      placeholder="Add a Task"
        name="task"
        onChange={changeTask}
      />
      <Image
        src={deleteSVG}
        width={20}
        height={20}
        alt="delete Icon"
        className={classes.delete}
        onClick={deleteTask}
      />
    </li>
  );
}

export default CheckBoxInput;
