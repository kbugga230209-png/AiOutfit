function generateOutfit(){

const height = document.getElementById("height").value
const weight = document.getElementById("weight").value
const style = document.getElementById("style").value
const budget = document.getElementById("budget").value

const resultBox = document.getElementById("result")
const outfitText = document.getElementById("outfitText")

let outfit = ""

if(style === "Streetwear"){

outfit = `
Oversized Hoodie  
Black Cargo Pants  
Nike Air Force Sneakers
`

}

else if(style === "Minimal"){

outfit = `
White T-Shirt  
Slim Fit Jeans  
White Sneakers
`

}

else if(style === "Formal"){

outfit = `
Tailored Blazer  
Dress Shirt  
Slim Trousers  
Oxford Shoes
`

}

else if(style === "Gym"){

outfit = `
Compression T-Shirt  
Athletic Shorts  
Running Shoes
`

}

outfitText.innerText = outfit

resultBox.classList.add("show")

}
