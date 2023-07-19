let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

sentence.forEach((ele)=>{
    greetingEl.textContent = ele
})

for (let index = 0; index < sentence.length; index++) {
    const element = sentence[index]
    greetingEl.textContent += element
}