import React from "react";

interface ButtonProps {
  label: string;
}

export default (props: ButtonProps) => {
  return <button>{props.label}</button>;
};
