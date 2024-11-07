"use client";
import React, { ReactNode, useEffect, useState } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  onClose: () => void;
  className?:string
};

function Modal({className, children }: Props) {
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted &&
    createPortal(
      <div className={classes.container} >
        <dialog className={`${classes.modalContainer} ${className}`} open={true}>
          {children}
        </dialog>
      </div>,
      document.getElementById("modal") as HTMLElement
    )
  );
}

export default Modal;
