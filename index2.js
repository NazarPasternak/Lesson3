// 1) створити функцію яка приймає масив та виводить його.
// let array = [1, 2, 3, 4, 5, 6];
// function printArray(array) {
//     console.log(array);
//       for (const arrayElement of array) {
//           console.log(arrayElement);
//       }
// }
// printArray(array);


// 2)створити функцію яка заповнює масив рандомними числами та виводить
// його. Для виведення використати попередню функцію.
// !!!const nazar - Результат выполнения функции.
//
// function createArray(length, min, max){
//     let array = [];
//     for (let i = 0; i < length; i++){
//         array.push(Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//     return array;
// }
// const code1 = createArray('10','10','100');
// console.log(code1);


// 3) створити функцію яка приймає три числа та виводить найменьше.
// (Без Math.min!)
//
// function minFromNumber(a, b, c){
//     let min;
//     let max;
//
//     if(a <= b && a <= c) min = a;
//     if(b <= a && b <= c) min = b;
//     if(c <= b && c <= a) min = c;
//
//     console.log('min', min);
//     return min
// }
// const min = minFromNumber(99, 65,  23 );
// console.log(min);


// 4) створити функцію яка приймає три числа та виводить найбільше.
// (Без Math.max!)
// function maxFromNumber(a, b ,c) {
//     let max;
//
//     if(c <= a && b <= a) max = a;
//     if(c <= b && a <= b) max = b;
//     if(b <= c && a <= c) max = c
//     console.log('max', max);
//
//     return max
// }
// const max = maxFromNumber(34, 45, 78);
// console.log('.................');
// console.log(max);


// 5) створити функцію яка повертає найбільше число з масиву
// .......Expresion function......
// const numbBackMax = (array) => {
//     let max = array[0];
//     for (const item of array) {
//         if (max < item) max = item;
//     }
//     return max;
// }
// let number = numbBackMax([2,43,13,54,86,34,677,66,54, 35.5]);
// console.log(number);
//
// <<or this>>
//
// const myFunck = function returnMaxFromArray(array){
//     let  max = array[0];
//     for (const item of array) {
//         if (max < item) max = item;
//     }
//     return max;
// }
// const myFunck1 = myFunck([34,75,53,74, 87,]);
// console.log(myFunck1);


// 6) створити функцію яка повертає найменьше число з масиву
// const myFunck = function returnMaxFromArray(array){
//     let  max = array[0];
//     for (const item of array) {
//         if (max > item) max = item;
//     }
//     return max;
// }
// const myFunck2 = myFunck([34, 75, 53, 74, 87]);
// console.log(myFunck2);


// 7) створити функцію яка приймає масив чисел, сумує
// значення елементів масиву та повертає його.
//
// let sum = (array) => {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }
// const sum1 = sum([2, 56, 78, 89, 67, 77, 89, 13]);
// console.log(sum1);
//
//
// function addElements(array){
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }
// const sum1 = addElements([37,75,53,74,87]);
// console.log('sum1', sum1);


// 8) створити функцію яка приймає масив чисел та повертає
// середнє арифметичне його значень.
// function addElements(array){
//     let average = 0;
//     for (const item of array) {
//         average += item/array.length
//     }
//     return average;
// }
// const average1 = addElements([37,75,53,74,87]);
// console.log('average', average1);


 // 9) Створити функцію яка приймає масив будь яких объектів, та
// повертає масив ключів всіх обєктів. EXAMPLE: [{name: 'Dima',
// age: 13}, {model: 'Camry'}]  ===> [ name, age, model ].
//
// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// const keyObj = (arrayVal) => {
//     array1 = [];
//     for (const item of arrayVal) {
//         if (typeof item === 'object') {
//             for (const key in item) {
//                 array1.push(key);
//             }
//         }
//     }
//     return array1
// }
//
// const newArray1 = keyObj([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(array1);



// 10) Provir she raz You need to check more!!!
// Створити функцію яка приймає масив будь яких объектів,
// та повертає масив значень всіх обєктів. EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// const valuesObj = (arrayObj) => {
//     array1 = [];
//     for (const item of arrayObj) {
//         if (typeof item === 'object'){
//             for (const value in item) {
//                 array1.push(item[value]);
//             }
//         }
//     }
//     return array1;
// }
// let valuesObj1 = valuesObj(users);
// console.log(valuesObj1);
//
// function massiveObj(arrayObj){
//     arr1 = [];
//     for (const item of arrayObj) {
//         if (typeof item === 'object') {
//             for(const value in item) {
//                 arr1.push(item[value]);
//             }
//         }
//     }
//     return arr1;
// }
// let object = massiveObj(users);
// console.log(object);


// 11) створити функцію  яка скаладає значення елементів з однаковими
// індексами  та повертає новий результуючий масив. EXAMPLE: [1,2,3,4]
// [2,3,4,5] результат [3,5,7,9]
//
//
// const splitArr = (arr1, arr2) => {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] + arr2[i]);
//     }
//     return result;
// }
// const splitArray1 = splitArr([1,2,3,4], [2,3,4,5]);
// console.log(splitArray1);


// Rember this For In Vs. For of
// let arr = [3,5,7,9];
// for (const number of arr) {
//     console.log(number);
// }
// }let arr = [3,5,7,9];
// for (const number in arr) {
//     console.log(arr[number]);
// }


// 25. Question??? I dont know!!! створити функцію яка приймає
// будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
// function number(){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if(element > max) max = element;
//         if(element < min) min = element;
//     }
//     console.log(max);
//     return min;
// }
// let result = number(2,5,6,7,8);
// console.log(result);


/// !!!26.Didnt made it  Check???Взяти задачі з завдання 10 та 9 та обєднати
// їх в одну динамічну функцію. Що б я міг сам вибрати повернути
// мені масив ключів чи масив значень.
// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function resultBack(keys, Values) {
//     let arrayObj = [];
//     let arrayVal = [];
//     for (const item of arrayObj) {
//         if (typeof item === 'object') {
//             if (item === keys)
//                 for (const key in item) {
//                   arrayObj.push(key)
//                 } if (item === Values) {
//                     for (const values in item) {
//                         arrayVal.push(item[values]);
//                     }
//             }
//         }
//     }
//      return arrayObj
//      return arraVal
// }
// let number = resultBack('0', 'users');
// console.log(number);

// function resultBack(arrayObj){
//     let array1 = [];
//     let array2 = [];
//     for (const item of arrayObj) {
//         if (typeof item === 'object'){
//              for(const key in item) {
//                  array1.push(key);
//              }
//              for(const value in item) {
//                  array2.push(item[value]);
//              }
//         }
//     }
//      return array1
//      return array2
// }
// let number = resultBack(users)
// console.log(number);


//  // 28. Question. What the fuck they want to from that function!!!???
// Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let array1 = [9,8,0,4];
//
// function changeElement(arr, index){
//     let array = [...arr];
//     if (index < array.length -1){
//         let temp = array[index];
//         array[index] = array[index+1];
//         array[index+1] = temp;
//     }
//     return array;
// }
// const changeElement1 = changeElement(array1, 0);
// console.log(array1);
// console.log(changeElement1);


// 34. Сворити функцію яка буде переносити елементи з значенням
// 0 у кінець маисву. Зберігаючи при цьому порядок не нульових
// значень.   Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// concat - method for combining two arrays in one!
// function myFunck(array){
//     let zero = [];
//     let number = [];
//     for (const item of array) {
//         if(item === 0) {
//             zero.push(0);
//         } else {
//             number.push(item);
//         }
//     }
//     return number.concat(zero);
// }
// myFunck([1,0,6,0,3]);
// console.log(myFunck([1,0,6,0,3]));
// console.log(myFunck([0,1,2,3,4]));
// console.log(myFunck([0,0,1,0]));


// 41. Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує
// його в наступнйи вигляд.
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// var orig = '   Harry    Potter   ';
// var orig2 = 'Harry Potter';
// console.log(orig);
// console.log(orig2);
// console.log(orig.trim());


// let n = '  Harry    Potter   ';
// const trimming = (str) => {
//     let arr = [];
//     for (const item of str.split(' ')) {
//         if (item !== '') {
//             arr.push(item);
//         }
//     }
//     return arr.join(' ')
// };
// let s = trimming(n);
// let newS = s.replace(' ','-');
// console.log(newS);


// ...................Back to previous!!!..................................
// Створити функцію яка :
// 56 Додає в боді блок з текстом "Hello owu"
// function addBlock(){
//     const block = document.createElement(tag);
//
// }


// 56 Додає в боді блок з текстом "Hello owu"
//
// function addDiv(message, typeTag){
//     const tag = document.createElement(typeTag);
//     tag.innerHTML = message || 'Hello World';
//     document.body.appendChild(Tag)
// }
// let a = addDiv('HOHOHOHO', 'div');


// <<<<<<<<<<<<<<<<<<<<<<<<<EXAMPLE>>>>>>>>>
//  let users = [
//      {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//      {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//      {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//      {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//      {name : 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//      ];
// let newArray = [];
// for (const user of users) {
// 	console.log('user', user.name);
// 	for (const value in user.skills) {
// 		newArray.push(user.skills[value]);
// 	}
// }
// console.log(newArray);


 // SOLUTION
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// function returnminprintmax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const Element of arguments) {
//         if (Element > max) max = Element;
//         if (Element < min) min = Element;
//     }
//     console.log(max);
//     return min;
// }
//
// let result = returnminprintmax(4, 6, 1, 2, 9, 6);
// console.log(result);


// const users = [
//     {
//         name: 'Vasya',
//         age: 23,
//     },
//     {
//         car: {
//          name: 'toyota'
//         }
//     }
// ];


// function countFields(arrayObj) {
//     arr1 = [];
//     for (const item of arrayObj) {
//         if (typeof item === 'object') {
//             for (const key in item) {
//                 arr1.push(key);
//             }
//         }
//     }
//     return arr1;
// }
//
// let number = countFields(users);
// console.log(number);


// function countFields(arrayObj) {
//     arr1 = [];
//     for (const item of arrayObj) {
//         if (typeof item === 'object') {
//             for (const value in item) {
//                 arr1.push(item[temp][value]);
//             }
//         }
//     }
//     return arr1;
// }
// let number = countFields(users);
// console.log(number);


// let array = [1,2,3,4];
//
// function changeElement(arr,index) {
//     let array1 = [...arr];
//     if (index<array.length-1){
//         let temp = array1[index];
//         array1[index] = array1[index+1];
//         array1[index+1] = temp;
//     }
//      return array1;
// }
// let changeElement1 = changeElement(array,2);
// console.log(array);
// console.log(changeElement1);


const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];


//  57. Додає в боді елемент з текстом . Тип елементу та текст отримати
//  через аргументи приймає масив автомобілів (можна взяти з попередніх
//  дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//
// function addlistUsers(arrayUsers, idTag) {
//     let block = document.getElementById(idTag);
//     let ul = document.createElement('ul');
//     for (let i = 0; i < arrayUsers.length; i++) {
//         const user = arrayUsers[i];
//         let li = document.createElement('li');
//         li.innerHTML = `${i + 1} - ${user.name} - ${user.username}`;
//         ul.appendChild(li);
//     }
//     block.appendChild(ul);
// }
//
// addlistUsers(users, 'list');


// 59. Для кожного автомобіля створити свій блок, та додати його в елемент,
// індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор
// елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент,
// індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
//
function addlistUsers(arrayUsers,idTag) {
    let block = document.getElementById(idTag);
        for (let i = 0; i < arrayUsers.length; i++) {
        const user = arrayUsers[i];
        let div = document.createElement('div');
        let name = document.createElement('h2');
        let email = document.createElement('h3');
        let address = document.createElement('div');

            for (const value in user.address) {
               if (typeof user.address[value] === "string"){
                   const h4 = document.createElement('h4');
                   h4.innerText = user.address[value];for (const h4Key in h4) {
                   }
                   address.appendChild(h4);
               }
            }
                name.innerHTML = `name : ${user.name}`;
                email.innerHTML = `email : ${user.email}`;

                div.appendChild(name);
                div.appendChild(email);
                div.appendChild(address);
                block.appendChild(div);
        }
}
addlistUsers(users,'list');




















