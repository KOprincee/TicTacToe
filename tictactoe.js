var b = [false,false,false,false,false,false,false,false,false];
var option = "";
/**function brain() {
    if (b[0] == true && b[4] ==true & b[8] == true){
        document.write('Winner!');
    }
}**/

function myButton1() {
    option = "url(X.png)";
    var btnx = document.getElementById('x');
    var btno = document.getElementById('o');
    btnx.disabled = true;
    btno.disabled = true;
}

function myButton2() {
    option = "url(O.png)";
    var btnx = document.getElementById('x');
    var btno = document.getElementById('o');
    btnx.disabled = true;
    btno.disabled = true;
}

function changImg1() {
    document.getElementById("block1").style.backgroundImage = option;
    b[0] = true;
}

function changImg2() {
    document.getElementById("block2").style.backgroundImage = option;
    b[1] = true;
}

function changImg3() {
    document.getElementById("block3").style.backgroundImage = option;
    b[2] = true;
}

function changImg4() {
    document.getElementById("block4").style.backgroundImage = option;
    b[3] = true;
}

function changImg5() {
    document.getElementById("block5").style.backgroundImage = option;
    b[4] = true;
}

function changImg6() {
    document.getElementById("block6").style.backgroundImage = option;
    b[5] = true;
}

function changImg7() {
    document.getElementById("block7").style.backgroundImage = option;
    b[6] = true;
}

function changImg8() {
    document.getElementById("block8").style.backgroundImage = option;
    b[7] = true;
}

function changImg9() {
    document.getElementById("block9").style.backgroundImage = option;
    b[8] = true;
}