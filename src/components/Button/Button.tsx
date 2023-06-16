import React from "react";
import './Button.css';

interface ButtonProps {
  label: string;
}

export default (props: ButtonProps) => {
  return <button>{props.label}</button>;
};
