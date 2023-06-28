import React from "react";
import StyledButton from "./Button.styles";

export interface ButtonProps {
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
  /**
   * Type of the button
   */
  type?: "button" | "submit" | "reset";
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ type = "button", label, ...rest }) => (
  <StyledButton data-testid="Button" type={type} {...rest}>
    {label}
  </StyledButton>
);

export default Button;
