---
title: "Now the real Jarvis..?"
description: "Learn about ChatGPT and Auto GPT"
date: "2023-04-20"
banner:
  src: "../../images/Iron-man.jpg"
  alt: "Iron man"
categories:
  - "AI"
keywords:
  - "AI"
  - "Chat GPT"
  - "Auto GPT"
---

# Overview

Nowadays, I think there are almost no people who don't know about Chat GPT. So, how does Chat GPT work and what about Auto GPT? This is raising curiosity.

# Principle

Simply put, current AI technology is closer to pattern recognition at a very high speed rather than thinking. For example, if you want to create AI that distinguishes dogs and cats, you would teach the AI thousands, millions, or billions of photos of dogs and cats to find patterns of dogs and cats. Therefore, even when looking at a new photo of a dog or cat, it can tell you the probability of whether the photo is a dog or a cat based on the patterns it has found.

Chat GPT, which is based on GPT-3, also operates on the same principle, with the difference being that the model was trained on a massive dataset equivalent to 45TB.

> 🚨 If you can't imagine how big 45TB is:
> If you save a 1-hour movie, you can store about 22,500 movies, and if you save a photo that is about 5~7MB, it is an enormous capacity that can store from 6,428,571 to 9,000,000 photos.

In the past, many people thought that GPT-3 was not that great when they heard this explanation, but nowadays, Chat GPT proudly shows off its power.

# Auto-GPT

Auto GPT is a brand-new open-source project created just a month ago. It is also attracting a lot of attention from people, as it is one of the top 100 most starred repositories on GitHub.
The growth of Auto GPT can be seen in the picture below. (100k in just 20 days... wow)

<img src="https://velog.velcdn.com/images/kihyun/post/0488074f-398e-4b57-acd2-1433ff88222d/image.png" width="100%">

When using Chat GPT, you can ask questions and receive answers from GPT. However, in most cases, you cannot get the desired result with just one question, so you have to keep asking questions until you get the answer you want. Auto-GPT can be seen as a version that removes humans from this process. In other words, it uses the more advanced GPT-4 model to ask questions by itself! 🤯
If you give it a task, Auto-GPT can provide the necessary steps and prompts to perform the task without human intervention.
This is possible because Auto-GPT has functions that Chat-GPT cannot perform, such as the following:

1. It can access and analyze necessary information on the Internet.
2. It has both long-term and short-term memory.
3. Generates text using GPT-4 (more accurate text generation is possible).
4. Image generation using DALLE or Stable Diffusion.
5. Can write code and run it by itself.
6. It can speak the progress through an AI voice service.

Honestly, it can be considered almost like Jarvis with this level of functionality...

# Installation

🚨 Keep in mind that Auto-GPT uses both the latest GPT models, GPT-4 and GPT-3, in parallel, so depending on usage, a lot of costs can be incurred.

<img src="https://velog.velcdn.com/images/kihyun/post/365cb879-7747-41f3-8016-07e126ba9697/image.png" width="100%">

I just tested it briefly, and it cost $0.14.

# Requirements

**Python 3.8 or higher**

**VSCode or other text editor**

**Git**

Once the above requirements are prepared, open the terminal and go to any folder to create a project folder, then run the following command. The following command will download the latest stable version of Auto-GPT code from Github.

```
git clone -b stable https://github.com/Significant-Gravitas/Auto-GPT.git
```

When you run the above command, an Auto-GPT folder will be created, and you can open the folder with vscode.

Then, open the terminal and run the following command in the Auto-GPT folder. This command installs all the packages needed for Auto-GPT to work.

```
pip install -r requirements.txt
```

After that, find the file .env.template and duplicate it.

![](https://velog.velcdn.com/images/kihyun/post/005333ac-9c49-4211-a92c-30a42fc05bff/image.png)

Rename the duplicated file to .env.

![](https://velog.velcdn.com/images/kihyun/post/31cfdf73-361f-4d52-99c1-ab3f4f5959be/image.png)

Now, you need to get some API keys. First, you need an Open AI API key because you are using GPT-4 and GPT-3. You can get the API key from the website below, and once you create it, you cannot check it again, so copy it well at once.

<a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener">OpenAI API Keys</a>

Then, paste the copied API key into the OPENAI_API_KEY section in the .env file.

![](https://velog.velcdn.com/images/kihyun/post/bf7d0837-92ed-44f9-8952-83f4d9955fde/image.png)

Since our smart Jarvis needs to search on Google, you also need a Google API key. To do this, you need to go to the following site and create a new project.

[Google cloud console](https://console.cloud.google.com/welcome?_ga=2.156488379.1619365044.1682510851-1000795313.1682423626&_gac=1.82454244.1682510851.CjwKCAjwl6OiBhA2EiwAuUwWZeU_5vHMforYC3niRPvkT8DePpLsMfeDRRc9DAT9fZBDDWqfxpQKBxoCSvkQAvD_BwE&project=airy-galaxy-370417)

To use the Custom Search API, you need to go to the API and Service pages and enable the Custom Search API. Once you've enabled it, go to the user authentication information page and click "Create User Authentication Information" to generate an API key. Then simply paste the generated API key in the location shown in the picture below in the .env file.

<img src="https://velog.velcdn.com/images/kihyun/post/77919c7f-c6c2-46a8-8998-f3ff0b6c842e/image.png" width="100%" />

Then go to the following page to configure the search engine: https://cse.google.com/cse.

Specify the search engine name and select "Full Web Search."

<img src="https://velog.velcdn.com/images/kihyun/post/101f2de9-186a-41ca-b6db-acb84bd8ac85/image.png" width="100%" />

After creating it, go to the customization page and copy the search engine ID. Then paste the ID under the Google API key in the `.env` file under `CUSTOM_SEARCH_ENGINE_ID`.

> If you don't add a credit card to Google Cloud, 100 searches per day are provided for free. If you add a credit card, 10,000 searches are provided for free.

> You can also integrate Auto-GPT with services such as Github, Twitter, AI voice services, and Stable Diffusion.

If you don't set up a memory backend like Redis or Pinecone, the memory is stored locally. To store memory locally, create a file named auto-gpt.json in the project root folder.

# Using Auto-GPT!

If you've completed all the steps, you can run Auto-GPT with the following command in the terminal:

```
python -m autogpt
```

At this point, it will ask for the name of the AI, which can be set as desired.

<img src="https://velog.velcdn.com/images/kihyun/post/03cf179c-caee-430d-8cd1-35b2d5e1ace9/image.png" width="100%">

I decided to create an AI that searches for universities since I will soon be attending a university in the United States. AutoGPT recommended the following universities based on my TOEFL score, GPA, and budget:

<img src="https://velog.velcdn.com/images/kihyun/post/c1f623ff-054a-428d-b7a5-bbc8baeb9d38/image.png" width="100%">

1. Manhattan Institute of Management
2. University of South Florida
3. University of Tampa
4. George Mason University
5. University of Pennsylvania
6. University of California, Berkeley
7. University of Central Florida
8. Dartmouth College

# In conclusion

while the fact that artificial intelligence can think and act on its own is certainly impressive, I still feel that there are many shortcomings in the current development version (such as getting stuck in infinite loops or just continuously searching).

**Conclusion: Jarvis is still far away.**
