// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

const hEl = document.getElementById("h2-el")

const myItems = ""

localStorage.setItem("myItems",hEl.innerHTML)
const fetch = localStorage.getItem("myItems")
console.log(fetch);