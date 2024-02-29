var randomNumber1=Math.floor((Math.random())*6)+1;
var randomImage="dice"+randomNumber1+".png";
var concatImage="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",concatImage);


var randomNumber2=Math.floor((Math.random())*6)+1;
var randomImage23="dice"+randomNumber2+".png";
var concatImage23="images/"+randomImage23;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",concatImage23);

var heading=document.querySelector("#useless");
if(randomNumber1 > randomNumber2)
{
heading.innerText="Player1 wins";
}
else if(randomNumber2 > randomNumber1)
{
heading.innerText="Player2 wins";
}
else{
heading.innerText="its a draw";
}
