'use client'
import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js
import classes from "./Input.module.css";
import hidden from '@/public/hidden.svg'

type Props = {
  icon: string; // URL for the first icon
  placeholder: string;
  type: string;
  icon2?: string; // URL for the second icon (optional)
  ariaLabel?: string; // ARIA label for accessibility
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for changes
  value?: string; // Current value of the input
  name?: string; // Name for the input
  className?: string; // Optional additional classname
  hasError?: boolean; // To indicate input has error
  errorMessage?: string; // Optional error message
};

const Input: React.FC<Props> = ({
  icon,
  placeholder,
  type,
  icon2,
  ariaLabel,
  onChange,
  value,
  name,
  className,
  hasError,
  errorMessage,
}) => {
  let [show, setShow] = useState(false);
  return (
    <div className={`${classes.container} ${className || ""}`}>
      {/* Display first icon */}
      {icon && (
        <Image src={icon} alt={`${placeholder} icon`} className={classes.svg} />
      )}

      <input
        type={!show?type:'text'}
        placeholder={placeholder}
        name={name || placeholder}
        aria-label={ariaLabel || placeholder}
        onChange={onChange}
        value={value}
        required
        className={`${hasError ? classes.errorInput : ""} ${classes.input}`}
      />

      {/* Display second icon if available */}
      {icon2 && (
        <Image
          onClick={() => setShow(!show)}
          src={!show?icon2:hidden}
          alt={`${placeholder} icon2`}
          className={classes.svg}
        />
      )}

      {/* Display error message if input has errors */}
      {hasError && errorMessage && (
        <p className={classes.errorText}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
