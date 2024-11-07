import React from "react";
import Image from "next/image";
import NavLink from "../UI/navLink/NavLink";

import classes from "./Navigation.module.css";

import logo from "@/public/logo.svg";
import boardSVG from "@/public/board.svg";
import analyticsSVG from "@/public/analytics.svg";
import settingsSVG from "@/public/settings.svg";
import logoutSVG from '@/public/logout.svg'

type Props = {};

function Navigation({}: Props) {
  return (
    <div className={classes.container}>
      <div>
        <h4 className={classes.header}>
          <Image src={logo} alt="logo" height={30} width={30} />
          <p>Pro Manager</p>
        </h4>
        <nav className={classes.navList}>
          <NavLink path="/board" icon={boardSVG}>
            Board
          </NavLink>
          <NavLink path="/analytics" icon={analyticsSVG}>
            Analytics
          </NavLink>
          <NavLink path="/settings" icon={settingsSVG}>
            Settings
          </NavLink>
        </nav>
      </div>
      <h3 className={classes.logoutContainer}>
        <Image src={logoutSVG} alt="Logout img" />
        Logout
        </h3>
    </div>
  );
}

export default Navigation;


