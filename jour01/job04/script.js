
function bisextile(annee){ 

    if ((annee%4==0)) {
        if ((annee%100 == 0)) {
            if ((annee%400 == 0)) {

                return true;
                
            }else{
                return false;
            }  
        }else{
            return true;
        }
    }else {
        return false;
    }

 }

 console.log(bisextile(2020));