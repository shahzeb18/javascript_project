const num1 = parseInt(document.getElementById("num1-el").value)
const num2 = parseInt(document.getElementById("num2-el").value)
const sum = document.getElementById("sum-el")

const add = () =>{
    const result = num1+num2
    sum.textContent = "Result "+result
}
const sub = () =>{
    const result = num1-num2
    sum.textContent = "Result "+result
}
const div = () =>{
    const result = num1/num2
    sum.textContent = "Result "+result
}
const mul = () =>{
    const result = num1*num2
    sum.textContent = "Result "+result
}