module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  testMatch: ["**/src/components/*/*.test.@(js|jsx|ts|tsx)", "!**/node_modules/**"],
};
