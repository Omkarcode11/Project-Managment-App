"use client";
import Modal from "@/components/UI/modal/Modal";
import addSVG from "@/public/add2.svg";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Label from "@/components/task/taskModalComponenets/inputAndLable/label/Label";
import InputModal from "@/components/task/taskModalComponenets/inputAndLable/input/InputModal";
import classes from "./page.module.css";
import PriorityContainer from "@/components/task/taskModalComponenets/priorityContainer/PriorityContainer";
import CheckBoxInput from "@/components/task/taskModalComponenets/checkBoxInput/CheckBoxInput";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addCheckList,
  clearTask,
  setAssignee,
  setTitle,
} from "@/redux/reducers/taskSlice";
import { ChecklistItem, Task } from "@/types/Task";

type Props = {};

function AddTask({}: Props) {
  let router = useRouter();
  let task = useAppSelector((state) => state.task);
  let dispatch = useAppDispatch();
  let completedTaskCount = task.checkList.filter(
    (task) => task.status == true
  ).length;

  let dateRef = useRef<HTMLInputElement>(null);
  const [dateType, setDateType] = useState("text");

  function onClose() {
    router.back();
  }

  function changeType(str: "date" | "text") {
    setDateType(str);
    if (dateRef.current?.value.length) {
      setDateType("text");
    }
  }

  function changeTitle(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setTitle(e.target.value));
  }

  function changeAssignee(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setAssignee(e.target.value));
  }

  function addCheck() {
    dispatch(addCheckList());
  }

  useEffect(() => {
    dispatch(clearTask());
  }, []);

  return (
    <div>
      <Modal onClose={onClose} className={classes.container}>
        <div>
          <Label content={"Title"} />
          <InputModal
            className={classes.titleInput}
            placeholder="Enter task Title"
            type="text"
            onChange={changeTitle}
          />
        </div>

        <div className={classes.priorityContainer}>
          <Label content={"Set Priority"} />
          <PriorityContainer />
        </div>

        <div className={classes.assignee}>
          <div>Assignee To</div>
          <InputModal
            className={classes.titleInput}
            placeholder="add a assignee"
            type="text"
            onChange={changeAssignee}
          />
        </div>

        <div>
          <div>CheckList ({completedTaskCount}/{task.checkList.length})</div>
          <ul className={classes.checkListItems}>
            {task.checkList.map((task: ChecklistItem) => (
              <CheckBoxInput
                id={task.id}
                status={task.status}
                task={task.task}
              />
            ))}
          </ul>
        </div>

        <div className={classes.addCheck} onClick={addCheck}>
          <Image
            src={addSVG}
            width={15}
            height={15}
            
            color="#767575"
            alt="add Icon"
          />
          <span>Add New </span>
        </div>

        <div className={classes.footer}>
          <div className={classes.date}>
            <input
              type={dateType}
              ref={dateRef}
              placeholder="Due Date"
              onFocus={() => changeType("date")}
              onBlur={() => changeType("text")}
            />
          </div>

          <div className={classes.actionButtons}>
            <button type="button" className={classes.cancel} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={classes.save}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddTask;
