document.addEventListener('DOMContentLoaded', function loaded(){

    let id = document.querySelector('id');
    let nom = document.querySelector('nom');
    let prenom = document.querySelector('prenom');
    let email = document.querySelector('email');
    let button = document.querySelector('update')
    let tbody = document.querySelector('tbody')

    let data = new FormData();

    document.addEventListener('click', () => {
                
        //On récupère le fichier de la requete en base de donnée
        fetch('users.php')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (const value of data){

                let tr = document.createElement('tr')
                tbody.append(tr);

                let td = document.createElement('td')
                td.textContent = value.id
                tr.append(td);

                let ta = document.createElement('td')
                ta.textContent = value.nom
                tr.append(ta);

                let tb = document.createElement('td')
                tb.textContent = value.prenom
                tr.append(tb);

                let tc = document.createElement('td')
                tc.textContent = value.email
                tr.append(tc);

                // console.log(data);
            }
        })
    });
});
