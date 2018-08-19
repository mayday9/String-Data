var str = prompt("Введите числа через пробел: ");
str = str.trim();

var arrey = str.split(" ");

var randomNumberIndex = Math.floor(Math.random() * arrey.length);


console.log(arrey.length);
console.log(arrey);
console.log(randomNumberIndex);

alert("Введены следующие числа: " + str + "\n Выбрано случайное число: " + arrey[randomNumberIndex] + " с индексом в массиве: " + randomNumberIndex);
