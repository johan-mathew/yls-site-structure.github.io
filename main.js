var c = document.getElementById("objects").childElementCount;
console.log(c);
var count=1;
function carouselShiftLeft(){
    document.querySelector("#object-"+count).classList.add("fadeout");
    document.querySelector("#object-"+count).classList.remove("fadein");
    if(count==1)
    count=c;
    else
    count--;
    document.querySelector("#object-"+count).classList.add("fadein");
    document.querySelector("#object-"+count).classList.remove("fadeout");
    console.log(count);
}
function carouselShiftRight(){
    document.querySelector("#object-"+count).classList.add("fadeout");
    document.querySelector("#object-"+count).classList.remove("fadein");
    if(count==c)
    count=1;
    else
    count++;
    document.querySelector("#object-"+count).classList.add("fadein");
    document.querySelector("#object-"+count).classList.remove("fadeout");
    console.log(count);
}