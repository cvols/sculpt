import { css } from "styled-components";

import ValtechStyles from "../../valtechStyles";
import { Theme } from "../../themes/types";

type VariantProps = {
  primary?: boolean;
  theme: Theme;
};

type SizeProps = {
  size?: "small" | "medium" | "large";
  theme: Theme;
};

type BackgroundColorProps = {
  backgroundColor?: string;
};

function getVariantStyles({ primary, theme }: VariantProps) {
  return primary
    ? css`
        color: white;
        background-color: ${theme.colors.primary};
      `
    : css`
        color: ${theme.colors.text};
        background-color: transparent;
        box-shadow: ${theme.colors.text} 0px 0px 0px 1px inset;
      `;
}

function getSizeStyles({ size, theme }: SizeProps) {
  switch (size) {
    case "small": {
      return css`
        font-size: ${theme.typography.size.s1}px;
        padding: 10px 16px;
      `;
    }
    case "large": {
      return css`
        font-size: ${theme.typography.size.s3}px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: ${theme.typography.size.s2}px;
        padding: 11px 20px;
      `;
    }
  }
}

function getBackgroundColorStyles({ backgroundColor }: BackgroundColorProps) {
  return (
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `
  );
}

const StyledButton = ValtechStyles.button`
  font-family: ${({ theme }) => theme.typography.type.primary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getVariantStyles(props as VariantProps)}
  ${(props) => getSizeStyles(props as SizeProps)}
  ${(props) => getBackgroundColorStyles(props as BackgroundColorProps)}
`;

export default StyledButton;
