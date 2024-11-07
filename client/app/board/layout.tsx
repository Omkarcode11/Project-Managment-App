
import React, { ChangeEvent, ReactNode } from "react";
import peopleSVG from "@/public/people.svg";
import Image from "next/image";
import Filter from "@/components/filter/Filter";
import classes from './layout.module.css'

type Props = {
  children: ReactNode;
};

function BoardLayout({ children }: Props) {
   let date = new Date()
  return (
    <div className={classes.container}>

      <div className={classes.headerContainer}>
      <h3 className={classes.header}>Welcome ! Omkar</h3>
      <h5 className={classes.date}>{date.toDateString().slice(4)}</h5>
      </div>

      <div className={classes.subHeaderContainer}>
        <div>
          <span className={classes.subHeader}>Board</span>
          <span className={classes.addPeople}>
            <Image alt="Add People" src={peopleSVG} width={20} height={20} />{" "}
            Add People
          </span>
        </div>

        <div>
          <Filter/>
        </div>
      </div>
      {children}
    </div>
  );
}

export default BoardLayout;
