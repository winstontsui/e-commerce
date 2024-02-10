# E-Commerce Website

Winston Tsui's e-commerce application website intending to show more intermediate and advanced software engineering skills, using Next.js 13's app router. I manage **next.js** server actions and data intricacies with **Prisma ORM**. Authentication with **NextAuth.js** and **MongoDB**. UI using **TailwindCSS** and **DaisyUI**. Website deployment using **Vercel**. I use **Prettier** and **ESLint** for a streamlined development experience. Finally, I use **TypeScript**, **JavaScript**, **CSS** and **HTML**.

Notes: Fullstack project using next.js. Items are pre-rendered and cached, which makes page navigation fast. 
Next.js server actions are a way to execute POST requests on the server, such as adding an item to a cart. Anonymous and authenticated shopping cart merging feature. Pages are server side rendered, featuring faster load time and is great for SEO (Search Engine Optimization).

<br>

## Notes

Format document shortcut: `Shift + Alt + f`

Dependencies are in the `./package.json` file.

`npm i daisyui prisma @prisma/client next-auth @auth/prisma-adapter prettier eslint-config-prettier prettier-plugin-tailwindcss zod`

Use Prisma.io to work with our MongoDB database. However, prisma also works with sql databases.

Normally in a next.js project, our credentials go into the .env*.local file,
but the problem is that prisma only looks at the normal .env file, so we
use that instead.

We can tell prisma to pull the data that we added to the collection and generate a schema from the data: `npx prisma db pull` or push the schema to the database: `npx prisma db push`

`npx prisma generate` generates the prisma client which we can use to call our different database operations on.

Check remote repository I'm pushing and pulling from: `git remote -v`

Change fetch URL for origin: `git remote set-url origin https://github.com/winstontsui/e-commerce`

Change push URL for origin: `git remote set-url --push origin https://github.com/winstontsui/e-commerce`

<br>

<h3>Website Layout:</h3>

1) Home Page:
![Alt text](/Frontend%20images/1.PNG) 
<br>

2) Home Page Bottom: 
![Alt text](/Frontend%20images/2.PNG) 
<br>

3) Item Page:
![Alt text](/Frontend%20images/3.PNG) 
<br>

4) Shopping Cart Page:
![Alt text](/Frontend%20images/4.PNG)

<br>

## About Me

I'm Winston Tsui, a Computer Science student at Syracuse University, hoping to become a software engineer one day :)

Passionate about using code and technology to improve the world.

witsui@syr.edu

<br>

## Sources:
**Florian Walther**

**FreeCodeCamp**: https://www.youtube.com/watch?v=K4ziF0MhbLc&t=537s

Florian Walther's website: https://codinginflow.com 

<br>

Next.js tutorial: https://www.youtube.com/watch?v=ZVnjOPwW4ZA

Markdown docs: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

Markdown live preview: https://markdownlivepreview.com/

<br>