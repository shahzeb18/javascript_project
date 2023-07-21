// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

const boxStore = document.querySelector("#box")

boxStore.addEventListener("click",function(){
    console.log("I want to open the box!");
})