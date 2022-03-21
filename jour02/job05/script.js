

window.onload = () => {

    let footer = document.getElementById('footer');
   
    window.addEventListener("scroll",function(){
       
        //Calcul de la hauteur 'utile' du document
        let hauteur = document.documentElement.scrollHeight = window.innerHeight;

         //Récuperation de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth;
           
        //Récuperation de la position vertical
        let position = window.scrollY;
        
         //Calcul de la largeur de le barre 
        let progress = (position / hauteur) * largeur;
            
        footer.style.width = footer + "%";

        //Modifier du css de la barre
        document.getElementById("progress")

     
        if (progress <= 35 ){
            footer.style.background = "rgba(63,94,251)";
        }
        else if (progress > 35 && progress <= 70 ) {
            footer.style.background = "orange";
        }
        else if (progress > 70  && progress <= 100 ) {
            footer.style.background = "rgba(252,70,107)";
        }
        console.log(progress);
    }); 
};


