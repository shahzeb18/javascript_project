let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function appShelf() {
    fruit.forEach(ele => {
        if (ele === "🍎") {
            appleShelf.textContent += ele
        }
        else if (ele === "🍊") {
            orangeShelf.textContent += ele;
        }
    })
}

appShelf()