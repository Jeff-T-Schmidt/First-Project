//show dropdown
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
//define variables
// var ingredientList = document.getElementById("ingredientList");
var ingredientBtn = document.getElementById("btn-ingredient");
var cocktailsEl = document.getElementById("cocktails");
var ingredientCard = document.getElementById("cardIngredients");
var cocktailListCardEl = document.getElementById("cocktailListCard");
var returnBtn = document.getElementById("btn-return");
var chooseCocktailEl = document.getElementById("chooseCocktail");
var returnAgain = document.getElementById("btn-returnList");


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
    // var edgeCase = drinkInput.options[drinkInput.selectedIndex].value;
    console.log(value);


    var ingredientsUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + value;

    if (value !== "Choose your alcohol") {
        fetch(ingredientsUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                for (var i = 0; i < 5; i++) {
                    var listItem = document.createElement("li");
                    listItem.textContent = data.drinks[i].strDrink;
                    console.log(listItem);
                    console.log(cocktailsEl);
                    cocktailsEl.appendChild(listItem);
                }
            })
        ingredientCard.setAttribute("class", "hide");
        cocktailListCardEl.removeAttribute("class", "hide");
        returnBtn.addEventListener("click", hide);
    } else {
        alert("Please choose an alcohol.");
    }
}

cocktailsEl.addEventListener("click", function (event) {
    console.log(event.target);
    cocktailListCardEl.setAttribute("class", "hide");
    chooseCocktailEl.removeAttribute("class", "hide");

    var cocktailName = event.target.textContent.split(" ").join("_");
    console.log(cocktailName);
    var recipeUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName;

    fetch(recipeUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (readableData2) {
            console.log(readableData2);

            var drinkName1 = document.getElementById("drinkName2");
            drinkName1.innerHTML = readableData2.drinks[0].strDrink;

            var count = 0;
            for (var i = 1; i <= 15; i++) {
                var fieldName1 = "strIngredient" + i;
                var ingredient1 = readableData2.drinks[0][fieldName1];
                if (ingredient1 === null) break;

                count++;
            }
            for (var i = 1; i <= count; i++) {
                var fieldName1 = "strIngredient" + i;
                var ingredient1 = readableData2.drinks[0][fieldName1];
                var fieldName3 = "strMeasure" + i;
                var measure1 = readableData2.drinks[0][fieldName3];
                var ingredient1 = readableData2.drinks[0][fieldName1];
                if (measure1 === null) break;
                document.getElementById("cocktailIngredients" + i).textContent = ingredient1 + " " + measure1;
                var cocktailInstructions = document.getElementById("cocktailInstructions");
                cocktailInstructions.textContent = readableData2.drinks[0].strInstructions;
            }
        })
})

returnAgain.addEventListener("click", hideAgain);

function hide() {
    ingredientCard.removeAttribute("class", "hide");
    cocktailListCardEl.setAttribute("class", "hide");
}

function hideAgain() {
    chooseCocktailEl.setAttribute("class", "hide");
    cocktailListCardEl.removeAttribute("class", "hide");
}

ingredientBtn.addEventListener("click", getIngredients);

function choiceClicked(event) {
    var clickedEl =
        document.getElementById('buttons')
            .addEventListener('click', event => { // Step 2
                if (event.target.className === 'buttonClass') { // Step 3
                    console.log('Click!');
                }
            });
}

//click event listener to recipe options
    //function to find recipe
    //call function
    //use event to figure out which one they clicked
    //use title of recipe to do secondary fetch request to find recipe details
    //fetch recipe api

