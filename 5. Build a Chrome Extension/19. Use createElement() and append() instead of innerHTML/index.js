let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    myLeads.forEach(ele=>{
        ulEl.innerHTML += "<li>"+ele+"</li>"
        // const li = document.createElement("li")
        // li.textContent = ele
        // ulEl.append(li)
    })
})

// Let's try a different method!




