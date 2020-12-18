# Weedmaps Frontend Code Challenge

###### Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Challenge details](#challenge-details)
  - [Routing](#routing)
  - [Star rating](#star-rating)
  - [Retailer hours](#retailer-hours)
  - [Retailer page](#retailer-page)
- [Delivering your challenge](#delivering-your-completed-challenge)

## Prerequisites

- **You'll need Node `>= 12` installed.** We recommend leveraging
  [nvm](https://github.com/creationix/nvm) to switch Node versions between projects.
- Install [yarn](https://yarnpkg.com/en/docs/install) if you don't already have it.

## Installation

- Ensure you're running a modern version of NodeJS as mentioned above
- From this project root, run `$ yarn install`
- To start the development server, run `$ yarn start`
- Your browser should automatically open at `http://localhost:3000` and will reload on subsequent file changes

#### Available Scripts

| Command      | Description                   |
| ------------ | ----------------------------- |
| `yarn start` | Starts the development server |
| `yarn test`  | Starts the test runner        |
| `yarn tsc`   | Checks Typescript types       |

## Challenge Details

The goal of this code challenge is to help us better understand some of your capabilities as a software engineer. We also want to share with you some of the technologies and best practices we use to build software on our teams.

This challenge is a partially completed project which is described in more detail below. We encourage you to complete as much of this as you're comfortable with, as we recognize your time is valuable. We're interested in how you solve problems and make decisions when working within constraints. For any area that you aren't able to complete, feel free to include a short blurb about how you would approach the problem and why.

### ✅ Routing

Implement the router and links between various components. More detail is available in the component definitions.

- `src/index.tsx`
- `src/components/header/index.tsx`
- `src/components/listing-card/index.tsx`
- `src/templates/default/index.tsx`
- `src/pages/retailer.tsx`

### ✅ Star rating

Using the provided component, `/src/components/star/index.tsx`, implement the remaining user interface for star ratings as described in the component definition.

### ✅ Retailer hours

Using the provided component, `src/components/hours/index.tsx`, render the retailer hours for each day of the week.

### Retailer page

We encourage you to have fun with the ui styling here. With a focus on mobile devices, finish styling the retailer page, `/src/pages/retailer.tsx`. Use modern CSS and responsive techniques to style the information you would like to see rendered. At a minimum, this should inlude the retailer's name, star rating, and business hours.

## Delivering Your Completed Challenge

- Please do NOT include any `.git` history or `/node_modules` directories
- Zip your completed work and submit it through the URL provided near the bottom of the original code challenge email
