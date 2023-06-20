import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Button, { ButtonProps } from "./Button";
import { lightTheme } from "../../themes";

describe("test component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      label: "Button",
    };
  });

  it("should render correctly", () => {
    props.label = "Button";
    render(
      <ThemeProvider theme={ lightTheme }>
        <Button {...props} />
      </ThemeProvider>
    );
  });
});
