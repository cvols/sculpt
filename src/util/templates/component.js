module.exports = (componentName) => ({
  content: `import React from "react";
import Styled${componentName} from "./${componentName}.styles";

export interface ${componentName}Props {
  /**
   * A description for the prop for storybook
   */
  foo: string;
}

/**
  * A description for the component for storybook
  */
const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <div data-testid="${componentName}" className="foo-bar">{foo}</div>
);

export default ${componentName};

`,
  extension: `.tsx`,
});
