let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const domBtn = document.getElementById("dom-btn")
const hr = document.getElementById("h2r")

domBtn.addEventListener("click",function(){
    console.log(data[0].score);
    hr.textContent = data[0].score 
})