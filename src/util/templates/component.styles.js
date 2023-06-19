module.exports = (componentName) => ({
  content: `import myStyled from '../../styled';
import { css } from 'styled-components';

const Styled${componentName} = myStyled.div\`
// your styles go here
\`;

export default Styled${componentName};
`,
  extension: `.styles.ts`
});
