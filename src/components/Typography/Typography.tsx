import React, { ReactNode } from "react";
import StyledTypography, { TextVariant } from "./Typography.styles";

export interface TypographyProps {
  /**
   * The variant of the text
   */
  variant?: TextVariant;
  /**
   * The content of the text
   */
  children: ReactNode;
}

/**
 * Typography component
 */
const Typography: React.FC<TypographyProps> = ({ variant = "p", children }) => {
  return (
    <StyledTypography data-testid="Typography" as={variant} variant={variant} >
      {children}
    </StyledTypography>
  );
};

export default Typography;
