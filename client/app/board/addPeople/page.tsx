"use client";
import InputModal from "@/components/task/taskModalComponenets/inputAndLable/input/InputModal";
import Modal from "@/components/UI/modal/Modal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import classes from "./page.module.css";
import Input from "@/components/UI/input/Input";

type Props = {};

const page = (props: Props) => {
  let [success, setSuccess] = useState(false);
  let router = useRouter();
  function onClick() {
    router.back();
  }

  function addPeople() {
    setSuccess(true);
  }
  return (
    <Modal onClose={onClick} className={classes.container}>
      {!success ? (
        <>
          <p className={classes.header}> Add people to board</p>
          <Input icon="" type="email" placeholder="Enter the email" />
          <div className={classes.btn}>
            <button className={classes.cancel} onClick={onClick}>
              cancel
            </button>
            <button className={classes.add} onClick={addPeople}>
              Add Email
            </button>
          </div>
        </>
      ) : (
        <>
          <p className={classes.header}>Successfully add the people</p>
          <div className={classes.btn}>
            <button className={classes.add} onClick={onClick}>
              Ok Got it!
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default page;
