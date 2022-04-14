var requestRandomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var randomBtn = document.getElementById("btn-random");
// Random cocktail card 

function fetchRandom() {
  fetch(requestRandomURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (readableData) {
      console.log(readableData);

      var cocktailName = document.getElementById("drinkName");
      cocktailName.textContent = readableData.drinks[0].strDrink;

      var count = 0;
      for (var i = 1; i <= 15; i++) {
        var fieldName = "strIngredient" + i;
        var ingredient = readableData.drinks[0][fieldName];
        if (ingredient === null) break;
        
        count++;
      }
      for (var i = 1; i <= count; i++) {
        console.log(count);
        var fieldName = "strIngredient" + i;
        var ingredient = readableData.drinks[0][fieldName];
        var fieldName2 = "strMeasure" + i;
        var measure = readableData.drinks[0][fieldName2];
        var ingredient = readableData.drinks[0][fieldName];
        if (measure === null) break;
        document.getElementById("drinkIngredients" + i).textContent =
          ingredient + " " + measure;
      }
     
      var cocktailInstructions = document.getElementById("drinkInstructions");
      cocktailInstructions.textContent = readableData.drinks[0].strInstructions;
    });
}
fetchRandom();

randomBtn.addEventListener("click", fetchRandom);
