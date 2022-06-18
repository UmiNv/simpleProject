"use strict"; //вкл строгий режим

//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //+

//2
const  personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

//3 (переменные технические, поэтому используем буквы)
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
   
console.log(personalMovieDB);

