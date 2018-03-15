# MyReads: A Book Lending App

This is my submission for the My Reads project for Udacity's React Fundamentals course.

A detailed functional description may be found [here](https://review.udacity.com/#!/rubrics/918/view).

Note that the search query is retained, as I felt this led to a better user experience when flipping between pages.

# Building and Running the app
From the root project directory run `npm i`.

## For a production build
From the root project directory run `npm run-script build`.

You may serve the production app locally with a static server, ex. using `pushstate-server` or yarn:
  `yarn global add serve`
  `serve -s build`

## For a development build
From the root project directory run `npm start`.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

