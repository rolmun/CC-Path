//constants.js

export const API_URL = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=top_rated_english_250'; //multiple moview titles  //titles/ radonm/
export const API_MOVIE_ID_URL = 'https://moviesdatabase.p.rapidapi.com/titles/{id}?info=base_info'; //single movie
export const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05277f980fmsh6b787c0721f1d9ep13c4c9jsna6db196049e8',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};