
var img=["dice1.png", "dice2.png", "dice3.png","dice4.png","dice5.png","dice6.png"];

var n=Math.floor(Math.random()*6);

document.querySelector(".play1").setAttribute("src",img[n]);

var img1=["dice1.png", "dice2.png", "dice3.png","dice4.png","dice5.png","dice6.png"];

var n1=Math.floor(Math.random()*6);

document.querySelector(".play2").setAttribute("src",img1[n1]);

if(n>n1){
    document.querySelector("h1").innerHTML="🚩player 1 Wins!";
  } else if(n1>n)
    {
       document.querySelector("h1").innerHTML="player 2 Wins!🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw!!";
    }
