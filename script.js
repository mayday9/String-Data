var str = prompt("Введите адрес электронной почты: ");

str = str.trim();

var check = str.indexOf("@");
var last = str.length - 1;

if(check != 0 && check  != last) {
    console.log("good")
}   else {console.log("fuck")}

check2 = str.indexOf("@", check+1);
if(check2 == -1) {
    console.log("good2")
} else {console.log("fuck2")}

var str2 = str[check + 1];
for (i = check + 2; i < str.length; i++){
    str2 = str2 + str[i];
}

var check3 = str2.indexOf(".");

if (str2.length >= 4 && check3 != 0 && check3 != (str2.length-1) && check3 != -1) {
   console.log("Все отлично");
} else {console.log("Что то не верно в третьем пункте проверки")}


console.log(check);
console.log(check2);
console.log(str2);
console.log(check3);
