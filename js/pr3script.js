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

// function calculateVolumeAndArea(num) {
//     if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) //проверка что !Number.isInteger(num) = false без дробных типа 15.2 {
//         return "При вычислении произошла ошибка";
//     } else {
//         let volume = 0 , area = 0;
//         volume = num * num * num;
//         area = 6 * (num * num);
//         return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
//     }

// }


// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             console.log(Math.ceil(i / 4));
//             return Math.ceil(i / 4);
//         }
//     }
// }
// getCoupeNumber(2);

// function getTimeFromMinutes(m) {
//     if (typeof(m) !== 'number' || !Number.isInteger(m) || m < 0) { 
//         return "Ошибка, проверьте данные";
//     } else {
//         let h = '', a = 0, b = 0;
//         a = Math.floor(m/60);
//         b = m%60;
        
//         switch(a){
//             case 1:
//                 h = 'час';
//                 break;
//             case 2:
//             case 3:
//             case 4:
//                 h = 'часа';
//                 break;
//             default:
//                 h = 'часов';
//                 break;
//         }
//         return `Это ${a} ${h} и ${b} минут`;
//     }
// }

// // Место для второй задачи
// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number" || typeof(d) !== "number") { 
//         return 0; 
//     } else {
//             return Math.max(a,b,c,d);
//         }
// }

//31.call-back функции
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback(); //вызов callback функции, кот-я передается в аргументе
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); //когда передается просто функция в качестве аргумента то записывается без скобок и кавычек


// learnJS('JavaScript', function() { //передаем в первую в качестве аргумента функцию вторую - безымянную
//     console.log('Я прошел этот урок!');
// });

//32. Обьекты. Деструктуризация обьектов

//способ создания обьекта 
// const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }, 
//     makeTest: function() { //создание метода обьекта в ручную
//         console.log("Test");
//     }

// };

// options.makeTest(); //запускаем/вызываем метод
// // деструтуризация обьекта
// const {border, bg} = options.colors;  //получаем значения определенных ключей
// console.log(border);
 
// console.log(Object.keys(options).length); //узнаем длину получившегося массива

//delete(options.name); //удаление свойства из обьекта
// let counter = 0; //переменная для подсчета количества свойств в обьекте
// for (let key in options) { //переборка свойств в обьекте
//     if (typeof(options[key]) === 'object') { //проверка на то что в свойствах обьекта встречается обьект, то мы его раскрываем
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }    
// }

// console.log(counter);

//33.массивы и псевдомассивы. Методы для работы с массивами

// const arr = [1, 2, 3, 6, 8];

//методы для работы с концом массива

//arr.pop(); //удаление последнего элемента в массиве

// arr.push(10); //добавление последнего элемента в массиве
// console.log(arr);

//1.перебор массива - обычное условие
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// } 

//2.перебор массива - for of
// for (let value of arr) {
//     console.log(value);
// } 

//метод for each 
// arr.forEach(function (item, i, arr ) { //использует вложенную callback фукцию для каждого элемента в массиве
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//метод split - из строки делает массив. Нужно указать какой разделитель между элементами был введен
//метод join - из массива делает строку. ТОже указываем разделитель для элементов
//метод sort - сортировка массива как строки, если не указывать правило сортировки во внутренней функции

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

//35. Передача по ссылке или по значению. Оператор Spread

//создание копии обьекта 

const obj = {
    a: 5,
    b: 1
};

//функция создания нового обьекта перебирая прежний (создание поверхностной копии)

function copy(mainObj) {
    let objCopy = {}; //создаем пустой обьект

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key]; //записываем в новый объект свойства из прежнего обьекта
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);  //в переменную записываем копию numbers
// newNumbers.a = 10;  //вносим изменения в копию
// console.log(newNumbers);

//object.assign(); слияние обьектов в один с расширением количества свойств

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 14;
console.log(clone);
console.log(add);

//создание копии массива метод slice

const oldArray = ['a', 'b', 'c'];
const newArray= oldArray.slice();

newArray[1] = 'sadadasds'; //вносим изменения во второй элемент нового массива
console.log(newArray);
console.log(oldArray); 

//оператор разворота (ES6-ES8) Spread работает и с массивами и с обьектами

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'bloggs'],
      internet = [...video, ...blogs, 'vk', 'facebook']; //spread Оператор ... 

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num); //передаем аргументы из массива функции

//копия массива через spread 
const array=['a', 'b'];
const newAarray = [...array];

//копия обьекта через spread 
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     const expirience = personalPlanPeter.skills.exp;
//     console.log(expirience);
//     return expirience;
    
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//      const {programmingLangs} = plan.skills;
//      for (let key in programmingLangs) {
//          str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
         
//      }
//      console.log(str);
//      return str;
 
//  }

//  showProgrammingLangs(personalPlanPeter);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
    
// }

// showFamily(family);


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let str = '';
        const {age} = plan;
        const langs = plan.skills.languages.join(' ').toUpperCase();
        str += `Мне ${age} и я владею языками: ${langs}`;  
        console.log(str);
        return str;      
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const str = plan.skills.exp;
//     console.log(str);
//     return str;
// }

// showExperience(personalPlanPeter);


// function showProgrammingLangs(plan) {
//     let str = ''; 
//     const {programmingLangs} = plan.skills;
    
//     if (Object.keys(programmingLangs).length !== 0) {
//      for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]} \n`;        
//      }
//     } else {
//         str = '';
//     }
//     console.log(str);
//     return str;
// }

// showProgrammingLangs(personalPlanPeter);


//const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const family = [];

function showFamily(arr) {
    let str = '';
    if (arr.length !== 0) {
        str += `Семья состоит из: ${arr.join(' ')}`;
        console.log(str); 
    } else {
        str += 'Семья Пуста';         
    } 
    console.log(str); 
    return str;
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach (function (item, i, arr) {
        console.log(item.toLowerCase());
    });    
}

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
    let strReverse = '';
    if (typeof(str) !== 'string') {
        strReverse = 'Ошибка';
    } else {
        strReverse = str.split('').reverse().join('');
    }
    return strReverse;
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';

    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

        arr.forEach(function(curr, i) {
            if (curr !== missingCurr) {
                str += `${curr}\n`;
            }
        });
    console.log(str);
    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');


