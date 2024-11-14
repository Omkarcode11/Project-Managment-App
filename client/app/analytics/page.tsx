import React from "react";
import classes from './page.module.css'

function AnalyticsPage() {
  return (
    <div className={classes.container}> 
      <h2 className={classes.header}>Analytics</h2>
      <div className={classes.listContainer}>
        <ul className={classes.list}>
          <li>
            <p>Backlog Tasks</p> <p>16</p>
          </li>
          <li>
            <p>To-do Tasks </p> <p>14</p>
          </li>
          <li>
            <p>In-Progress Tasks </p> <p>03</p>
          </li>
          <li>
            <p>Completed Tasks</p> <p>22</p>
          </li>
        </ul>
        <ul className={classes.list}>
          <li>
            <p>Low Priority </p>
            <p>16</p>
          </li>
          <li>
            <p>Moderate Priority</p> <p>14</p>
          </li>
          <li>
            <p>High Priority </p>
            <p>03</p>
          </li>
          <li>
            <p>Due Date Tasks </p> <p>03</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AnalyticsPage;
