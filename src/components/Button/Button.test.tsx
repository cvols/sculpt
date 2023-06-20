import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Button, { ButtonProps } from "./Button";
import { lightTheme } from "../../themes";

describe("Test Component", () => {
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

    // const button = screen.getByRole('label', { name: /Button/i });
    // expect(button).toBeVisible();
  });
});
