import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import TextField, { TextFieldProps } from "./TextField";
import { lightTheme } from "../../themes";

describe("test component", () => {
  let props: TextFieldProps;

  beforeEach(() => {
    props = {
      label: "TextField",
    };
  });

  it("should render correctly", () => {
    props.label = "TextField";
    render(
      <ThemeProvider theme={ lightTheme }>
        <TextField {...props} />
      </ThemeProvider>
    );
  });
});
