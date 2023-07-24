import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Typography, { TypographyProps } from "./Typography";
import { lightTheme } from "../../themes";

describe("test component", () => {
  let props: TypographyProps;

  beforeEach(() => {
    props = {
      variant: "h1",
      children: "Hello World",
    };
  });

  it("should render h1 correctly", () => {
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render h2 correctly", () => {
    props.variant = "h2";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render h3 correctly", () => {
    props.variant = "h3";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render h4 correctly", () => {
    props.variant = "h4";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render h5 correctly", () => {
    props.variant = "h5";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render h6 correctly", () => {
    props.variant = "h6";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render p correctly", () => {
    props.variant = "p";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render span correctly", () => {
    props.variant = "span";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render label correctly", () => {
    props.variant = "label";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
  it("should render caption correctly", () => {
    props.variant = "caption";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Typography {...props} />
      </ThemeProvider>
    );
  });
});
