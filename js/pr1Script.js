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

// for (let k=1; k<=10; k++) {
//     if (k % 2 === 0) { // получаем результат деления на 2
//         console.log(k);
//     }
// }




//пирамидка
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//         console.log(lines-i);
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//         console.log(2 * i);
//     }
//     result += "\n";
// }

// console.log(result);

//practice 2

//задание 1. Автоматизировать вопросы пользователю при помощи цикла. 