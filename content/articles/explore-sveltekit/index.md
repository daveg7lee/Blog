---
title: "Explore SvelteKit"
description: "Learn about SvelteKit"
date: "2022-02-19"
banner:
  src: "../../images/sveltekit.png"
  alt: "sveltekit"
categories:
  - "Explore"
keywords:
  - "Svelte"
  - "SvelteKit"
---

🚨 Please note that most of the example code in this article is taken from the SvelteKit official documentation.

# What is SvelteKit?

Just like NextJS for React and Nuxt for Vue, Svelte has SvelteKit. SvelteKit offers various features such as SSR, SSG, and more. The most attractive feature of SvelteKit is that it uses Svelte. With Svelte and Vite, you can enjoy an incredibly satisfying developer experience that's hard to put into words.

💡 I plan to write about Vite later.

The features supported by SvelteKit are:

1. [Build Optimizations](https://vitejs.dev/guide/features.html#build-optimizations)
2. [Offline support](https://kit.svelte.dev/docs/service-workers)
3. [Prefetch](https://kit.svelte.dev/docs/a-options#sveltekit-prefetch)
4. [Configurable Rendering](https://kit.svelte.dev/docs/page-options)
5. [SSR](https://kit.svelte.dev/docs/appendix#ssr)
6. [CSR](https://kit.svelte.dev/docs/page-options#router)
7. [SSG](https://kit.svelte.dev/docs/page-options#prerender)

Furthermore, SvelteKit includes Vite by default, which means it also supports HMR by default.

Once you use it, you will understand that HMR provides an incredible developer experience. (The page is refreshed as soon as you press the save button!)

# Installation & Setup

Setting up SvelteKit is very simple.

```
npm init svelte@next my-app
cd my-app
yarn
yarn run dev
```

# Routing

If you've learned NextJS, you can consider SvelteKit's Routing as already learned. SvelteKit uses a `filesystem-based router`, which automatically routes files in the src/routes folder based on their file names. For example, if you put a file named `home.svelte` in the `src/routes` folder, SvelteKit will render `home.svelte` automatically when you go to the `/home` address.

## Dynamic Routing

If you want to use dynamic routing, you can write the file name as follows, just like in NextJS:

`[id].svelte`

If you create a file with the above name in the products folder, SvelteKit will route all URLs that end with a number (such as products/1, products/2, etc.) to [id].svelte.

## Endpoints

In my opinion, this is the coolest feature of both NextJS and SvelteKit. Endpoints are written in .ts or .js files, unlike other files. The code written here only runs on the server, not in the browser. This means that if you use endpoints, you can access the DB directly without a backend.

Furthermore, if the file name of the page and the endpoint are the same, the page's props are automatically obtained from the endpoint. Because all of this happens automatically, the developer doesn't need to configure anything.

Example code:

```js
import db from "$lib/database";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
  // `params.id` comes from [id].js
  const item = await db.get(params.id);

  if (item) {
    return {
      body: { item },
    };
  }

  return {
    status: 404,
  };
}
```

The item in the Svelte code below is automatically obtained from the above code:

```html
<script>
  // populated with data from the endpoint
  export let item;
</script>

<h1>{item.title}</h1>
```

### POST, PUT, PATCH, DELETE

SvelteKit also provides functions like get, post, put, patch, del, so you don't have to use if statements to distinguish between methods using req.method, like in NextJS.

```ts
import * as db from "$lib/database";

export async function get() {
  const items = await db.list();

  return {
    body: { items },
  };
}

export async function post({ request }) {
  const [errors, item] = await db.create(request);

  if (errors) {
    // return validation errors
    return {
      status: 400,
      body: { errors },
    };
  }

  // redirect to the newly created item
  return {
    status: 303,
    headers: {
      location: `/items/${item.id}`,
    },
  };
}
```

```html
<!-- src/routes/items.svelte -->
<script>
  // The page always has access to props from `get`...
  export let items;

  // ...plus props from `post` when the page is rendered
  // in response to a POST request, for example after
  // submitting the form below
  export let errors;
</script>

{#each items as item}
<Preview item="{item}" />
{/each}

<form method="post">
  <input name="title" />

  {#if errors?.title}
  <p class="error">{errors.title}</p>
  {/if}

  <button type="submit">Create item</button>
</form>
```

As shown in the following example, SvelteKit automatically executes the get function for incoming requests using GET and the post function for incoming requests using POST. By using this approach, the code becomes remarkably simple and clean. For comparison, I brought in some code that doesn't use the get and post functions.

```ts
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // put some code you want!
  }

  res.statusCode = 405;
  return res.end();
};
```

The above code is an endpoint in NextJS. (I'm not sure if NextJS calls it an endpoint.) It requires the cumbersome task of manually classifying whether incoming requests are GET or POST, depending on the request. I think that such small codes can reduce readability, so I think the features of SvelteKit are really good.

### Body parsing

You can also easily access `request.body`.

```ts
export async function post({ request }) {
  const data = await request.formData(); // or .json(), or .text(), etc
}
```

By simply appending the desired data format after the request, you can easily extract the data you want as shown below.

### HTTP method overrides

By default, HTML Forms only support GET and POST methods. However, with SvelteKit configuration, you can also use other methods such as PUT, PATCH, and DELETE.

```js
// svelte.config.js
export default {
  kit: {
    methodOverride: {
      allowed: ["PUT", "PATCH", "DELETE"],
    },
  },
};
```

```html
<form method="post" action="/todos/{id}?_method=PUT">
  <!-- form elements -->
</form>
```

### Private modules

If a file or folder name starts with \_ or ., that file or folder will not be routed.

### Advanced routing

1. Rest parameters
   You can have multiple dynamic routings.

Ex) `src/routes/[category]/[item].svelte` or `src/routes/[category]-[item].svelte`

💡 If the parameter is ambiguous such as x-y-z, x is determined as the category and y-z is determined as the item.

2. Sorting

```
src/routes/[a].js
src/routes/[b].svelte
src/routes/[c].svelte
src/routes/[...catchall].svelte
src/routes/foo-[bar].svelte
```

When there are files like above, the address `/foo-abc` matches all files. Therefore, SvelteKit arranges the above files according to the following rules:

- The more detailed the file is, the higher the priority. (Ex: `src/routes/foo-[bar].svelte`)
- Standalone endpoints have the highest priority. (when the detailed level is the same)
- Rest parameters have the lowest priority. (when the detailed level is the same)
- The remaining ones are sorted alphabetically.

```
src/routes/foo-[bar].svelte
src/routes/[a].js
src/routes/[b].svelte
src/routes/[c].svelte
src/routes/[...catchall].svelte
```

Following the above rules, the files are arranged as above and `/foo-abc` matches with `src/routes/foo-[bar].svelte`

3. Fallthrough routes

If you want `/foo-def` to be matched not only with `src/routes/foo-[bar].svelte` but also with `src/routes/[b].svelte `, use the fallthrough option.

```html
<script context="module">
  export function load({ params }) {
    if (params.bar === "def") {
      return { fallthrough: true };
    }

    // ...
  }
</script>
```

```js
export function get({ params }) {
  if (params.a === "foo-def") {
    return { fallthrough: true };
  }

  // ...
}
```

If you use the fallthrough option in `src/routes/foo-[bar].svelte` and `src/routes/[a].svelte` as above, the request is forwarded to `src/routes/[b].svelte`.

# Layouts

Many web apps have elements that must appear on all pages, such as the header and footer, and it is very cumbersome to copy and paste them on each page. However, if you use Layout components, you can reduce the hassle.

To create a Layout component, you need to create a file called `src/routes/__layout.svelte`.

The default layout looks like this:

```html
<slot></slot>
```

You can add anything to the layout page, but it must include `<slot>` at a minimum. If you add `<nav>` to the layout page, you can always see the navigation regardless of which page you go to. (No more copy and paste!)

```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/settings">Settings</a>
</nav>

<slot></slot>
```

## Nested layouts

In real apps, there are usually not only one /settings page but also nested pages such as /settings/profile and /settings/notifications, which often have overlapping elements. If you want to create a layout that applies only to files under /settings, create a file called `src/routes/settings/__layout.svelte`

## Resets

If you create a file called `__layout.reset.svelte`, the files in that folder will use the default layout instead of being affected by any previously created layout. For example, if you create a file `src/routes/admin/layout.reset.svelte`, all files under the `/admin` folder will use the default layout.

## Error pages

If a page fails to load, SvelteKit can display an error page for us. And we can customize the error page through the `__error.svelte` file.

For example, if `src/routes/settings/notifications/index.svelte` fails to load, SvelteKit will try to render `src/routes/settings/notifications/__error.svelte`. If the file `src/routes/settings/notifications/__error.svelte` does not exist, it will render `src/routes/settings/__error.svelte` or `src/routes/__error.svelte`.

Also, if the error page has a `load` function, it will receive arguments `error` and `status`.

```html
<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script>
  export let title;
</script>

<h1>{title}</h1>
```

# Loading

Components specified as pages or layouts can use a function called load. The load function is a function that is executed before the component is created. Using this function, we can fetch data before the component is created to eliminate loading.

If the data comes from an endpoint, this function may not be necessary, but it can be useful when using an external API.

```html
<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params, fetch, session, stuff }) {
    const response = await fetch(
      `https://cms.example.com/article/${params.slug}.json`
    );

    return {
      status: response.status,
      props: {
        article: response.ok && (await response.json()),
      },
    };
  }
</script>
```

The load function in SvelteKit works very similarly to NextJS's getStaticProps or getServerSideProps. However, the difference is that the load function works on both the client and server sides.

SvelteKit's load has a special feature called fetch, which

1. Can access the server's cookies.
2. Can request the app's own endpoint without issuing an HTTP call.
3. Creates a copy of the response for hydration and sends it with the initial page load.

For more information, please refer to <a href="https://kit.svelte.dev/docs/load" target="_blank">here</a>.

# Conclusion

Today, we learned about SvelteKit. If you want to learn about Hooks, Modules, Service workers, Anchor options, etc. that were not mentioned in this article, please check <a href="https://kit.svelte.dev/docs/introduction" target="_blank">it</a> out.
