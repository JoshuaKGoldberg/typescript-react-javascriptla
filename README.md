# Intro to TypeScript & React

Hi!
This is the companion code repository for the JavaScriptLA Intro to TypeScript & React talk.

[See the slides here!](https://1drv.ms/p/s!AvUc1cvPrJnWvtFxzk3bplj1lQcWsg?e=lhHUJQ)

## Setup

Run these somewhere on your computer to download this repository and install its requirements:

```shell
git clone https://github.com/JoshuaKGoldberg/typescript-react-javascriptla
cd typescript-react-javascriptla
npm i
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
tsc -w snippets/1
```

Alternately, if you'd prefer not to install TypeScript globally, you can use it as an already-installed dependency of this repository with the `npm run compile` command:

```shell
npm run compile -- snippets/1 -w
# Alternately: yarn compile snippets/1 -w
```

## Running the React Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```shell
npm run start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Type Checking the React Demo

Running `tsc` or `npm run compile` on its own will check the `src/` folder.

```shell
tsc -w
```

```shell
npm run compile -- -w
# Alternately: yarn compile -w
```

Use `compile:strict` instead to enable some stricter TypeScript compiler options... if you dare!
