---
title: Chromia Notes
tool: Chromia
date: January 2023
chain: Ethereum
bridge: false
---



# Chromia Notes

## Table of Contents
> 1. [Main Features](#1-Main-Features)
> 2. [Relational Database Model](#2-Relational-Database-Model)
>> 2.1. [Technical Aspect](#21-Technical-Aspect)
>> 2.2. [Ok so What?](#22-Ok-so-What?)
> 3. [Hybrid Consensus Mechanism](#3-Hybrid-Consensus-Mechanism)
>> 3.1. [practical Byzantine Fault Tolerance (pBFT)](#31-practical-Byzantine-Fault-Tolerance-(pBFT))
> 4. [Ethereum Virtual Machine (EVM)](#4-Ethereum-Virtual-Machine-(EVM))
>> 4.1. [Solidity Programming Language](#41-Solidity-Programming-Language)
> 5. [Further Reading](#5-Further-Reading)

## 1. Main Features

Chromia is a decentralized, open source blockchain platform which:

 * utilizes a **Relational Database Model** to store its data.
 * designed to be scalable and flexible.
 * uses a hybrid consensus mechanism that combines **Proof-of-Stake (PoS)** and **practical Byzantine Fault Tolerance (pBFT)** to ensure security
 * built on top of **Ethereum Virtual Machine** using **Solidity Programming Language**, hence supporting smart contracts.

In the following sections you will find a breakdown of the features mentioned in the above. Explanation of key technical terms as well as the benefits or drawbacks they pose.

## 2. Relational Database Model
### 2.1. Technical Aspect
This database model is one of the most popular ones. Relational Databases are flexible, easy to understand and to use. They organize data points with defined relationships into tables of rows (tuples) and columns (attributes). Relationship between data is defined using keys.
There exist two types of keys:
1. **Primary Keys** - a unique identifier for each row in the table
2. **Foreign Keys** - a field in one table which is used to reference a primary key on another table.

This allows different tables to be combined and queried in a single database query. Relational model is used by popular database management systems, such as MySQL, Oracle, and Microsoft SQL Server.

### 2.2. Ok so What?
The technical features mentioned above provide the certain benefits when using them.  
* A well defined and easy to understand and use **Structure**.
* Keys ensure **Data Integrity** so there is no inconsistency.
* Changes on one table won't affect the other tables hence ensuring **Data Independence** for an easy to modify database structure.
* Structured Query Language (SQL) can be used for **Efficient Querying**.
* Can handle large amount of data and users.
* Its popularity offers a larger community support and compatibility in a variety of systems.
* Allows user authentication and data encryption hence increased **Security**.

## 3. Hybrid Consensus Mechanism

At the current state our community is based on Cardano which uses a Proof-of-Stake consensus mechanism. Therefore, I can safely assume that everyone is aware of the PoS benefits, and there is no need to include them in this document.

### 3.1. practical Byzantine Fault Tolerance (pBFT)
The pBFT algorithm working principle super simplified: pBFT works by replicating a database across multiple nodes. Each node acts as a replica of the database and communicates with other nodes to maintain consistency and reach consensus on the state of system. In addition, the algorithm uses some kind of voting system to ensure that the replicas agree on the state of the system. 

This algorithm on top of being fairly easy to implement, deliverers a high performance (high number of transactions per second). Moreover, it is designed with a "Fault Tolerance" mechanism which in case of crashes or malicious attacks on some nodes allows the overall system to maintain its integrity.

Pos combined with pBFT account for **increased security, higher performance and energy efficiency**.

## 4. Ethereum Virtual Machine (EVM)
EVM is a runtime environment for executing smart contracts on the Ethereum Blockchain. Some features that make it a good environment for executing smart contracts are:
* It allows smart contracts to be executed in isolated environments hence preventing interference.
* It makes possible that all contracts are executed in the same way despite the environment. This feature is called **Deterministic Execution** and allows to predict the outcome of the contract with a high degree of certainty.
* It is resistant to tampering therefore increased **Security**

### 4.1. Solidity Programming Language
Solidity is a high level programming language, designed especially for writing smart contracts. It is the most popular language among developer in Ethereum Blockchain. Some of its strengths include: 
* well-established ecosystem with a wide variety of libraries, tools and a large community.
* strict rules for declaring/using variables and data types.
* high level syntax and similarity to Javascript and C++ make it easy to learn, read and understand.

Solidity, given its high-level design may pose some disadvantages such as reentrancy, integer overflow/underflow, uninitialized storage pointers, lack of input validation etc. However, the good news is that these can be avoided by employing "best practices" and using certain libraries or tools.


## 5. Further Reading
Proof-of-Stake consensus mechanism has a major security benefit worth mentioning when compared to Proof-of-Work or practical Byzantine Fault Tolerance. It provides a solution to **"Nothing at Stake" attacks**. 

Before explaining what **"Nothing at Stake" attack** is it is important to know what a **"Forked Blockchain"** is.

**"Forked Blockchain"** is considered the situation where a blockchain is split in two or more chains for whatever reason, including changes in the consensus algorithm or disagreement among chain members.
There are 2 types of chain forks:
1. **Soft Fork** --> backward-compatible changes in the protocol, meaning the addition of new blocks to the chin while keeping the old ones still valid. 
2. **Hard Fork** --> **NOT** backward-compatible changes. This one occurs by creating a new chain while the old one becomes incompatible.

---
**-D.**