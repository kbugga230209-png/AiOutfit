const button = document.querySelector("button")
const result = document.querySelector(".result")

button.addEventListener("click", function(){

result.innerHTML = `
<h2>Recommended Outfit</h2>

<p>
Oversized Hoodie<br>
Black Cargo Pants<br>
White Sneakers
</p>
`

})

