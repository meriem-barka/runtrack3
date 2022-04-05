document.addEventListener('DOMContentLoaded', function loaded(){
    // console.log("test");
     
    let form = document.getElementById("form");

    form.addEventListener("submit", function (event){
        // console.log("ok");
        let nom = document.getElementById("nom");
        // console.log(nom.value);

        let prenom = document.getElementById("prenom");
        // console.log(prenom.value);

        let email = document.getElementById("email");
        // console.log(email.value);

        let password = document.getElementById("password");
        // console.log(password.value);

        let confirmPassword = document.getElementById("confirmpwd");
        // console.log(confirmPassword.value);

        let pErreur = document.getElementById('erreur');
        
        let data = new FormData();

        data.append("nom", nom.value);
        data.append("prenom", prenom.value);
        data.append("email", email.value);
        data.append("password", password.value);
        data.append("confirmpwd", confirmPassword.value);
        
        let erreurNom = true; 
        let erreurPrenom = true ;
        let erreurEmail= true; 
        let erreurPassword = true; 
        let erreurconfirmPassword = true ;

        nom.addEventListener("focusout", function() {

            if(nom.value.length == 0 ){
    
                pErreur.innerHTML = 'Ce champ est vide';
                // erreurNom = true
            }
            else{
    
                pErreur.innerHTML = 'Nom valide';
                // erreurNom = false
            }
            console.log('nom');
        })
    
        prenom.addEventListener("focusout", function() {
    
            if(prenom.value.length == 0 ){
    
                pErreur.innerHTML = 'Ce champ est vide';
                // erreurPrenom = true
            }
            else{
    
                pErreur.innerHTML = 'Prénom valide';
                // erreurPrenom = false
            }
            console.log('prenom');
        })
    
        email.addEventListener("focusout", function() {
    
            if(email.value.length == 0 ){
                
                pErreur.innerHTML = 'Ce champ est vide';
                // erreurEmail = true;
            }
            else{
                pErreur.innerHTML = 'Mail valide';
                // erreurEmail = false;
            }
            console.log('email');
        })
    
        password.addEventListener("focusout", function() {
    
            if(password.value.length == 0 ){
    
                pErreur.innerHTML = 'Ce champ est vide';
                // erreurPassword = true;
            }
            else{
    
                pErreur.innerHTML = 'password valide';
                // erreurPassword = false;
            }
            console.log('password');
        })
    
        confirmPassword.addEventListener("focusout", function() {
    
            if(password2.value.length == 0 ){
    
                pErreur.innerHTML = 'Ce champ est vide';
                // erreurPassword2 = true;
            }
            else{
    
                pErreur.innerHTML = 'confirmPassword valide';
                // erreurPassword2 = false;
            }
            console.log('confirmPassword');
        })
    
        fetch('traitementInscription.php',{

            method:'POST',
            body:data
        })
        .then((response) => response.text())
        .then((datas) => {
        
            console.log(datas);
        });
        
        event.preventDefault();
    
    });

});