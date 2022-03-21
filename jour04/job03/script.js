window.addEventListener("DOMContentLoaded" ,(event) => {

  let pkmnID = getElementById("id");
  let pkmnNom = getElementById("nom");
  let pkmnSelect = getElementById("select");
  let pkmnFilter = getElementById("filter");

  input.addEventListener("filter",function(){

    fetch("pokemon.json", {
        method: "post",

    })
      
  });

  

});
