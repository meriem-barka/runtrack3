
// Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.

window.addEventListener('DOMContentLoaded',function loaded(){
    //je rentre les infor de l'id “keylogger” dans la variable keylogger
    let text = document.querySelector('#keylogger');

    //Document déclanche l'événement (addEventListener)
    document.addEventListener("keypress",function(event){
        //déclaration de la valeur textAria qui a pour valeur la variable keylogger qui récupère l'objet
                                    //Donc valeur contient la valeur du textearea
        let textAria = text.value;

        //Création de la valeur pour lui donner un evenement js quand l'utilisateur appuis sur la touche
        let clef = event.key;
        
        //On récupère la valeur de textearea qui a pour valeur keylogger et on l'asigne a la valeur du textearia et on ajout la clé
        text.value = textAria + clef;
    });
});

