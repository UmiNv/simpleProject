"use strict"; //вкл строгий режим
//практика часть 4

// 1. функции сделать методами personalMovieDB
const  personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', ''); 
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }  
    },
    rememberMyFilms: function() {
        for (let i=0; i<2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(), // обрезаем строку от пробелов сразу при получении ответа
                  b = +prompt('На сколько оцените его?', '');
                  
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--; //откатываем шаг назад
            }       
        }
    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Проссмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель'); 
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
        
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) 
        {
            console.log(personalMovieDB);
        } else {
            console.log('Фиг вам!');
        }
    },
    writeYourGenres: function() {
        //ваш любимый жанр под номером ${номер по порядку}
        
        for (let i=1; i<=3; i++) {  
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');        
            if (genre == null || genre === '') {
                console.log('не введен ответ');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }  
            
            // Альтернативный вариант из урока
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
            
        }
        personalMovieDB.genres.forEach((item, n) => {
            console.log(`Любимый жанр #${n+1} - это ${item}`);
        }); 
    }
    

};

//personalMovieDB.start();
//запомнить введеные фильмы
//personalMovieDB.rememberMyFilms();
//проверка на уровень насмотренности
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB(personalMovieDB.privat);
//personalMovieDB.writeYourGenres();

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    //площадь помещений
    let space = 0;
    let volume = 0;
    let deb = 0;
    data.shops.forEach ((item) => {
        space += item.width * item.length;
    }); 
    volume = space * data.height;
    deb = data.moneyPer1m3*volume;
    console.log(space); //площадь помещений
    console.log(volume);    
    console.log(deb);

    if ((data.budget-deb) < 0) {
        console.log('Бюджета недостаточно');
        return 'Бюджета недостаточно';
    } else {
        console.log('Бюджета достаточно');
        return 'Бюджета достаточно';
        
    }
}

isBudgetEnough(shoppingMallData);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let a = [], b = [], c = [], rest = []; 
    arr.sort();
    
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}


sortStudentsByGroups(students);