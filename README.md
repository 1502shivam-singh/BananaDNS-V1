# Frontend Developer (Marketing) - Coding Exercise

Thank you for taking the time to work on this code exercise. We look forward to seeing what you come up with!

## Overview

This exercise is designed to assess your ability to take a set of requirements and implement an effective solution that meets those requirements. Especially in the context of marketing, it is important to maintain a good balance between user experience, technical implementation, and code quality.

Please note that this exercise is a very simplified use case. We did this on purpose to avoid too much domain knowledge up front. Still, there is plenty of room to demonstrate your skills, experience, and understanding of quality.

## The exercise

### Some context

BananaDNS (fake brand) wants to outline and promote its key features on a landing page to attract the interest of potential new customers. The landing page contains several CTAs to allow visitors to sign up for the product. As part of the marketing department, you will implement the landing page.

### What you have to do

We have outlined all details of the coding exercise on a [Miro board](https://miro.com/app/board/uXjVM4hYKh4=/?share_link_id=631423048323). You have view-only access to the board.

### Submission

1. Please open a single pull request against the `main` branch with your solution. 
2. Request a PR review from Sebastian (@sbastn), developer at DNSimple. This will notify him that your submission is ready for review.
   <img width="327" alt="request-pr-review" src="https://github.com/dnsimple-hiring/hiring-frontend-marketing-code-test/assets/3109736/335bf4a5-6738-4fe2-b116-106f964f0cd5">


✨ Your PR description and commit history will tell us a lot about how you work. Show us the pull requests that we can expect from you!

If you have any questions, please open an issue in this repository.

## FAQ

#### How much time do I have?

From the time we send you the coding exercise, **you have 7 calendar days to submit a PR**. If there's a reason you can't complete the test within this time frame, please let us know and we'll see what we can do.

## Before you start

### Tooling

We use [asdf](https://github.com/asdf-vm/asdf), [asdf-ruby](https://github.com/asdf-vm/asdf-ruby), and [asdf-nodejs](https://github.com/asdf-vm/asdf-nodejs) and to manage runtime dependencies. You are not required to use it, but if you do, you can simply run `asdf install`.

### Setup

Runtime requirements

- ruby 3.2.2
- nodejs 18.14.0

We use [asdf](https://github.com/asdf-vm/asdf) to manage runtime dependencies. You can skip this step if you manage it on your own.

```
asdf install
```

Next, install the app dependencies:

```
bundle
yarn
```

### Running the app

A few processes are required to serve the app and compile the JS and CSS assets. These scripts are defined in the `Procfile`. You can either run them manually in the terminal or use [foreman](https://github.com/ddollar/foreman) or [overmind](https://github.com/DarthSim/overmind) to simplify the execution:

```
PORT=3000 overmind start
```

Navigate to http://127.0.0.1:3000 to see the application running.
