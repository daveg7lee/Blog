---
title: "Explore Svelte"
description: "Learn about Svelte"
date: "2021-05-29"
banner:
  src: "../../images/blockchain.png"
  alt: "blockchain"
categories:
  - "Explore"
keywords:
  - "Blockchain"
---

# 🧐 Blockchain?

Blockchain refers to a chain of blocks that are connected to each other, where each block holds data. Blockchain can be seen as a type of database since the blocks holding data are connected to each other.

If blockchain is a database, there are many other great databases. Why blockchain?

You might think that. However, the great thing about blockchain is not in being a database.

## 1. ➕ Append only

Developers who see this may be shocked. If it's a database, it should be able to add, modify, and edit data, but blockchain can only add. However, being able to add only can be a good thing. This is because information such as university degrees and Bitcoin transaction histories should never be arbitrarily modified.

## 2. 🏛 Decentralization

If you've been interested in cryptocurrency, you've probably heard this term before. Decentralization means distributing power to prevent an individual or group from arbitrarily controlling the blockchain. Therefore, in the world of blockchain, even developers cannot modify the data. Since everyone has a copy of the database, if someone lies and says they have a lot of Bitcoins, it can easily be exposed by comparing it with their copy. However, where there are advantages, there are also disadvantages. Because of this decentralization, Bitcoin cannot be shut down. To shut down Bitcoin, all computers that make up the Bitcoin network would have to be turned off, which is impossible as long as electricity is available.

# 🧱 Block

Blockchain is a chain of blocks, but what is a block?

A block is the only way to add data to the blockchain. Blockchain uses blocks to store data, and each block contains the hash of the block, the hash of the previous block, and the information you want to add to the blockchain.

## Data

First, let's look at the easiest thing. As I have been saying, blockchain is a database, so you can put any data into it. For Bitcoin, it is transaction history, and for medical blockchain, it is medical information.

## 🧮 Hash

Hash is one of the mathematical functions that we learned in math. This function is a one-way function and deterministic, meaning it works only in one direction, and there is always only one output for one input.

<img src="https://images.velog.io/images/kihyun/post/6c184dfd-34c2-4ad4-bc26-847444bd6f7c/image.png" width="100%">

As shown in the picture above, even if only one input value is changed, the output value is completely changed. Thanks to this characteristic, it is easy to detect data corruption or forgery.

<img src="https://images.velog.io/images/kihyun/post/411be7c0-0ac6-47b4-9892-f784b3fff682/image.png" width="100%">

In addition, this function operates in only one direction, so it is very difficult to obtain the input value with the output value (it is possible with a quantum computer).

# Mining (Proof of Work)

Can anyone put any information on the blockchain?

It depends. If the blockchain uses Proof of Work, anyone cannot put any data on it. Let's learn about mining now!

## Miner

The key to mining is the miner who verifies all data that tries to enter the blockchain. For example, if I want to send 100 Ether to my friend, the miner checks all facts related to the transfer, and when it is proven that the transfer is valid, the miner creates a block with the data I sent and puts it on the blockchain.

Why do miners protect the blockchain?

The reason is simple: to make money. Miners receive rewards every time they upload a block to the blockchain, so many people become miners to aim for that reward.

Can miners make money by becoming miners?

Absolutely not. To upload a block to the blockchain, you must solve the problem that the network presents. In other words, you need to find out how many numbers are needed to change the hash value. At first glance, it may seem really simple, but it's not. This is because, due to the nature of the hash function, you can't know the input value with the output value, so you have to try each number from 0 to infinity to check.

# Conclusion

Today, we learned about blockchain, which is becoming popular these days. Even just by looking at this much, it is a great technology, but in fact, the innovation of blockchain is elsewhere. In the next post, let's learn about second-generation cryptocurrency, which is the innovation of blockchain.
