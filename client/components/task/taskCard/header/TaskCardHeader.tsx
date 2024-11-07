import React from "react";
import classes from "./TaskCardHeader.module.css";
import { Priority } from "@/types/Task";
import Image from "next/image";
import treeDotsSVG from "@/public/threeDots.svg";
import { getInitials } from "@/utils/helper";
import PriorityLabel from "@/components/UI/priorityLabel/PriorityLabel";
import { color, randomColors } from "@/utils/constants.";

type Props = {
  priority: Priority;
  name: string;
};

function TaskCardHeader({ priority, name }: Props) {
  let index = Math.floor(Math.random() * (randomColors.length - 1));
  return (
    <div className={classes.container}>
      <div className={classes.priorityContainer}>
        <PriorityLabel isActive={false} size="0.5rem" priority={priority} onChange={()=>{}} />
        {name && (
          <p
            style={{ backgroundColor: randomColors[index] }}
            className={classes.initials}
          >
            {getInitials(name)}
          </p>
        )}
      </div>

      <div>
        <Image src={treeDotsSVG} width={20} height={20} alt="Options" />
      </div>
    </div>
  );
}

export default TaskCardHeader;
