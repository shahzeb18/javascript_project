let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    myLeads.forEach(ele=>{
        console.log(ele);
    })
})


// Log out the items in the myLeads array using a for loop 

