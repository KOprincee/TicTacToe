var b = [0,0,0,0,0,0,0,0,0];    //0 - empty; 1 - filled
var player = "";
var choice = "";
var AI = "";
var corner = 0;
var cornerList = [0,2,6,8];
var randomCorner = cornerList[Math.floor(Math.random() * cornerList.length)];
console.log(randomCorner);

function brain() {
    if (choice == "N"){
        if (b[1] == 1 || b[3] == 1 || b[5] == 1 || b[7] == 1){
            //console.log("1st");
            var x = checkCorners() + 1;
            if (x != -1){
                var blockno = "block" + x;
                document.getElementById(blockno).style.backgroundImage = AI;
                b[x-1] = 1;
            }
        }
        else if (b[0] == 1 || b[2] == 1 || b[6] == 1 || b[8] == 1){
            //console.log("2nd");
            var x = checkCorners() + 1;
            if (x != -1){
                var blockno = "block" + x;
                document.getElementById(blockno).style.backgroundImage = AI;
                b[x-1] = 1;
            }
        }
        else if (b[4] == 1){
            //console.log("3rd");
            var x = checkCorners() + 1;
            if (x != -1){
                var blockno = "block" + x;
                document.getElementById(blockno).style.backgroundImage = AI;
                b[x-1] = 1;
            }
        }
    }
}

function checkCorners() {
    corner++;
    console.log(corner);
    if(corner <= 2){
        if (b[0] == 0)
            return 0;
        else if (b[2] == 0)
            return 2;
        else if (b[6] == 0)
            return 6;
        else if (b[8] == 0)
            return 8;
        else 
            return -1;
    }
    else
        return -1;
}

function myButton1() {
    player = "url(X.png)";
    AI = "url(O.png)";
    var btnx = document.getElementById('x');
    var btno = document.getElementById('o');
    btnx.disabled = 1;
    btno.disabled = 1;
}

function myButton2() {
    player = "url(O.png)";
    AI = "url(X.png)";
    var btnx = document.getElementById('x');
    var btno = document.getElementById('o');
    btnx.disabled = 1;
    btno.disabled = 1;
}

function myButton3() {
    choice = "Y";
    var btny = document.getElementById('y');
    var btnn = document.getElementById('n');
    btny.disabled = 1;
    btnn.disabled = 1;
}

function myButton4() {
    choice = "N";
    var btny = document.getElementById('y');
    var btnn = document.getElementById('n');
    btny.disabled = 1;
    btnn.disabled = 1;
    var block = "block" + (randomCorner+1);
    document.getElementById(block).style.backgroundImage = AI;
    b[randomCorner] = 1;
}

function changImg1() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block1").style.backgroundImage = player;
        b[0] = 1;
    }
}

function changImg2() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block2").style.backgroundImage = player;
        b[1] = 1;
    }
}

function changImg3() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block3").style.backgroundImage = player;
        b[2] = 1;
    }
}

function changImg4() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block4").style.backgroundImage = player;
        b[3] = 1;
    }
}

function changImg5() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block5").style.backgroundImage = player;
        b[4] = 1;
    }
}

function changImg6() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block6").style.backgroundImage = player;
        b[5] = 1;
    }
}

function changImg7() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block7").style.backgroundImage = player;
        b[6] = 1;
    }
}

function changImg8() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block8").style.backgroundImage = player;
        b[7] = 1;
    }
}

function changImg9() {
    if(choice == "Y" || choice == "N"){
        document.getElementById("block9").style.backgroundImage = player;
        b[8] = 1;
    }
}