
// Créez un formulaire permettant de trier ces données. Il doit contenir les
// champs suivant : id (input type text), nom (input type text), type (liste
// déroulante) et filtrer (input type button). Lorsque l’on clique sur “filtrer”, le
// script doit à l’aide de Fetch, récupérer le contenu du fichier et lister les
// éléments répondant aux critères sélectionnés en les affichant sur une page
// HTML.


document.addEventListener('DOMContentLoaded', function loaded(){

  let pkmnID = document.getElementById("id").value;
  let pkmnNom = document.getElementById("name").value;

  let pkmnButton = document.getElementById("filter");
  let filter = document.getElementById('select');

    // let option = filter.querySelector('option');
    // console.log(option)

  
  // let pkmnSelect = document.getElementById("select");
 

    fetch("pokemon.json")
    .then((response) => response.json())
    .then((response) => {
      // console.log(response[1])
      var pokemonType = []
      for(let i = 0; i < response.length; i++)
      {
        // console.log(response[i].type)
        type = response[i].type

        pokemon = type.forEach((type) => {
          // console.log(type)
          pokemonType.push(type)
        });

      };
      // console.log(pokemonType);
      const uniqPkmnType = new Set(pokemonType);
      console.log(uniqPkmnType);

      uniqPkmnType.forEach((pkType) => {
        console.log(pkType)
        const option = document.createElement("option");
        option.innerHTML = pkType
        filter.appendChild(option);
      });

    })
    .catch((error) => console.log(error))  
});

// document.addEventListener('DOMContentLoaded', function loaded() {

//   let button = document.getElementById('filter');

//   let filter = document.getElementById('select');
//   // let option = filter.querySelector('option');
//   // console.log(option)

//   let idValue = document.getElementById('id').value;
//   let nameValue = document.getElementById('name').value;
  
//       fetch('pokemon.json')
//       .then((response) => response.json())
//       .then((response) => {
//           // console.log(response[1])
//           var pokemonType = []
//           for(let i = 0; i < response.length; i++)
//           { 
//               // console.log(response[i].type)
//               type = response[i].type
              
//               pokemon = type.forEach((type) => {
//                   // console.log(type)    
//                   pokemonType.push(type)
//               });
//           }
//           // console.log(pokemonType)
//           const uniqPokemonType = new Set(pokemonType);
//           console.log(uniqPokemonType)

//           uniqPokemonType.forEach((pokeType) => {
//               console.log(pokeType)
//               const option = document.createElement("option");
//               option.innerHTML = pokeType
//               filter.appendChild(option);
//           });
          
//       })
//       .catch((error) => console.log(error))   


// })