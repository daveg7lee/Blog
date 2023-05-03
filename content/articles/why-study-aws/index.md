---
title: "Why should we study AWS?"
description: "Reasons to study AWS"
date: "2022-10-23"
banner:
  src: "../../images/aws.jpg"
  alt: "AWS"
categories:
  - "AWS"
keywords:
  - "AWS"
---

# Introduction

I have used AWS extensively in my web development work so far, including deploying web servers and managing user profile pictures and uploaded photos. However, despite using AWS so much, I have always avoided it, partly because it is too vast and complicated, and also because I feared losing money if I made a mistake.

In fact, the saying that you can lose money if you make a mistake with AWS is somewhat true. I have seen many developers around me who have accidentally incurred a large expense with AWS or whose accounts have been hacked. However, in most cases, if it was used for learning purposes, AWS tends to refund the expense.

To be honest, if you are hosting a web service for a side project, I do not think it is necessary to learn AWS. AWS is like an electric saw that can cut anything, including your wallet. Therefore, if you plan to work on a small side project, I recommend using free hosting services like Render.

# Why you should study AWS

## Cost-effectiveness

As I have continued to avoid AWS and use services like Heroku and Render, I have noticed one thing: it is too expensive compared to its performance.

⛔️ Note: This article is not saying that services like Render or Heroku are unreasonably expensive. These services provide complex and diverse features like CI/CD and auto-scaling, which justify their prices. However, in terms of performance only, it can be said that studying AWS and using AWS is much cheaper. When working on personal side projects, I also tend to use these kinds of services.

<img src="https://velog.velcdn.com/images/kihyun/post/eded9820-a26c-4e98-b8a0-a7c72e3cbc94/image.png" width="100%">

The picture above shows the pricing for Render. Looking at the cheapest option (excluding Free), Starter provides 512MB of RAM and 0.5 CPU for $7. Additionally, Render only provides servers in four regions:

1. Oregon, USA
2. Frankfurt, Germany
3. Ohio, USA
4. Singapore

Now, let's compare Render to AWS, using the same performance specifications:

<img src="https://velog.velcdn.com/images/kihyun/post/e1faa5dd-a8e9-487e-8d72-fb763011d90a/image.png" width="100%">

As expected, if you use t4g.nano, which provides 2 vCPUs and 0.5 GiB of RAM, you can use EC2 for as low as $5 per month. Also, using AWS allows you to use the server from the region closest to you, and AWS provides 4 times more CPUs than Render, which means it will actually provide much faster performance.

<p align="center" style="color:gray">
  <img src="https://velog.velcdn.com/images/kihyun/post/2950125c-38d7-4dc4-9a2f-d2e3fb851ea9/image.png" style="padding: 0;margin:50px 0 10px 0;" width="100%">
By changing the pricing model and paying for the whole year upfront, you can reduce the cost to as low as $3 per month.
</p>

You might wonder, "I remember that the EC2 instances I used were much more expensive than this." This is because EC2 has two main pricing models, and the one you used was likely the on-demand model, which is the most flexible but also the most expensive. The other model is the reserved instance model, where you rent instances for one or three years, which provides a significant discount and leads to the difference in pricing between EC2 and Render.

By properly studying AWS, you can enjoy tremendous benefits. You can find the services you need at the lowest price or combine various services to suit your needs.

Of course, AWS can be challenging to learn, but if you study it properly, you can enjoy tremendous benefits. It's like going from using a Swiss Army knife to using professional tools. I hope you have understood the explanation.

## Flexibility

Firstly, I would like to quote the words of a famous developer, Tao.

<p align="center" style="color:gray">
  <img src="https://velog.velcdn.com/images/kihyun/post/5dfecd74-fb59-48f0-9646-5258640197e3/image.png" style="padding: 0;margin:50px 0 10px 0;" width="100%">
Front-end developer, Tao
</p>

Q. When I search for frontend-related materials, there's little talk about Vercel, and many seem to use Amazon (Cloudfront, etc.) for deployment. Are there any disadvantages to Vercel that lead to this, or are there other reasons?

A. In the case of Vercel, the strategy is "Leave it to us, and we'll do everything for you," while AWS's strategy is "We have everything you need, so choose what you want to use, and we'll lend it to you." So, if you leave everything to Vercel, it's convenient, but you can't ask for something when you're disappointed, which is a disadvantage. It's natural that AWS is more helpful for backend jobs than Vercel, which is used by more companies because it's part of a larger ecosystem. There are many frameworks, but it's similar to React's ecosystem, which has the most information. The rest is omitted.

Of course, I got permission, haha.

<p align="center" style="color:gray">
  <img src="https://velog.velcdn.com/images/kihyun/post/43ef1296-ea83-4dd6-bd34-82617214ae90/image.png" style="padding: 0;margin:50px 0 10px 0;" width="100%">
</p>

As mentioned above, the strategy of platforms like Vercel is "Leave it to us, and we'll do everything for you." They make it easy to do things like CI/CD and environment variable management without any special settings, which can be complex and time-consuming if done directly in AWS. On the other hand, AWS uses the strategy "We have everything you need, so choose what you want to use, and we'll lend it to you." Therefore, if you use Vercel, you must be 100% dependent on Vercel, but with AWS, you can choose the services you need according to your needs. For example, you can use S3 if you want to deploy a static website, EC2 if you want to deploy a React web application, or Lambda if you want to deploy a serverless application. If you are working on a small-scale project or a side project, you may not know why this flexibility is necessary. However, in situations where you need to handle large amounts of traffic or where you are forced to use AWS (or other clouds like GCP or Azure) for internal company reasons, it may be necessary to be completely dependent on AWS. Therefore, I think it's a good idea to study AWS or other cloud platforms in preparation for this.

# How to Start Studying AWS

In my opinion, the best way to start studying AWS is by getting certified. When studying for a certification, you have a clear goal and deadline, which makes your studying more efficient than just studying without a specific objective. Many people start studying AWS with only the goal of learning, but in my experience, this approach doesn't last long. Additionally, a certification can serve as proof of your understanding of AWS and can help demonstrate your knowledge of AWS. However, it is not considered to be a significant advantage.

For those who do not wish to pursue certification, there are still plenty of resources available to help you learn AWS. The recommended book in this article is the **AWS Certified Solutions Architect Study Guide**, which is an official guide from Amazon. It provides detailed explanations of AWS's major services and how to design efficient architectures using them. There are practice problems at the end of each chapter to ensure that you have understood the material.

# Conclusion

To be honest, I am currently studying for certification as well. Originally, I aimed to obtain certification by the beginning of next year, but due to other commitments such as the TOEFL, I have fallen behind. Studying AWS is undoubtedly challenging, as there is a vast amount of services to understand and an exam to pass. However, I believe that being proficient in AWS services will be very helpful in the future.
