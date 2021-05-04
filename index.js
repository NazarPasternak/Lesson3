// function writer() {
//     document.write('Hello from Feb-2021 ${function');
//     document.write('<br>');
// }
// writer('Happy new Year');
// writer();
// writer();
// writer();
// writer();
// writer();



// .........................Functions..................................
// function holidays(country = 'Ukraine', city = 'Kyiv') {
// document.write(`Hooray we flight to ${country} at ${city}`);
// document.write('<br>')
// }
//
// holidays('Turkey', 'Marmaris');
// holidays('Egypt', 'Kair');
// holidays('Bangladesh', 'Dakha');
// holiday();

// let bank = 1000;
// function changeMoney(sum, spotRate = 28){
//     let dollars = sum / spotRate;
//     console.log(`You bought ${dollars}$`);
//
//     return dollars ;
// }
//
// let money = changeMoney(20000, 27.9);
// console.log(money);
// bank += money;
// console.log(bank);
//
// let money2 = changeMoney(30000);
// bank += money2;
// console.log(bank);

// 45:00...........Arguments....................
//........Function sumator add all elements!
// function sumator(a,b,c,d,e,f,g,h,i,g,k,l,m, ){
//     console.log(arguments);
//
// function sumator (){
//     let sum = 0;
//
//     for (const argument of arguments) {
//         sum += argument;
//         console.log(sum);
//     }
//     console.log(arguments);
// }


// // console.log(sum); this place is wrong
//
//
// sumator(2, 2);
// sumator(1, 9, 23, 45, 26, 36, 37, 49);
// sumator(1,73, 57, 79, 86, 85, 90, 107, 145, 189);


// 53:00 ...........Declaration..................
// hoisting  the moment when we see declar, instead exps
// is not see
// declar();
// exps();

// function declar(){
//     console.log(22);
// }
// //
// ................Expression................
// let exps = function(){
//     console.log(33);
// }


// 1:02:00
//................ Arrow - {=>} - functions...................
// !Only functions support arrow function
// let variable = () => {} REMEBER THIS
// let newVar = () => {};

// function exch(money){
//     return money;
// }
//
// let exch = (money, kurs)


// let arrow = () => {
//     // console.log(arguments);
//     console.log(33);
// }
// arrow();
// EX.
// let exchange = (money, spotRate) =>{
//     return money/spotRate
// }
// let exchange1 = exchange(20000, 27.8);
// console.log(exchange1);


// !!!BUT YOU CAN ACTUALLY DO LIKE THAT TOO!!!

// EX.
// let exchange = (money, spotRate) => money/spotRate
// let exchange1 = exchange(20000, 27.8);
// console.log(exchange1);

// OR
// EX.
// let exchange = money => money *2;
// let exchange1 = exchange(20000);
// console.log(exchange1);


// .........Self-invoke function..........
// some yeres)
// (() => {
//     console.log('SELF')
// })();


// 1:14:00..................STRINGS.................
// ..........str.replace.......
// let str = 'HELLO world I am a developer of JS';
// let s = str.replace('o', 'x')
// let sAll = str.replaceAll('o', 'x')
// console.log(s);
// console.log(sAll);


// po ASCII table remember that.....


// ............str.slice
// let str = 'HELLO world I am a developer of JS';
// let str = '123456789';
// let s = s (1, 3);
// console.log(s);


// ..............split...........
// let str = 'HELLO world I am a developer of JS';
// let strings = str.split('');
// console.log(strings);
//
//
// Result:
// // ["HELLO worl", " I am a ", "eveloper of JS"]
// if split('');
// result: (34) ["H", "E", "L", "L", "O", " ", "w", "o",
// "r", "l", "d", " ", "I", " ", "a", "m", " ", "a", " ",
// "d", "e", "v", "e", "l", "o", "p", "e", "r", " ", "o",
// "f", " ", "J", "S"]



// ................join...................
//it gives ; between words!!!
//only for massive!!!
//
// let newVar = ['Hello', 22, 'Feb', false, 'alt','FEB'];
// let s = newVar.join(';');
// console.log(s);
// Result:
// Hello;22;Feb;false;alt;FEB


// ...................trim.......................
// when you have backspaces!
//
// let email1= 'Victor.fsz@gmail.com'
// let email2= '    victor.fsz@gmail.com        '
//
// console.log(email1 === email2);
// email1 = email1.toLowerCase();
// email2 = email2.toLowerCase();
// email1 = email1.toUpperCase();
// email2 = email2.toUpperCase();
//
// console.log(email1);
// console.log(email2);


// let email1= 'Victor.fsz@gmail.com'
// let email2= 'victor.fsz@gmail.com      '
// email1 = email1.trim;
// email2 = email2.trim;
// console.log(email1 === email2);
// console.log(email2);


// .................includes('').............
// helps to check doesnt something is correct!!!
//
//
// let email1= 'Victor.fsz@gmail.com'
// let email2= 'victor.fsz@gmail.com        '
//
// let b = email1.includes('@gmail');
// console.log(b);


// ....................startsWith........................
// let number = '+19177057410'
// let checkStart = number.startsWith('+1')
// let checkEnds = number.endsWith('+1')
// console.log(checkStart);
// console.log(checkEnds);
//
// if (!startsWith) {
//     number = `+1${number}`
// }
//
// console.log(number);



// // function writer() {
// //   document.write('Hello from FEB-2021');
// //   document.write('<br>');
// // }
// //
// // writer();
// // writer();
// // writer();
// // writer();
// // writer();
// // writer();
// // writer();
//
//
// function holidays(country = 'Ukraine', city) {
//   document.write(`Hooray we flight to ${country} at ${city}`);
//   document.write('<br>')
// }
//
//
// holidays('Turkey', 'Marmaris');
// holidays('Egypt', 'Kair');
// holidays('Bangladesh', 'Dakha');
// holidays();
//
//
// // {
// //   let a = 99;
// //
// //   console.log('_________________');
// //   console.log(a);
// //   console.log('_________________');
// // }
// //
// // console.log(a);
//
// // let bank = 999;
// //
// // function changeMoney(sum, currentExchange = 28) {
// //   let dollars = sum / currentExchange;
// //   console.log(`Ми купили ${dollars}$`);
// //
// //   return dollars;
// // }
// //
// // let money = changeMoney(20000, 27,9);
// // money = money - 500;
// //
// // bank += money;
// //
// // console.log(bank);
// //
// // let payDay = changeMoney(25000);
// // bank += payDay;
// //
// // console.log(bank);
//
//
// // function sumator() {
// //   let sum = 0;
// //
// //   for (const argument of arguments) {
// //     sum += argument;
// //   }
// //
// //   console.log(arguments);
// // }
// //
// // sumator(2, 2, {name: 'Dimas'});
// // sumator(1, 9, 8, 73, 0, [1,5,67,78]);
// // sumator(1, 9, 8, 73, 0, 7, 37, 83, 38, 3, 3, 3, 30, 'XXX');
//
//
// declar()
// // exps()
//
// // DECLARATION
// function declar() {
//   console.log(22);
// }
//
// // EXPRESSION
// // let exps = function () {
// //   console.log(33);
// // }
//
// // ARROW FUNCTION
//
// let arrow = () => {
//   // console.log(arguments);
//   console.log(33);
// }
//
//
// arrow();
//
// function exch(monye) {
//   return monye * 2
// }
// //
// // let excgange = (money, kurs) => {
// //   return money / kurs;
// // }
//
// let excgange = (money, kurs) => money / kurs;
//
// let excgange1 = excgange(20000, 28);
//
// console.log(excgange1);
//
//
// // (() => {
// //   console.log('SELF');
// // })()
// //
// // (function() {
// //   console.log('DECLS');
// // })()
//
//


// STRINGS
// let str = '      Hello            world I am developer of JS       ';
//
// // let s = str.trim();
// let s = str.replaceAll(' ', '');
//
// console.log(s);

// console.log(str.length);
// console.log(str[8]);

//
// let s = str.replace('o', 'X');
// let sAll = str.replaceAll('op', '.....');
//
// console.log(s);
// console.log(sAll);
//
// let s = str.slice(1, 3);
// let s = str.slice(str.length - 2, str.length);
// console.log(s);
//
// let strings = str.split('o');
// let strings = str.split(' ');
//
// console.log(strings);

// let newVar = ['Hello', 22, false, 'FEB', 'XXX'];
// let s = newVar.join(' ');
// console.log(s);

// let email1 = 'Victor.fzs@gmal.com'
// let email2 = 'victor.fzs@gmal.com     '

// email1 = email1.toLowerCase();
// email2 = email2.toLowerCase();
// email1 = email1.toUpperCase();
// email2 = email2.toUpperCase();
//
// console.log(email1);
// console.log(email2);
//
// email1 = email1.trim();
// email2 = email2.trim();
//
// console.log(email1);
// console.log(email2);

// let b = email1.includes('@gmal.com');
// console.log(b);
//
// let number = '786947661'
// let startsWith = number.startsWith('+1');
//
// if (!startsWith) {
//   number = `+1${number}`
// }
//
// console.log(number);
//
// let endsWith = number.endsWith('+1');
// console.log(startsWith);
// console.log(endsWith);

// console.log(email1 === email2);


// function writer() {document.write('Hello from FEB-2021');
// document.write('<br>');
// }
// writer();
// writer();
// writer();
// writer();
// writer();
// writer();
// writerfunction holidays(country = 'Ukraine', city)
// {document.write(`Hooray we flight to ${country} at ${city}`);
// {document.write('<br>')};
//
// holidays('Turkey', 'Marmaris');
// holidays('Egypt', 'Kair');
// holidays('Bangladesh', 'Dakha');
// holidays{
// //   let a = 99;
// //
// //   console.log('_________________');
// //   console.log(a);
// //   console.log('_________________');
// // }
// //
// // console.log(a);
//
// // let bank = 999;
// //
// // function changeMoney(sum, currentExchange = 28) {
// //   let dollars = sum / currentExchange;
// //   console.log(`Ми купили ${dollars}$`);
// //
// //   return dollars;
// // }
// //
// // let money = changeMoney(20000, 27,9);
// // money = money - 500;
// //
// // bank += money;
// //
// // console.log(bank);
//
// let payDay = changeMoney(25000);
// bank += payDay;
//
// console.log(bank);


// function sumator() {
//   let sum = 0;
//
//   for (const argument of arguments) {
//     sum += argument;
//   }
//
//   console.log(arguments);
// }
//
// sumator(2, 2, {name: 'Dimas'});
// sumator(1, 9, 8, 73, 0, [1,5,67,78]);
// sumator(1, 9, 8, 73, 0, 7, 37, 83, 38, 3, 3, 3, 30, 'XXX');
//
//
// declar()
// // exps()
//
// // DECLARATION
// function declar() {
//   console.log(22);
// }
//
// // EXPRESSION
// // let exps = function () {
// //   console.log(33);
// // }
//
// // ARROW FUNCTION
//
// let arrow = () => {
//   // console.log(arguments);
//   console.log(33);
// }
//
//
// arrow();
//
// function exch(monye) {
//   return monye * 2
// }
// //
// // let excgange = (money, kurs) => {
// //   return money / kurs;
// // }
//
// let excgange = (money, kurs) => money / kurs;
//
// let excgange1 = excgange(20000, 28);
//
// console.log(excgange1);
//
//
// // (() => {
// //   console.log('SELF');
// // })()
// //
// // (function() {
// //   console.log('DECLS');
// // })()
//
//


// STRINGS
// let str = '      Hello            world I am developer of JS       ';
//
// let s = str.trim();
// let s = str.replaceAll(' ', '');
//
// console.log(s);

// console.log(str.length);
// console.log(str[8]);

//
// let s = str.replace('o', 'X');
// let sAll = str.replaceAll('op', '.....');
//
// console.log(s);
// console.log(sAll);
//
// let s = str.slice(1, 3);
// let s = str.slice(str.length - 2, str.length);
// console.log(s);
//
// let strings = str.split('o');
// let strings = str.split(' ');
//
// console.log(strings);

// let newVar = ['Hello', 22, false, 'FEB', 'XXX'];
// let s = newVar.join(' ');
// console.log(s);

// let email1 = 'Victor.fzs@gmal.com'
// let email2 = 'victor.fzs@gmal.com     '

// email1 = email1.toLowerCase();
// email2 = email2.toLowerCase();
// email1 = email1.toUpperCase();
// email2 = email2.toUpperCase();
//
// console.log(email1);
// console.log(email2);
//
// email1 = email1.trim();
// email2 = email2.trim();
//
// console.log(email1);
// console.log(email2);

// let b = email1.includes('@gmal.com');
// console.log(b);

// let number = '786947661'
// let startsWith = number.startsWith('+1');
//
// if (!startsWith) {
//   number = `+1${number}`
// }
//
// console.log(number);

// let endsWith = number.endsWith('+1');
// console.log(startsWith);
// console.log(endsWith);

// console.log(email1 === email2);

