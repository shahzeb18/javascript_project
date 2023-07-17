// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let a=0
const func = ()=>{
    a=a+1
    document.getElementById("count-el").innerText=a;
}

const func1 = ()=>{
    a=a-1
    document.getElementById("count-el").innerText=a;
}

const save = ()=>{
    const b = "Previous entries : " + a +" - "
    document.getElementById("save").innerText = b 
}


