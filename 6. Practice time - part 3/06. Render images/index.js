// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const containerImg = document.getElementById("container")

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const func = () =>{
    let imgDom = ""
    imgs.forEach(ele=>{
        imgDom += `<img class="team-img" src=${ele}></img>`
    })
    containerImg.innerHTML = imgDom
}

func()
