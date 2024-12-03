module.exports = {
    preset: 'jest-expo',
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest'
    },
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|@react-native|expo(nent)?|@expo(nent)?/.*|@expo(nent)?/.*|@expo-google-fonts|unimodules|react-native-reanimated|react-navigation|@react-navigation/.*))'
    ],
    setupFilesAfterEnv: [
      '@testing-library/jest-native/extend-expect'
    ]
  };
  