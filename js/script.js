"use strict"; //вкл строгий режим

//1
let numberOfFilms;
//функция  стартового вопроса
function start() {
    //задаем вопрос
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''); //+
    //делаем проверки
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const  personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };


//запомнить введеные фильмы
function rememberMyFilms() {
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

}

rememberMyFilms();

//проверка на уровень насмотренности
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Проссмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель'); 
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
    
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) 
    {
        console.log(personalMovieDB);
    } else {
        console.log('Фиг вам!');
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    //ваш любимый жанр под номером ${номер по порядку}
    for (let i=1; i<=3; i++) {        
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');            
    }
}

writeYourGenres();




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
