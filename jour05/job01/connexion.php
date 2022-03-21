<?php 
    session_start();

    try {
        $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8','root', 'root');
      
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage() . "<br/>";
        die();
    }  
?>

<?php 
// Vérifier si le formulaire est soumis
    if (isset($_POST['submit'])) {
        
        /* récupérer les données du formulaire en utilisant la valeur des attributs email comme clé*/
        $email = htmlspecialchars($_POST['mail']);
        $password = $_POST['pwd'];

    }
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="script.js"></script>
        <title>Connexion</title>
    </head>
    <body>
        <main>
            <h2 class="titre">Connexion</h2>

            <form id="form" action="#" method="post">
                <fieldset> 
                    <label for="mail">Email</label>
                    <input type="text" id="mail" name="mail"></input><br/>

                    <label for="pwd">Password</label>
                    <input type="password" id="pwd" name="pwd"><br/>

                    <label>&nbsp;</label>
                    <input type="submit" name="submit" value="inscription" class="submit" />
                </fieldset>    
            </form>
        </main> 

        <!-- <p id="mail"></p>
        <p id="p_password"></p>
   
        <p id="erreur"></p> -->

    </body>
</html>