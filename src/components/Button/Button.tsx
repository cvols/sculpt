import React from "react";
import StyledButton from './Button.styles';

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
}

/**
  * Primary UI component for user interaction
*/
const Button = ({ label, ...rest }: ButtonProps) => <StyledButton {...rest}>{label}</StyledButton>;

export default Button;
