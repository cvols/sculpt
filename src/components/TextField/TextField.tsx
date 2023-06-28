import React, { FC, useState, ChangeEvent } from "react";
import { Input, Label, TextFieldWrapper } from "./TextField.styles";

export interface TextFieldProps {
  /**
   * The label for the text field
   */
  label?: string;
  /**
   * The placeholder for the text field
   */
  placeholder?: string;
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * The value of the text field
   */
  value?: string;
  /**
   * The function to call when the value of the text field changes
   */
  onChange?: (input: string) => void;
  /**
   * Whether the text field should take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * The type of the text field
   */
  type?: "text" | "password" | "email" | "number";
  /**
   * How large should the text field be?
   */
  size?: "small" | "medium" | "large";
  /**
   * TextField wrapper custom styles
   */
  textFieldWrapperStyles?: object;
  /**
   * Label custom styles
   */
  labelStyles?: object;
  /**
   * Input custom styles
   */
  inputStyles?: object;
}

/**
 * Textfield component that supports text, password, email and number types
 */
const TextField: FC<TextFieldProps> = ({
  label,
  placeholder,
  required = false,
  value,
  onChange,
  fullWidth = false,
  type = "text",
  size = "medium",
  textFieldWrapperStyles,
  labelStyles,
  inputStyles,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <TextFieldWrapper data-testid="TextField" fullWidth={fullWidth} textFieldWrapperStyles={textFieldWrapperStyles}>
      {label && (
        <Label size={size} labelStyles={labelStyles}>
          {label}
          {required && "*"}
        </Label>
      )}
      <Input
        type={type}
        value={value ?? inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        size={size}
        inputStyles={inputStyles}
      />
    </TextFieldWrapper>
  );
};

export default TextField;
