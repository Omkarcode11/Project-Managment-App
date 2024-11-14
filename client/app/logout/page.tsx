"use client";
import Modal from "@/components/UI/modal/Modal";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "./page.module.css";

type Props = {};

function Logout({}: Props) {
  let router = useRouter();
  function onClose() {
    router.back();
  }

  function logout() {
    localStorage.clear();
    router.push("/login");
  }

  return (
    <Modal className={classes.container} onClose={onClose}>
        <p className={classes.title}>Are you Sure you want to logout?</p>
        <button className={classes.logout} onClick={logout}>
          Yes, Logout
        </button>
        <button className={classes.cancel} onClick={onClose}>
          Cancel
        </button>
      
    </Modal>
  );
}

export default Logout;
