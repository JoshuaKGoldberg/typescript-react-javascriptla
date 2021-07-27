# Intro to TypeScript & React

Hi!
This is the companion code repository for the JavaScriptLA Intro to TypeScript & React talk.

## Setup

Run these somewhere on your computer to download this repository and install its requirements:

```shell
git clone https://github.com/JoshuaKGoldberg/typescript-react-javascriptla
cd typescript-react-javascriptla
```

You can then open the folder in your editor.
For example, with VS Code:

```shell
code .
```

## Running TypeScript Snippets

It's generally easiest to install TypeScript globally:

```shell
npm i -g typescript
```

We recommend you then run TypeScript in "watch" mode on individual code examples by providing it the `-w` flag and a path to the example.
For example, to start TypeScript running on the first code example:

```shell
tsc -w src/1
```

Alternately, if you'd prefer not to install TypeScript globally, you can install it as a dependency of this repository and use the `npm run watch` command:

```shell
npm i
npm run watch -- src/1
```

## Running React Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```shell
npm run start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
