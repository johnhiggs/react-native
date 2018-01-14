# Learn TDD in React Native

A sample project demonstrating how to do Test-Driven Development in React Native with Detox.

## Usage

This repo shows the process of going from an empty React Native app to a single complete feature built via TDD: the ability enter a message and have it show in the list. To follow along with the TDD process, view the commit history for the repo. Each step either adds a failing test (red), or adds production code that gets past an error message or causes the test to pass (green). You can `checkout` any commit to see the state of the codebase at that time and run the tests yourself.

## Prerequisites

You will need the following things properly installed on your computer.

* [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html) - click on the **"Building Projects with Native Code"** tab. Note that React Native CLI is different from Create React Native App.
* Xcode - instructions for installing are included with React Native CLI. Detox does not yet work with Android.
* [Detox](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies). (You only need to follow step 1: Install dependencies.)

## Installation

* `git clone https://github.com/learn-tdd-in/react-native.git learn-tdd-in-react-native`
* `cd learn-tdd-in-react-native`
* `npm install`

## Running / Development

* To run the app, run `react-native run-ios`.
* To run the tests, run `detox build` then `detox test`. For subsequent runs you can pass the `-r` flag to `detox test` to save time by not reinstalling the app on each run.

## Contributing

We welcome contributions to this repo and any other part of Learn TDD! See the Learn TDD [Contributing page](http://learntdd.in/contribute) for info.

## License

MIT. For more info, see `LICENSE.txt`.
