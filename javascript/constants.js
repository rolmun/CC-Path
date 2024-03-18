//constants.js

export const API_URL = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=top_rated_english_250'; //multiple moview titles  //titles/ radonm/
export const API_MOVIE_ID_URL = 'https://moviesdatabase.p.rapidapi.com/titles/{id}?info=base_info'; //single movie
export const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '', //put your key here
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};