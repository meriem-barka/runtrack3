document.addEventListener('DOMContentLoaded', function loaded(){
    // alert("test");
     
    //Creér une variable pour stocké le form
    let form = document.getElementById("form");
     
    //Creér un evenement sur le button submit du form
    form.addEventListener("submit", function (event){

        //Declaration des elements du form
        let mail = document.getElementById("email");
        // console.log(email.value);

        let password = document.getElementById("password");
        // console.log(password.value);

        //Creér une variables vide
        let data = new FormData();
        //méthode JavaScript pour insérer un ensemble d' Nodeobjets ou d' DOMStringobjets
        data.append("email", mail.value);
        data.append("password", password.value);
        
        //Recuperer les informations sur la page php
        fetch('traitementConnexion.php',{

            method: 'POST',
            body:data
        })

         //Recuperer les informations sur la page php en json(objet)
        .then((response) => response.json())
        .then((datas) => {

            console.log(datas);
        })

        event.preventDefault();

    });

});

