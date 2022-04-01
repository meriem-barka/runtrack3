
function nbrPremier(nbr) {

    value = true 

    for(let i = 2; i < nbr; i++){
        if(nbr%i == 0){
            value = false; 
        }
        return value;
    }  
}

function sommenombrespremiers(num1, num2){  

    nbrPremier(num1);
    nbrPremier(num2); 

    if (nbrPremier(num1) == true && nbrPremier(num2) == true) {
        console.log(num1 + num2);
    }
}

sommenombrespremiers(5,7);

  