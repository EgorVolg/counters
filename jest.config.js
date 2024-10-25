const config = {
  transform: {
    "^.+\\.[t|j]sx?$": [ "ts-jest", {
        isolatedModal: true,
      }],
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  testEnvironment: "jsdom",
};

export default config;
