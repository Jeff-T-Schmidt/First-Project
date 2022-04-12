var requestRandomURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
var randomBtn = document.getElementById("btn-random")

function fetchRandom() {
fetch(requestRandomURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (readableData) {
      console.log(readableData)
     
      var cocktailName = document.getElementById("drinkName");
      cocktailName.textContent = readableData.drinks[0].strDrink;
      
      var cocktailmeasure1 = readableData.drinks[0].strMeasure1
      var cocktailINgredients1 = readableData.drinks[0].strIngredient1;
      document.getElementById("drinkIngredients1").textContent =
        "Ingredients: " + cocktailINgredients1 + " " + cocktailmeasure1;

        var cocktailmeasure2 = readableData.drinks[0].strMeasure2
        var cocktailINgredients2 = readableData.drinks[0].strIngredient2;
      document.getElementById("drinkIngredients2").textContent = cocktailINgredients2 + " " + cocktailmeasure2;

      var cocktailmeasure3 = readableData.drinks[0].strMeasure3
      var cocktailINgredients3 = readableData.drinks[0].strIngredient3;
    document.getElementById("drinkIngredients3").textContent = cocktailINgredients3 + " " + cocktailmeasure3;

    var cocktailmeasure4 = readableData.drinks[0].strMeasure4
      var cocktailINgredients4 = readableData.drinks[0].strIngredient4;
    document.getElementById("drinkIngredients4").textContent = cocktailINgredients4 + " " + cocktailmeasure4;

      var cocktailInstructions = document.getElementById("drinkInstructions");
      cocktailInstructions.textContent = readableData.drinks[0].strInstructions;

    })
};
fetchRandom();

randomBtn.addEventListener('click', fetchRandom)