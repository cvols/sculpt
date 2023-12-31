export interface Theme {
  colors: {
    background: string;
    backgroundInverse: string;
    positive: string;
    negative: string;
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
  },
  spacing: {
    padding: {
      small: number;
      medium: number;
      large: number;
    },
    borderRadius: {
      small: number;
      default: number;
      large: number;
    },
    customSpacing: (px: number) => number;
  },
  typography: {
    type: {
      primary: string;
      code: string;
    },
    weight: {
      regular: string;
      bold: string;
      extrabold: string;
      black: string;
    },
    size: {
      s1: number;
      s2: number;
      s3: number;
      m1: number;
      m2: number;
      m3: number;
      l1: number;
      l2: number;
      l3: number;
    },
    lineHeight: {
      default: number;
      small: number;
      large: number;
    },
  },
};
