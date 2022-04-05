<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="scriptConnexion.js"></script>
        <title>Connexion</title>
    </head>
    <body>
        <main>
            <h2 class="titre">Connexion</h2>

            <form id="form" action="#" method="post">
                <fieldset> 
                    <label for="email">Mail</label>
                    <input type="text" id="email"></input><br/>

                    <label for="password">Password</label>
                    <input type="password" id="password"><br/>

                    <label>&nbsp;</label>
                    <input type="submit" name="submit" value="Connexion" class="submit" />
                </fieldset>    
            </form>
        </main>
    </body>
</html>