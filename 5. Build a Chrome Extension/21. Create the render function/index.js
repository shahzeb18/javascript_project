let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    // 2. Call the renderLeads() function
    renderLeads()
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    myLeads.forEach(ele=>{
        listItems += "<li>" + ele + "</li>"
    })
    ulEl.innerHTML = listItems
}

