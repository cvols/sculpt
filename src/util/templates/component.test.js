module.exports = (componentName) => ({
  content: `import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import ${componentName}, { ${componentName}Props } from "./${componentName}";
import { lightTheme } from "../../themes";

describe("test component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      label: "${componentName}",
    };
  });

  it("should render correctly", () => {
    props.label = "${componentName}";
    render(
      <ThemeProvider theme={ lightTheme }>
        <${componentName} {...props} />
      </ThemeProvider>
    );
  });
});
`,
  extension: `.test.tsx`,
});
