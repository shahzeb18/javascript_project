let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    myLeads.forEach(ele=>{
        const e = ele + " "
        ulEl.textContent += e
    })
})




