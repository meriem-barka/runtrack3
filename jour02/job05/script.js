window.addEventListener('DOMContentLoaded', function() {


    //Calcul de la hauteur 'utile' du document
    let hauteur = document.documentElement.scrollHeight = window.innerHeight;

    //Récuperation de la largeur de la fenêtre
    let largeur = document.documentElement.clientWidth;

    //Modifier du css de la barre
    let myfooter = document.querySelector("#footer")

    myfooter.style.width = myfooter + "%";


    window.addEventListener("scroll",function(){

        //Récuperation de la position vertical
        let position = window.scrollY;

        //Calcul de la largeur de le barre
        let progress = (position / 4096) * 100;


        if (progress <= 35 ){
            myfooter.style.backgroundColor = "rgba(63,94,251)";
        }
        else if (progress >= 35 && progress <= 70 ) {
            myfooter.style.backgroundColor = "orange";
        }
        else if (progress >= 70  && progress <= 100 ) {
            myfooter.style.backgroundColor = "rgba(252,70,107)";
        }
        console.log(progress);
    });
})
