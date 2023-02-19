//  Weather API
// Open Weather API Key

const API_APPID = process.env.API_KEY;

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const SEARCH_BY_LOCATION = `${API_URL}?appid=${API_APPID}`;
const GET_NEXT_DAYS_HOURS = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${API_APPID}`; //&lat={lat}&lon={lon}

export { API_APPID, API_URL, SEARCH_BY_LOCATION, GET_NEXT_DAYS_HOURS };
