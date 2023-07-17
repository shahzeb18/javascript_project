// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
const firstCard = 21
const secondCard = 9

sum = firstCard+secondCard

if(sum<21){
    console.log("You can hit.")
}
else if(sum===21){
    console.log("Blackjack!")
}
else if(sum>21){
    console.log(`Bust! You have ${firstCard + "+" + secondCard}`)
}