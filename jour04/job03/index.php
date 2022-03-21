<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="script.js"></script>
    </head>

    <body>
        <h1>Récuperation des information avec le fetch</h1>

        <form id="form" action="#" method="post">
            <div>
                <label for="id">Id</label>
                <input type="text" name="id" id="id">
            </div>

            <div>
                <label for="nom">Nom</label>
                <input type="text" name="nom" id="nom">
            </div>

            <div>
                <label for="type">List déroulante</label>
                <select name="type" id="select">
                    <option value=""></option>
                </select>
            </div>

            <input type="button" value="filtrer" id="filter">
        </form>

        <div></div>
    </body>
</html>