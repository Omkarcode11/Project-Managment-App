import React from "react";
import classes from "./TaskContainer.module.css";
import Image from "next/image";
import minimizeSVG from "@/public/minimize.svg";
import addSVG from "@/public/add.svg";
import { capitalize } from "@/utils/helper";
import { Task } from "@/types/Task";
import TaskCard from "../taskCard/TaskCard";
import { useRouter } from "next/navigation";

type Props = {
  title: "BACKLOG" | "TO DO" | "IN PROGRESS" | "DONE";
  tasks: Task[];
};

function TaskContainer({ title, tasks }: Props) {
   let router = useRouter()
  return (
    <div className={classes.container}>

      <div className={classes.headerContainer}>
        <h4 className={classes.header}>{capitalize(title)}</h4>
        <div>
          {title == "TO DO" && (
            <Image
              alt={title}
              className={classes.addTask}
              src={addSVG}
              width={20}
              height={20}
              onClick={()=>router.push('/board/addTask')}
            />
          )}
          <Image alt={title} src={minimizeSVG} width={20} height={20} />
        </div>
      </div>
      
      <div className={classes.tasksContainer}>
        
      {tasks.map((task)=><TaskCard task={task}/>)}
      </div>
    </div>
  );
}

export default TaskContainer;
