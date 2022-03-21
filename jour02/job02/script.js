

window.addEventListener('DOMContentLoaded', function loaded(){
        
        let article = document.querySelector('article');
        let button = document.querySelector('#button');

        button.addEventListener("click", showhide);

        function showhide(){ 
             
            if(article.style.display == 'block'){
                article.style.display = 'none';
            }else{
                article.style.display = 'block';
            }   
        }
});
    