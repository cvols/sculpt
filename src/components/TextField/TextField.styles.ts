import { css } from "styled-components";

import ValtechStyles from "../../valtechStyles";
import { Theme } from "../../themes/types";

type TextFieldWrapperProps = {
  fullWidth?: boolean;
  textFieldWrapperStyles?: any;
};

type LabelProps = {
  theme: Theme;
  size?: "small" | "medium" | "large";
  labelStyles?: any;
};

type InputProps = {
  theme: Theme;
  size?: "small" | "medium" | "large";
  inputStyles?: any;
};

function getWidthStyles({ fullWidth }: TextFieldWrapperProps) {
  return fullWidth ? "100%" : "200px";
}

function getLabelStyles({ size, theme }: LabelProps) {
  switch (size) {
    case "small": {
      return css`
        font-size: ${theme.typography.size.s1}px;
      `;
    }
    case "large": {
      return css`
        font-size: ${theme.typography.size.l1}px;
      `;
    }
    default: {
      return css`
        font-size: ${theme.typography.size.m1}px;
      `;
    }
  }
}

function getInputStyles({ size, theme }: InputProps) {
  switch (size) {
    case "small": {
      return css`
        font-size: ${theme.typography.size.s1}px;
        padding: ${theme.spacing.padding.small}px;
        border: 1px solid ${theme.colors.text};
        border-radius: ${theme.spacing.borderRadius.small}px;
      `;
    }
    case "large": {
      return css`
        font-size: ${theme.typography.size.l1}px;
        padding: ${theme.spacing.padding.large}px;
        border: 1px solid ${theme.colors.text};
        border-radius: ${theme.spacing.borderRadius.large}px;
      `;
    }
    default: {
      return css`
        font-size: ${theme.typography.size.m1}px;
        padding: ${theme.spacing.padding.medium}px;
        border: 1px solid ${theme.colors.text};
        border-radius: ${theme.spacing.borderRadius.default}px;
      `;
    }
  }
}

export const TextFieldWrapper = ValtechStyles.div<TextFieldWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => getWidthStyles(props)};

  ${(props) => props?.textFieldWrapperStyles};
`;

export const Label = ValtechStyles.label<LabelProps>`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  ${(props) => getLabelStyles(props)};

  ${(props) => props?.labelStyles};
`;

export const Input = ValtechStyles.input<InputProps>`
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  ${(props) => getInputStyles(props)};

  ${(props) => props?.inputStyles};
`;
