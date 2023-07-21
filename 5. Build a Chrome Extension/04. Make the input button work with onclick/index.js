// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

const buttonEl = document.getElementById("click-btn")

function save(){
    buttonEl.textContent += "Button clicked!"
    console.log("Button clicked!");
}

