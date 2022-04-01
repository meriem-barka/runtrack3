

document.addEventListener('DOMContentLoaded', function loaded(){


    let arrey = [];
    let body = document.querySelector("body");
    document.addEventListener("keyup", function konami(event) {

        arrey += event.key;
        if(arrey == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba")
        // document.write('moi')
        body.style.backgroundColor = "#2B529B";
        console.log(arrey)  
    })

    // var newimg = document.createElement("img");
    // newimg.src = "./laplateforme.png";           
    // body.appendChild(newimg);

});