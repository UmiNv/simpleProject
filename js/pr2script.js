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

//1 (переменные технические, поэтому используем буквы)
      
for (let i=0; i<2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');
          
    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--; //откатываем шаг назад
    }       
}

if (personalMovieDB.count < 10) {
    console.log('Проссмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель'); 
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);

//const g='ajgjlkfjlfkjklgjslkjkljslkjlksjlkjskljkjkjljljkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj';
//console.log(g.length);

//задача 2


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


// function sayHello(name) {
//     console.log (`Привет, ${name}`);
//     return `Привет, ${name}`;
// }

// sayHello('Маша');

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);
