
function sommenombrespremiers(num1, num2) {  

    for (let index = 2; index <= 100 ; index++) {

        if (num1 % index && num2 % index === 0) {
            
            console.log(sommenombrespremiers(2));
        }
        
    }
}

sommenombrespremiers();

  