let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&



if((new Date().toDateString().indexOf(0) === "Fri" && new Date().toDateString().indexOf(2))==="13"){
    console.log("😱"); // Spooky Face!
}
else{
    console.log(`Today's date ${dayOfMonth}`);
}
