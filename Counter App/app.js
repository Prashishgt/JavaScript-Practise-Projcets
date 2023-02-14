// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
    btn.addEventListener("click", (e) =>{
        const style = e.currentTarget.classList;
        console.log(style);

        if (style.contains("decrease")){
            count--;
        }
        else if(style.contains("increase")){
            count ++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
    })
})