import React from "react";
import "./Button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
  * Primary UI component for user interaction
*/
const Button = ({
  primary = false,
  size = "medium",
  label,
  backgroundColor,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};

export default Button;
