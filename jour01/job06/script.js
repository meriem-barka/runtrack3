function fizzbuzz(){

    for (let index = 1; index <= 151; index++) {
        console.log(index);

        if (index % 3 === 0) {
        // Nombre divisible par 3 : on ajoute "Fizz" au message
            // message += 'Fizz';
            let message = '';    
            message += 'Fizz';
            console.log(message);
        }

        if (index % 5 === 0) {
        // Nombre divisible par 5 : on ajoute "Buzz" au message   
            // message += 'Buzz';
            let message = '';    
            message += 'Buzz';
            console.log(message);
        }

        if (index % 3 && index % 5 === 0) {
        // Nombre divisible par 3 et 5: on ajoute "FizzBuzz" au message 
            let message = '';    
            message += 'FizzBuzz';
            console.log(message);
        }    
    }
}

fizzbuzz();