

window.addEventListener('DOMContentLoaded', function loaded(){
        
    function jourtravaille(date) {
        let dateJour = new Date(date);
     
        let joursFeries = [
           "2020-01-01",
           "2020-04-13",
           "2020-05-01",
           "2020-05-08",
           "2020-05-21",
           "2020-06-01",
           "2020-07-14",
           "2020-08-15",
           "2020-11-01",
           "2020-11-11",
           "2020-12-25",
        ]; 
     
        const options = {year: 'numeric', month: 'long', day: 'numeric' };
     
        let dateFormatFR = dateJour.toLocaleDateString('fr-FR', options);
     
        if (joursFeries.includes(date) == true) {
           console.log("Le "+ dateFormatFR +" est un jour férié");
        }
        else if(dateJour.getDay() == 6 || dateJour.getDay() == 0) {
           console.log("Non, "+ dateFormatFR +" est un week-end");
        }
        else {
           console.log("Oui, "+ dateFormatFR +" est un jour travaillé");
        }
     
     }
     
     jourtravaille("2020-01-14");
       
});
        