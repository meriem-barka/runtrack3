window.addEventListener("DOMContentLoaded" ,(event) => {

    let json = {
        name: "La Plateforme_", 
        address: "8 rue d hozier", 
        city: "Marseille", 
        nb_staff: "11", 
        creation:"2019"}

    let key = 'city';

    function jsonValueKey(json, key){
        
        console.log(json[key]);

        return json[key];
    }

    jsonValueKey(json, key);
});

