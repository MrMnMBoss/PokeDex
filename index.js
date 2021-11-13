let url = "https://pokeapi.co/api/v2/pokemon/"

function process() {
let userInput = $("#userInput").val();
$.get(url+userInput,processPokemon);

}


function processPokemon(pokemon){
 $("#title").html(pokemon.name)
 $("#image").attr("src", pokemon.sprites.front_default)
 $("#image1").attr("src", pokemon.sprites.front_shiny)
 $("#image1").attr("width", "30%")
 $("#userInput").css("font-size", "30px",)
 $("#userInput").css("font-family", "Pokemon Solid",)
}













