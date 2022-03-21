
window.addEventListener('DOMContentLoaded', function loaded(){
        
    //je rentre les infos de l'id citation dans la variable citations
                                                        //je sélectionne le contenu de la balise article
    let citation = document.getElementById('citation').textContent;
    //je rentre les infos de l'id button dans la variable button
     let button = document.querySelector('#button');
    //le bouton déclenche l'évènement(addEventListener) : 
        //dans les parenthèse 
            //le 1er est l'action ici c'est de cliquer
            //le 2ème c'est l'appel à la fonction citation pour qu'il exécute la fonction
    button.addEventListener("click", article);

    function article(){
        //on affiche les infos de la variable citations
        console.log(citation);
    }
});
    
    
