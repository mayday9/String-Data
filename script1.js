var str = prompt("Введите адрес электронной почты: ");

str = str.trim();

var check = str.indexOf("@");
var last = str.length - 1;

if(check != 0 && check  != last && check != -1) {
    document.write("Cимвол \@ не является первым или последним символом, но присутствует в адресе.");

    check2 = str.indexOf("@", check+1);
    if(check2 == -1) {
        document.write("\nCимвол \@ существует только 1.");

        var str2 = str[check + 1];
        for (i = check + 2; i < str.length; i++){
            str2 = str2 + str[i];
        }

        var check3 = str2.indexOf(".");

        if (str2.length >= 4 && check3 != 0 && check3 != (str2.length-1) && check3 != -1) {
            document.write("\nВсе отлично");
        }else {document.write("\nЧто то не верно в третьем пункте проверки")}

    }else {document.write("\rОшибка проверки единичности символа \@")}



}else {document.write("Ошибка, символ \@ является первым и\/или последним символом или отсутствует в адресе.")}




console.log(check);
console.log(check2);
console.log(str2);
console.log(check3);
