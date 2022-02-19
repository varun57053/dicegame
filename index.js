
var randomnumber1 = Math.floor (Math.random()*6)+1;
var randomdice = "dice" + randomnumber1 +".png";
var randomSourceimage = "images/" + randomdice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSourceimage);



var randomnumber2 = Math.floor (Math.random()*6)+1;
var randomdice = "dice" + randomnumber2 +".png";
var randomSourceimage = "images/" + randomdice;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSourceimage);
 

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML =" player1 wins⛳⛳";

}
else if(randomnumber1 === randomnumber2)
{
document.querySelector("h1").innerHTML =" Draw😥😥";
}
else{
    document.querySelector("h1").innerHTML =" player2 wins🎲👑";
}