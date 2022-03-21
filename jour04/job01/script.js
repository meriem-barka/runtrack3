window.addEventListener("DOMContentLoaded" ,(event) => {

    //Déclaration de la variable
    let p = document.getElementById('p');
    let button = document.getElementById('button');

    //Attribuer un evenement au click au button.
    button.addEventListener('click', function(){

        //Au click le button entre dans la function pour aller chercher les informations qui se trouver dans le fichier appler .
        fetch('expression.txt')
            //faire une promesse pour pouvoire recuperer la phrase dans le document expression.txt
            .then((phrase) => phrase.text())

            //On récupere notre objet
            .then((phrase) => {

                let newp = document.createElement('p');
                newp.innerHTML = phrase;

                button.append(newp);

            })

            //Afficher en cas d'erreur.
            .catch((error) => console.log);

    });

});