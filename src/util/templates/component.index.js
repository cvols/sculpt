module.exports = (componentName) => ({
  id: `index`,
  content: `export { default } from './${componentName}';

`,
  extension: `.ts`
});
