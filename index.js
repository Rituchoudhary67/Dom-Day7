
const btn = document.querySelector(".btn");
const displayHeading = document.querySelector(".heading");

function colorChange(ele) {
    ele.target.style.backgroundColor = "blue"; 
    ele.target.style.color = "white";
}

btn.addEventListener("click",colorChange);
btn.addEventListener('click',function(){
    displayHeading.hidden = !displayHeading.hidden;
});

