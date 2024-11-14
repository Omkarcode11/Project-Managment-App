import Input from "@/components/UI/input/Input";
import React from "react";
import personSVG from "@/public/person.svg";
import emailSVG from "@/public/email.svg";
import lockSVG from "@/public/password.svg";
import eyeSVG from "@/public/show.svg";
import classes from "./page.module.css";

type Props = {};

function SettingsPage({}: Props) {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Settings</h2>
      <form className={classes.formContainer}>
        <Input icon={personSVG} placeholder="Name" type="text" />
        <Input icon={emailSVG} placeholder="Email" type="email" />
        <Input
          icon={lockSVG}
          placeholder="Old Password"
          type="password"
          icon2={eyeSVG}
        />
        <Input
          icon={lockSVG}
          placeholder="New Password"
          type="password"
          icon2={eyeSVG}
        />
        <button className={classes.submit} type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default SettingsPage;
