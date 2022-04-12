//show dropdown
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
//define variables
var ingredientList = document.getElementById("ingredientList");
var ingredientBtn = document.getElementById("btn-ingredient");
var cocktailsEl = document.getElementById("cocktails");

//box 1- select dropdown and click search
//event listener for clicks to show box 2
    //remove hide from box 2 
//list top 5 cocktails based on dropdown selection
    //clickable cocktails
        //3rd screen shows chosen cocktail
//go back button

//get random cocktails by alcohol- box 2
function getIngredients() {
    cocktailsEl.innerHTML = "";

    var drinkInput = document.getElementById("cocktailList");
    var value = drinkInput.options[drinkInput.selectedIndex].textContent;
    console.log(value);
    
    var ingredientsUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + value;

    fetch(ingredientsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            for (var i =0; i < 5; i++) {
                var listItem = document.createElement("li");
                listItem.textContent = "-" + data.drinks[i].strDrink;
                console.log(listItem);
                console.log(cocktailsEl);
                cocktailsEl.appendChild(listItem);
            }
        })
}

ingredientBtn.addEventListener("click", getIngredients);

//second button
// var secondIngredientScreenEl = document.getElementById("secondIngredientScreen");
// secondIngredientScreenEl.setAttribute("class", "hide");

//click event listener to recipe options
    //function to find recipe
    //call function
    //use event to figure out which one they clicked
    //use title of recipe to do secondary fetch request to find recipe details
    //fetch recipe api   
