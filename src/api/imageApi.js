// Image API
// Unsplash API Key

const API_UNSPLASH_KEY = process.env.API_KEY_UNSPLASH;
const URL_UNSPLASH = `https://api.unsplash.com/search/photos?client_id=${API_UNSPLASH_KEY}`;

const SEARCH_BY_WORD = `${URL_UNSPLASH}&page=1&query=`;

export { SEARCH_BY_WORD };
