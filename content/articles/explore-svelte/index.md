---
title: "Explore Svelte"
description: "Learn about Svelte"
date: "2022-02-10"
banner:
  src: "../../images/svelte.png"
  alt: "svelte"
categories:
  - "Explore"
keywords:
  - "Svelte"
  - "Frontend"
  - "React"
---

# What is Svelte?

Svelte is a tool for building interactive web applications, like React or Vue, but the way it builds them is completely different. Svelte is not a framework or library like React or Vue, but rather can be seen as a compiler.

## React and Vue's way

<img src="https://images.velog.io/images/kihyun/post/997d5e12-29eb-4cfc-9c8a-84162240ec4f/image.png" width="100%">

If you build and deploy a web service using React, users need to download two types of code when they enter the website: React code and the code written by the developer. This is the standardized way that has been used so far, just like if you use jQuery, users have to download jQuery. React and Vue are using the same method.

## Svelte's way

<img src="https://images.velog.io/images/kihyun/post/b7ec88d0-8592-4793-92f3-56908db38573/image.png" width="100%">

However, Svelte does not work like this. The initial slogan for Svelte was "The magical disappearing UI framework." This is because Svelte actually disappears. When you code with Svelte and build it, Svelte automatically analyzes and compiles the code. It is converted into a JavaScript file that the browser can understand, and when a user accesses the website, they only need to download the code created by the developer without the need to download any additional code to run Svelte. Thanks to this, the size of apps built with Svelte becomes significantly smaller.

In addition, because there is no other code to run Svelte, it boasts faster speed than React or Vue.

### Fast speed

Furthermore, because Svelte has no other code to run, it boasts faster speed than React or Vue. It shows the same speed as vanilla JS. In fact, the official Svelte website explains that Svelte is as fast as vanilla JS.

<img src="https://images.velog.io/images/kihyun/post/38a605fa-7086-4b93-8e35-85d8a59a1bda/Untitled.png" width="100%">

### No Virtual DOM

<img src="https://images.velog.io/images/kihyun/post/736186a3-9fe6-4a0f-b723-e555d35d2a3d/image.png" width="100%">

Svelte does not use Virtual DOM (VDOM), which represents the app's UI. React stores VDOM in memory and occasionally synchronizes it with the actual UI that the user is viewing, identifying elements that need to be refreshed, and showing the user the updated UI. When React was first released, VDOM was a cool and innovative approach, but now it is not really necessary.

This is because the Svelte compiler can create even more optimized JS files, which allows UI to be refreshed even faster, so VDOM is no longer necessary.

🚨 Actually, the presence of Virtual DOM is not that important. Inferno, a framework faster than Svelte, uses Virtual DOM.

### Development Experience

When I learned HTML, CSS, and JS and then started learning React, it was very difficult to get used to React's structure, as shown below.

```
const Component = () => {
const [count, setCount] = useState(0)
const handleClick = () => {
setCount((prev) => prev++)
}
return(

<div>
<button on:click={handleClick}>Click!</button>
<p>{count}</p>
</div>
)
}
```

However, if you use Svelte, you can have an unbelievable development experience. The following is code in Svelte, and surprisingly, there is not a single boilerplate that you must write, as you would have to do with React. You just need to write HTML, CSS, and JS as you normally would, and follow a few rules provided by Svelte.

```
<script>
  let count = 0
  const handleClick = () => {
   count++
  }
</script>

<button on:click={handleClick}>Click!</button>

<p>{count}</p>
```

🚨 Here, on:click is not a typo. Many React developers may think of onClick, but in Svelte, you need to write it as on:click.

If you want to apply styles, you can simply add them as you would in HTML:

```
<script>
  let count = 0
  const handleClick = () => {
   count++
  }
</script>

<button on:click={handleClick}>Click!</button>

<p>{count}</p>

<style>
  p {
  	color: red;
  }
</style>
```

If you've learned React or Vue, you might be impressed by this clean and beautiful code. Plus, if you've learned React or Vue, you can learn Svelte easily and quickly because you can write HTML, CSS, and JS as you normally would (though Vue might be more familiar).

There is a noticeable difference between Svelte and React code. Svelte uses let instead of Hooks or State, so anyone who has learned HTML, CSS, and JS can easily read the code without needing to learn these features.

In addition, Svelte provides many convenience features for developers. To see one of them, let's modify the above counter example so that you can only click it once. To achieve this in React, you would need to create another state, but in Svelte, you can just add the word once as shown below.

```
<script>
  let count = 0
  const handleClick = () => {
   count++
  }
</script>

<button on:click|once={handleClick}>Click!</button>

<p>{count}</p>

<style>
  p {
  	color: red;
  }
</style>
```

In this way, by simply adding once, Svelte will execute the event only once and never again. Svelte provides countless features for the convenience of developers.

# Conclusion

Svelte is a really cool UI {framework ? framework : compiler}, so I highly recommend it to those who have already learned React and want to try something new and different. However, for those who have just finished learning HTML, CSS, and JS and need to learn a framework, I recommend React or Vue. In particular, React has a lot of sample code available, and there are many resources available to help you learn.
