import PriorityLabel from "@/components/UI/priorityLabel/PriorityLabel";
import { Priority } from "@/types/Task";
import React, { useState } from "react";
import classes from "./PriorityContainer.module.css";
import { priorityArray } from "@/utils/constants.";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPriority } from "@/redux/reducers/taskSlice";

type Props = {};

function PriorityContainer({}: Props) {
  // const [selectedPriority, setSelectedPriority] = useState<Priority | null>(
  //   null
  // );
  const selectedPriority = useAppSelector((task) => task.task.priority);
  const dispatch = useAppDispatch();

  function handlePriorityChange(priority: Priority) {
    dispatch(setPriority(priority));
  }

  return (
    <div className={classes.priorityContainer}>
      {priorityArray.map((priority: Priority) => (
        <PriorityLabel
          key={priority}
          size="0.5rem"
          priority={priority}
          isActive={selectedPriority === priority}
          onChange={handlePriorityChange}
        />
      ))}
    </div>
  );
}

export default PriorityContainer;
