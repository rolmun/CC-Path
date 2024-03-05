//get-movies.js
import { OPTIONS, API_URL } from "./constants.js"; //full list

export const get_movies = async() => {
  try {
    const response = await fetch(API_URL, OPTIONS);
    const result = await response.text();
    return JSON.parse(result).results;
  } catch (error) {
    throw error;
  }
}