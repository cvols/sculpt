import { css } from "styled-components";

import ValtechStyles from "../../valtechStyles";
import { Theme } from "../../themes/types";

export type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "caption" | "label";

type VariantStylesProps = {
  variant: TextVariant;
  theme: Theme;
};

const getVariantStyles = ({ variant, theme }: VariantStylesProps) => {
  switch (variant) {
    case "h1":
      return css`
        font-size: ${theme.typography.size.l3}px;
        line-height: ${theme.typography.lineHeight.large};
      `;
    case "h2":
      return css`
        font-size: ${theme.typography.size.l2}px;
        line-height: ${theme.typography.lineHeight.large - 0.1};
      `;
    case "h3":
      return css`
        font-size: ${theme.typography.size.l1}px;
        line-height: ${theme.typography.lineHeight.large - 0.1};
      `;
    case "h4":
      return css`
        font-size: ${theme.typography.size.m3}px;
        line-height: ${theme.typography.lineHeight.large = 0.2};
      `;
    case "h5":
      return css`
        font-size: ${theme.typography.size.m2}px;
        line-height: ${theme.typography.lineHeight.large - 0.2};
      `;
    case "h6":
      return css`
        font-size: ${theme.typography.size.m1}px;
        line-height: ${theme.typography.lineHeight.default};
      `;
    case "p":
      return css`
        font-size: ${theme.typography.size.s3}px;
        line-height: ${theme.typography.lineHeight.default};
      `;
    case "span":
      return css`
        font-size: ${theme.typography.size.s2}px;
        line-height: ${theme.typography.lineHeight.default};
      `;
    case "label":
      return css`
        font-size: ${theme.typography.size.s1}px;
        line-height: ${theme.typography.lineHeight.default};
      `;
    case "caption":
      return css`
        font-size: ${theme.typography.size.s1 - 2}px;
        line-height: ${theme.typography.lineHeight.small};
        width: max-content;
      `;
    default:
      return "";
  }
};

const StyledTypography = ValtechStyles.div<{ variant: TextVariant }>`
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.typography.weight.regular};

  ${(props) => getVariantStyles(props as VariantStylesProps)};
`;

export default StyledTypography;
