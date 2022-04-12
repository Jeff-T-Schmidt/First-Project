//var liquorChoice = document.getElementById()
var footerBtn = document.getElementById("btn-funfact")
var randomFooter = document.getElementById("randomJoke")






// var apiKey = ""


// function getApi() {
    
//     var requestUrl = '';
  
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })

function randomJoke(){
   fetch("https://api.chucknorris.io/jokes/random")
.then(response => response.json())
.then(data=> {
    console.log(data.value)
    randomFooter.innerHTML = data.value


}) 
}

footerBtn.addEventListener("click",randomJoke) 
