
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let order = 'desc';
    
    function tri(numbers, order){
        //manually sort array from largest to smallest:
        //loop forwards through array:

        for (let i = 0; i < numbers.length; i++) {
          //loop through the array, moving forwards:
          //note in loop below we set `j = i` so we move on after finding greatest value:
          for (let i = 0; i < numbers.length-1; i++) {
            if (numbers[i] < numbers[i+1]) {
              let temp = numbers[i+1]; //store original value for swapping
              numbers[i+1] = numbers[i]; //set original value position to greater value
              numbers[i] = temp; //set greater value position to original value
            };
          };
        };
        return numbers;
    };
    console.log(tri(numbers, order));



