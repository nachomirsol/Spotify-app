# Spotify-App

## Description
App that uses spotify api to search for your favorite artists, albums and tracks.

## Technology
We have separated the app in 2 script layers for maintainability:
- Presentation logic layer where we use jquery at main.js
- Data logic implemented in ES6 at api.js. The api client uses the fetch method to get json data from spotify url

## How to use it
To use this app you will need a 1 hour expiration token obtained here : https://beta.developer.spotify.com/console/get-several-artists/ 
Press the GET TOKEN button, then press the request token button and copy the OAuth Token input to the api.js here: 
```javascript
    const token = "BQDQU7uyfDft66q-6_ulVw9TU0d_jzaC89XFuSAU0mENFvTZF4VhDlCN4SPydG8n-3wU5KOchebpxp7MnO4Z5rAF5SbC4Cif-sRW5grYsJa4jo7wfR0Rda7bZ3Sy4cBFoYZrV1WM6ehOJ7Up";

```
Then open the index.html file and enjoy it