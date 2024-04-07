// jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFiles: ["<rootDir>/testSetup.js"],
  };
  