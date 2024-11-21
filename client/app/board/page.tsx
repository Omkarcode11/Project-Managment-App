"use client";
import TaskContainer from "@/components/task/taskContainer/TaskContainer";
import { useSearchParams } from "next/navigation";
import React from "react";
import classes from "./page.module.css";
import { tasks } from "@/utils/dummyData";
import { Stage } from "@/types/Task";

type Props = {};

function Board({}: Props) {
  let params = useSearchParams();
  let filter = params.get("filter")?.toLocaleUpperCase();
  return (
    <div className={classes.container}>
      <TaskContainer
        title="BACKLOG"
        tasks={tasks.filter((task) => task.status == Stage.BACKLOG)}
      />
      <TaskContainer
        title="TO DO"
        tasks={tasks.filter((task) => task.status == Stage.TO_DO)}
      />
      <TaskContainer
        title="IN PROGRESS"
        tasks={tasks.filter((task) => task.status == Stage.IN_PROGRESS)}
      />
      <TaskContainer
        title="DONE"
        tasks={tasks.filter((task) => task.status == Stage.DONE)}
      />
    </div>
  );
}

export default Board;
