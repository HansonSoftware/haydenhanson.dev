---
title: 'Twootr'
imgUrl: '/images/projects/twootr/feed-desktop.png'
completedAt: '2023-07-01'
orderId: 5
technologiesUsed: ['React', 'NextJS', 'tRPC', 'Supabase', 'Prisma', Vercel]
summary: 'Twitter/X clone that allows for real time messaging between multiple people. After signing in, you are met with a feed containing content from other users.'
---

I built this clone because wanted to get practice working with a database that supports real time updates in the cloud and test out a new TailwindCSS UI library called DaisyUI.

## Desktop Feed

This is the homepage of the app, after signing in this is what you're greeted with. Messages from other users are displayed on the left, messages from you are displayed on the right. Like Twitter, the most recent messages are displayed first.

![Desktop Feed](/images/projects/twootr/feed-desktop.png)

## Mobile Feed

![Mobile Feed](/images/projects/twootr/feed-mobile.png)

## Loading State

![Mobile Feed Loading](/images/projects/twootr/feed-mobile-loading.png)

Mobile-Responsiveness is a necessity in my book. Of course, we have a loading state as well.

## Posting

![Posting](/images/projects/twootr/posting-desktop.png)

Any user who is signed in can make a post! If you're reading this, go try it out (database currently not active, sorry)! ~~[Twootr](https://twootr-com.vercel.app/)~~. Just type more than one character, up to 280 characters and click post.

## Your Profile

![Profile Desktop](/images/projects/twootr/profile-desktop.png)

Displays all of the posts that you have made, this is made possible with my tRPC API.

## Other Profiles

![Profile Desktop](/images/projects/twootr/other-profile-desktop.png)

This user seems to be quite malicious... Good thing he's my friend...

## Mobile Profile

![Mobile Profile Loading](/images/projects/twootr/profile-loading-mobile.png)

Here's what profiles look like on mobile. This also showcases what the loading state looks like for the Profile Feed.

## Managing Your Account

![Manage Account](/images/projects/twootr/manage-account.png)

User authentication is set up through Clerk, they make managing your account super simple with this dropdown component.

---

## Bullet Points:

- This is a small social media app that I built to practice with the T3 stack before building my next, much bigger project.
- Twootr is built with Next, MySQL, Prisma, tRPC, and Clerk.
- This was originally inspired by the T3 tutorial, I've added some features and completely overhauled the UI.
- I am using Tailwind CSS and Daisy UI for styling.

## The Goal:

The main goal with this project was to practice with tRPC and Prisma. I wanted to get some hands-on experience with these tools and learn the pro-tips. Another goal in mind was to challenge myself as a frontend engineer, I think this UI looks OK. I may revisit this in the future.

## What I've learned:

The main thing that I learned from this project was just how powerful tRPC can be when coupled with Prisma in a Next.js web-app. This entire project was a learning experience and I will be referring back to this repo for reminders in the future.
