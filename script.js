//var liquorChoice = document.getElementById()
var footerBtn = document.getElementById("btn-funfact")
var randomFooter = document.getElementById("randomJoke")


function randomJoke(){
   fetch("https://api.chucknorris.io/jokes/random")
.then(response => response.json())
.then(data=> {
    console.log(data.value)
    randomFooter.innerHTML = data.value


}) 
}
randomJoke();
footerBtn.addEventListener("click",randomJoke) 

