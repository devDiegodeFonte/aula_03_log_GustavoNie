function  somamedia(){
    var idade01 = parseInt(document.querySelector("#c1").value);//Dessa maneira poderemos converter o text em number
    var idade02 = parseInt(document.querySelector("#c2").value);

    var soma = idade01 + idade02;
    var media = soma/2

    console.log("A idade da primeira cirança foi "+ idade01);
    console.log("A idade da primeira cirança foi "+ idade02);
    console.log("A média das idades foi "+ media)
    console.log("A soma foi: "+ soma);

    }