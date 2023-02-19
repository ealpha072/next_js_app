#### Explanation

In the code block above, we imported the Express and Next libraries and created an instance passing in a boolean based on the environment which detects whether to launch Next.js in dev or production mode.

The app.getRequestHandler returns a request handler that we can use to parse all HTTP requests. The prepare function returns a promise, so we can add a .then pipe to it. In the .then call, we initiate Express, and we use a wild card route to catch all routes and return them to the handler function.