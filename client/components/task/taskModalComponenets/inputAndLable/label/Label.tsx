import React, { HTMLAttributeReferrerPolicy } from "react";
import classes from "./Label.module.css";

type Props = {
  content: string;
};

function Label({ content }: Props) {
  return <label htmlFor={content}>{content}</label>;
}

export default Label;
