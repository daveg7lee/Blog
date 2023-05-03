---
title: "Explore Bun"
description: "Learn about Bun"
date: "2023-04-23"
banner:
  src: "../../images/bun.png"
  alt: "bun"
categories:
  - "Explore"
keywords:
  - "Bun"
  - "NodeJS"
---

# What is Bun?

Bun is a JavaScript runtime like Node.js.

```
A JavaScript runtime is an environment that can execute JavaScript code.
```

Since Node.js is already widely used, what was the reason for developing Bun?

# Significantly faster speed than Node.js.

The reason for this can be found on the official Bun website.

<img src="https://velog.velcdn.com/images/kihyun/post/ce6cdd92-ab95-401a-a828-3390a9f26b26/image.png" width="100%">

Bun is introduced as a fast all-in-one JavaScript runtime. How fast is it exactly to be called a fast JavaScript runtime?

<img src="https://velog.velcdn.com/images/kihyun/post/c23edbfa-57eb-4e44-b6b9-db873e9331a7/image.png" width="100%">
<img src="https://velog.velcdn.com/images/kihyun/post/f2b1560d-62a6-42f3-a9a1-0d4ccef68db7/image.png" width="100%">
<img src="https://velog.velcdn.com/images/kihyun/post/20924859-825a-42a2-b3f3-1a65f3fd874a/image.png" width="100%">

The image above shows benchmark results posted on the official website of Bun. Although it is provided by Bun itself, it is still fast enough, even considering that aspect.

# All-in-one (Batteries included)

The official website of Bun introduces Bun as an all-in-one, not just a fast JavaScript runtime. Therefore, Bun includes various functions that Node does not have by default. (Bun calls this "Batteries included".)

1. Web APIs such as fetch, WebSocket, and ReadableStream are included.
2. Bun implements Node's node_modules resolution algorithm, making npm packages available in Bun. Both ESM and CommonJS are supported, and internally ESM is used.
3. TypeScript and JSX work immediately as all files are converted.
4. Supports "paths" and "jsxImportSource" in the tsconfig.json file.
5. Bun's JSX and TypeScript transpiler, Bun.Transpiler, is exposed as an API.
6. Uses the fastest system calls possible with Bun.write to write, copy, pipe, send, and duplicate files.
7. Automatically loads environment variables from the .env file without requiring require("dotenv").config().
8. Includes bun:sqlite with a fast SQLite3 client built-in.
9. Implements most of the Node-API to make most Node.js native modules work.
10. Provides a low-overhead external function interface, bun:ffi, to call native code from JavaScript.
11. Supports an increasing list of Node.js core modules, including Node.js core modules such as node:fs and node:path, as well as globals such as Buffer and process.

# Three main design goals of Bun

Bun was created with the following three main design goals:

1. Fast startup: With edge computing making cold start time an even more critical factor, fast startup speed was considered essential.
2. Fast running performance: Bun ensures fast running speed by using JavaScriptCore, a performance-oriented JS engine used in Safari.
3. Cohesive DX (Developer Experience): Providing a good developer experience with a bundler, transpiler, and package manager included by default.

> 🚨Difference between startup speed and running speed: Startup speed refers to the time it takes for an application to start up, while running speed refers to the speed at which the application actually runs.

Also, since Bun is designed as a drop-in replacement for nodes, you can run Node apps on Bun without any changes.

# Why Bun is fast

As mentioned above, Bun uses the JavaScriptCore engine, which starts up and executes code faster than traditional methods like V8. Additionally, Bun is written in Zig, a low-level programming language, which makes it even faster.

# Using Bun in practice

<span style="color:red">🚨 Bun is still an alpha project and hasn't even reached version 1.0, so it is not recommended to start projects with it.</span>

**‼️ Bun currently only supports macOS, Linux, and WSL.**

To install Bun, simply run the installation script below.

```
curl -fsSL https://bun.sh/install | bash
```

It's not very exciting to run examples like Hello World from the official documentation, so let's create a React project, which is more familiar to us.

To create a React project with Bun, run the command below.

```
bun create react [app name]
```

Once you have created the project, navigate to the project folder and run the command below to run the React project created with Bun.

```
bun dev
```

If you want to perform a production build, use the command below.

```
bun react-scripts build
```

**🚨 If the above command doesn't work, please run the command `bun install react-scripts`**

# Bun CLI

```
bun run
```

Executes JavaScript and TypeScript files with Bun's JavaScript runtime. You can also run the package.json "scripts". Bun runs package.json scripts 30 times faster than npm run.

```
bun install
```

Bun install is a package manager compatible with npm. Bun uses the fastest system calls available for file copying.

😎 provide 20 times faster speed than yarn.

```
bunx <command>
```

Automatically installs and runs executables from local or remote npm packages. (similar to npx)

😎 operate 100 times faster than npx.

```
bun test
```

A test runner similar to Jest for JavaScript and TypeScript projects built into Bun.

😎 It is very fast but still unstable.

# In conclusion

Bun uses the JavaScriptCore engine and is optimized with the low-level language Zig, making it significantly faster than Node. However, it still cannot support 100% of Node's API and has not yet reached a stable version, making it unsuitable for use in real projects (including side projects).
