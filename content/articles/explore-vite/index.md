---
title: "Explore Vite"
description: "Learn about Vite"
date: "2022-07-23"
banner:
  src: "../../images/vite.png"
  alt: "vite"
categories:
  - "Explore"
keywords:
  - "Vite"
  - "Webpack"
---

# Vite?

> Vite (which means "quick" in French) is a build tool that focuses on providing a fast and concise modern web development experience. It centers around two concepts. - Official [Vite](https://vitejs.dev/) documentation

As its name suggests, Vite provides an extremely fast build speed. If you are used to building projects with Create React App (CRA), you will be amazed by the development experience that Vite provides. (It's not a lie; builds take less than 0.1 seconds.)

One of Vite's advantages is its use of HMR (Hot Module Replacement), which allows you to update certain parts of an application without having to restart it. To put it simply, when you hit the save button, instead of rebuilding all the files, Vite only rebuilds the modified parts and shows them to you.

## Installation & Setup

⛔️ You must use a browser that supports Native ESM dynamic import during development.

✅ If you find the installation and setup process tedious, you can try Vite online [here](https://stackblitz.com/edit/vitejs-vite-iwvrw9?file=index.html&terminal=dev).

To create a Vite project, you can use one of the following three commands:

NPM:

```
npm create vite@latest
```

Yarn:

```
yarn create vite
```

PNPM:

```
pnpm create vite
```

Of course, you can also create a project by specifying the name or template of the project. If you use the following command, you can create a Vue project that uses Vite:

```
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, be sure to add '--'
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue
```

You can check out more templates [here](https://github.com/vitejs/vite/tree/main/packages/create-vite_).

Personally, I like Svelte, so I will create a Svelte app that uses TypeScript with the following command:

```
yarn create vite vite-svelte --template svelte-ts
```

When you use the above command, the following screen will appear. Follow the instructions displayed in the window:

<img src="https://velog.velcdn.com/images/kihyun/post/352e67c5-bb89-4b59-91a6-26715531a781/image.png" width="100%">

First, `cd vite-svelte` and download the packages with `yarn`. Then, run `yarn dev` to start the project:

<img src="https://velog.velcdn.com/images/kihyun/post/ed35e29c-7246-4bda-8cb1-780eae92f86c/image.png" width="100%">

The app was launched almost instantly. Now, let's try accessing http://localhost:3000:

<img src="https://velog.velcdn.com/images/kihyun/post/5442fc72-36af-4ea9-8944-e44b07b834b9/image.png" width="100%">

A basic template has been released! It's time to be amazed!

# Amazement

If you've completed all the steps above, now it's time to be truly amazed. Open your project with your desired text editor to see the incredible build speed of Vite.

First, run the app with yarn dev, then make some changes to the src/App.svelte file and save it. When you reconnect to http://localhost:3000, you'll have an amazing experience! The page is already refreshed. Despite having pressed the save button just 0.1 seconds ago, Vite has already built the files and refreshed the app for us!

# Conclusion

Of course, there are many advantages to Vite beyond HMR and fast build speed. Having used CRA, which was slow and frustrating even when saving, using Vite + Svelte feels like entering a whole new world. If you're using webpack, I highly recommend giving Vite a try!
