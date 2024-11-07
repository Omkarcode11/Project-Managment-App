import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import classes from "./InputModal.module.css";

type Props = {
  type: HTMLInputTypeAttribute;
} & InputHTMLAttributes<HTMLInputElement>;

function InputModal({ type, value, ...rest }: Props) {
  return <input type={type} {...rest} required={type != "checkBox"} />;
}

export default InputModal;
