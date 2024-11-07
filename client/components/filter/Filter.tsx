"use client"
import React, { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import classes from './Filter.module.css'

type Props = {};

function Filter({}: Props) {
  let router = useRouter();

  function changeFilter(e: ChangeEvent<HTMLSelectElement>) {
    router.push(`?filter=${e.target.value}`);
  }

  return (
    <select onChange={changeFilter} className={classes.filter}>
      <option value={"month"}>This Month</option>
      <option value={"week"}>This Week</option>
      <option value={"today"}>Today</option>
    </select>
  );
}

export default Filter;
