
let form = document.getElementById('form')
let form = document.getElementById('nom')
let form = document.getElementById('prenom')
let form = document.getElementById('email')
let form = document.getElementById('pwd')
let form = document.getElementById('pwd2')

window.addEventListener('DOMContentLoaded', function loaded(){
        
    button.addEventListener("click", function() {

        let form = document.getElementById('form');
        let formData = new FormData(form);

        fetch('traitement.php',{

            method: 'post',
            body:formData
        })

    })

})
