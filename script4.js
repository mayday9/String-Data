for (i = 0; i < 100; i++){
    var start = performance.now();
    setTimeout(function () {document.write("Do something")}, 1000);
    var finish = performance.now();
    var result = finish - start;

    document.write(result);
}
// }