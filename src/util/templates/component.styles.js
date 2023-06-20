module.exports = (componentName) => ({
  content: `import { css } from 'styled-components';

import myStyled from '../../styled';
import { Theme } from '../../theme/types';

const Styled${componentName} = myStyled.div\`
// your styles go here
\`;

export default Styled${componentName};
`,
  extension: `.styles.ts`
});
