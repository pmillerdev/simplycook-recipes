# SimplyCook Recipes Task

My soluion to the Senior Frontend Developer - Case Study from SimplyCook. The task was to fetch an array of recipes from an api endpoint, to filter these recipes based on allergens, and to display the recipes as cards inside a scrollable carousel.

The deployed application can be found [here](https://simplycook-recipes.vercel.app/)

## Running the App Locally

1. Clone the repository.
2. From the root directory, run `pnpm i` (or `npm install` or `yarn`).
3. Run `pnpm dev`(or `npm run dev` or `yarn dev`).
4. Navigate to http://localhost:5173/ in your browser.

`pnpm test` to run the test suite.

## Technologies Used

- React for building the UI.
- TypeScript for static typing.
- React Window for the virtualized list (896 kB in size).
- SWR which provides a hook for performing API calls (620 kB in size).
- React Spring Web for the card flip animation (158 kB in size).
- Vitest and React Testing Library for unit and component testing.
- Vite and SWC for strong performance and a quick setup with minimal configuration.
- Pnpm for package management.
- Vercel for deployment and hosting.

## Assumptions and Restrictions

- The Card Carousel should be horizontally scrollable without using buttons (no buttons were visible in the figma designs).
- The Carousel should be wide enough to display 3 items at a time on desktop and 1 item on mobile.
- The Carousel should be useable accross all devices.
- The Carousel should perform well regardless of the number of recipes returned.
- The https://www.simplycook.com/api/recipes endpoint always returns the full list of recipes.
- No prior knowledge of the size of the recipes dataset before or after filtering.
- Each recipe has `id`, `name`, `shortDescription`, `image`, `cookingTime` and `chilli` properties with `averageRating` and `topReview` being nullable.
- The application and code should be structured as if it were a large codebase (extensible).
- There is no preference for the use of external packages as long as their use can be justified.

## Solution

Please explore the code within the `src` directory. I'm happy to provide further explanation of the challenges I encountered, decisions made and the solution.
