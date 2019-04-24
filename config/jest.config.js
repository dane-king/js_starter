
module.exports = {
  clearMocks: true,
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
     "node_modules","src"
   ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],

  // The root directory that Jest should scan for tests and modules within
  rootDir: '../',


  // The test environment that will be used for testing
  testEnvironment: "node",


  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.ts$": "babel-jest",
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
