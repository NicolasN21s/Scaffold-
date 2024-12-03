# Scaffold
Application to monitor a set of stocks 

# StockMonitorApp

This is a project developed with React Native to monitor stock values. The project uses Expo for the development of the mobile application, and Jest for unit and integration testing.

## Description

The goal of this application is to allow users to monitor different stock values. The application uses **React Native** and **Expo** to create a seamless mobile experience. In addition, unit tests were implemented using **Jest** to ensure the quality of the code.

## Requirements

Before you start, make sure you have the following tools installed:

- **Node.js** (preferably the latest stable version)
- **npm** or **yarn** (depending on which one you use)
- **Expo CLI**: If you don't have Expo CLI installed, you can do so by running the following command:
  
  ````bash
  npm install -g expo-cli

##Installation
Clone the repository:

git clone https://github.com/tu-usuario/StockMonitorApp.git

Enter the project directory:
cd StockMonitorApp

Install the project dependencies:
npm install

This will install the necessary libraries, including the dependencies for React Native, Jest and Expo.

##Useful commands
Run the application on an Android device:
npm run android

Run the application on an iOS device:
npm run ios

Run the application in the web browser:
npm run web

Project Structure:
App.js: Main file where the application is structured, it includes the logic to display the actions and their values.
__tests__/HomeScreen.test.js: Test file containing the unit tests of the main components.
babel.config.js: Babel configuration for code transpilation, including support for ES6, JSX and TypeScript.

Jest configuration
The project uses Jest for unit and integration testing. To configure Jest correctly in an Expo environment, the following dependencies and configurations were used:

Jest dependencies:

jest: The test framework used.
babel-jest: Allows Babel to be used to transpile the code before running the tests.
jest-expo: Configures Jest to work with Expo.
testing-library/react-native: Library for testing components in React Native.

Explanation of the Babel configuration:
babel-preset-expo: Ensures compatibility with Expo, which is the development environment used in this project.
babel/preset-env: Transpiles ES6+ code to a version more compatible with older browsers and devices.
@babel/preset-react: Transpiles JSX, which is the markup language used in React and React Native.
@babel/preset-typescript: Allows transpiling of .ts and .tsx files if the project uses TypeScript.
Plugins: Two plugins have been added:
@babel/plugin-proposal-class-properties: Allows the use of class properties, a modern JavaScript feature.
@babel/plugin-transform-runtime: Optimises the use of Babel helpers to avoid code duplication and improve performance.


Troubleshooting common problems
Configuration problems with Git:

If you encounter the ‘dubious ownership’ error, you can fix it with the following command:

git config --global --add safe.directory <project-path>.
This tells Git to trust the project directory, allowing you to add and commit.

CRLF/LF configuration issues:

To make sure Git handles line endings correctly, you can run:

git config --global core.autocrlf true
This will automatically convert line ends to CRLF on Windows systems and avoid problems when collaborating with other users on different operating systems.

Push errors due to history conflict:

If your remote repository's history is different from your local repository's, you can use:

git pull origin main --allow-unrelated-histories
This allows you to merge the histories from both repositories and resolve the conflict before pushing.


