var userDate = prompt("Введите дату в формате YYYY MM DD:");

userDate = Date.parse(userDate);

var currentDate = Date.now();

// var now = new Date();
//
// console.log(userDate);
// console.log(currentDate);
// console.log(now);

var differenceBetween = (((currentDate - userDate)/1000)/60);

alert("Разница между введенной и текущей датой составляет: " + differenceBetween + " минут.");