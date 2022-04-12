document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

var ingredientList = document.getElementById("ingredientList");
var ingredientBtn = document.getElementById("btn-ingredient");

function getIngredients() {
    var ingredientsUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + userIngredient;
    var userIngredient = "";

    fetch(ingredientsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            console.log(data.strDrink);
            for (var i =0; i < data.drinks.length; i++) {
                var listItem = document.createElement("li");
                listItem.textContent = data.drinks[i].strDrink;
                ingredientList.appendChild(listItem);
            }
        })
}

ingredientBtn.addEventListener('click', getIngredients);

//second button
// var secondIngredientScreenEl = document.getElementById("secondIngredientScreen");
// secondIngredientScreenEl.setAttribute("class", "hide");