module.exports = (componentName) => ({
  content: `import { css } from "styled-components";

import ValtechStyles from "../../valtechStyles";
import { Theme } from "../../theme/types";

const Styled${componentName} = ValtechStyles.div\`
// your styles go here
\`;

export default Styled${componentName};
`,
  extension: `.styles.ts`,
});
