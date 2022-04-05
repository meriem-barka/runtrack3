<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="scriptInscription.js"></script>
        <title>Inscription</title>
    </head>
    <body>
        <?php ?>
        <main>
            <h2 class="titre">Inscription</h2>
            <form id="form" action="#" method="post">
                <fieldset> 
                    <label for="nom">Nom</label>
                    <input type="text" id="nom"></input><br/>

                    <label for="prenom">Prenom</label>
                    <input type="text" id="prenom"></input><br/>

                    <label for="email">Mail</label>
                    <input type="text" id="email"></input><br/>

                    <label for="pwd">Mot de passe</label>
                    <input type="password" id="password"><br/>

                    <label for="pwd">Confirmation de mot de passe</label>
                    <input type="password" id="confirmpwd"><br/>

                    <label>&nbsp;</label>
                    <input type="submit" name="submit" value="inscription" class="submit" />
                </fieldset>    
            </form>
        </main> 
    </body>
</html>