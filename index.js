

let gameFinish=false;
let sayac=0;



const wholeTable = document.getElementById("wholeTable");




const checkFinish = (who) => {

    const box1 = document.getElementById("box1").innerHTML;
    const box2 = document.getElementById("box2").innerHTML;
    const box3 = document.getElementById("box3").innerHTML;

    const box4 = document.getElementById("box4").innerHTML;
    const box5 = document.getElementById("box5").innerHTML;
    const box6 = document.getElementById("box6").innerHTML;

    const box7 = document.getElementById("box7").innerHTML;
    const box8 = document.getElementById("box8").innerHTML;
    const box9 = document.getElementById("box9").innerHTML;

    if(box1=="X" && box2=="X" && box3=="X"
    || box4=="X" && box5=="X" && box6=="X"
    || box7=="X" && box8=="X" && box9=="X"
    
    || box1=="O" && box2=="O" && box3=="O"
    || box4=="O" && box5=="O" && box6=="O"
    || box7=="O" && box8=="O" && box9=="O"
    
    || box1=="O" && box4=="O" && box7=="O"
    || box2=="O" && box5=="O" && box8=="O"
    || box3=="O" && box6=="O" && box9=="O"

    || box1=="X" && box4=="X" && box7=="X"
    || box2=="X" && box5=="X" && box8=="X"
    || box3=="X" && box6=="X" && box9=="X"

    || box1=="O" && box5=="O" && box9=="O"
    || box7=="O" && box5=="O" && box3=="O"

    || box1=="X" && box5=="X" && box9=="X"
    || box7=="X" && box5=="X" && box3=="X")
    {
            gameFinish=true;
            console.log(who)
            document.querySelector(".main").innerHTML = `<h1 class="result">${who}</h1>`;
    }

}


wholeTable.addEventListener('click', (e) => {

switch(sayac){


case 0: 
    let player1Win = "Player 1 Win";
        e.target.innerHTML = "X";
        if(e.target.innerHTML=="X")
        {
            console.log("SIRA GEÇECEK X");
            sayac=1;
            checkFinish(player1Win);
        }

    console.log(sayac);
break;

case 1:

    let player2Win = "Player 2 Win";
        e.target.innerHTML = "O";
        if(e.target.innerHTML=="O")
        {
            console.log("SIRA GEÇECEK O");
            sayac=0;
            checkFinish(player2Win);
        }
               
        console.log(sayac);

        break;
    }

});

