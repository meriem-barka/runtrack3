<?php 

    session_start();

    try{
        $pdo = new PDO("mysql:host=localhost; dbname=utilisateurs; charset=utf8", "root", "root");
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }  
    var_dump($pdo);
    // Vérifier si le formulaire est soumis
    if (isset($_POST['submit'])) {

       // Verifier si les champs ne sont pas vide 
       if (!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['pwd']) && !empty($_POST['pwd2'])){

        /* récupérer les données du formulaire en utilisant la valeur des attributs name comme clé*/
            $nom = $_POST['nom'];
            $prenom = $_POST['prenom'];
            $email = $_POST['email'];
            $password = $_POST['pwd'];
            $password2 = $_POST['pwd2'];
            
           
            // Vérifier si le login que l'utilisateur a rentrer dans le formulaire n'existe pas deja dans la base de donnée
            $req_email = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ? " );
            $req_email->execute([$_POST['email']]);
            $resultat = $req_email->fetch();
           

            //    // hachage du mot de passe
    //    $hached_password = password_hash($password, PASSWORD_BCRYPT);


            // Si le compte d'utilisateur qui viens d'être a jouter est libre
            if(count($resultat) == 0){
                
                // On verifie si les mot de passe son similaire
                if ($password == $password2) {
                    
                     // On inscrit l'utilisateur dans la base de donée et on l'envoie sur la page de connexion
                     $request = $pdo->prepare("INSERT INTO utilisateurs (nom, prenom, email, password) VALUES ('$nom', '$prenom','$email', '$hashed_password')");
                }
                else {
                    $_SESSION['Error'] = 'les mots de passe ne sont pas similaires, Vous allez être redirigé... .';
                    echo $_SESSION['Error'];
                    header ('refresh: 1; URL=inscription.php');  
                }
            }
            else {
                $_SESSION['Error'] = 'login où le mot de passe est incorrect.';
                echo $_SESSION['Error'];
                header ('refresh: 1; URL=inscription.php');
            }
        }
        else {
            $_SESSION['Error'] = 'Tous les champs doivent être remplis';
            echo $_SESSION['Error'];
            header ('refresh: 1; URL=inscriprion.php');
        }

    };
?>


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="script.js"></script>
        <title>Inscription</title>
    </head>
    <body>
        <?php ?>
        <main>
            <h2 class="titre">Inscription</h2>
            <form id="form" action="#" method="post">
                <fieldset> 
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="nom"></input><br/>

                    <label for="prenom">Prenom</label>
                    <input type="text" id="prenom" name="prenom"></input><br/>

                    <label for="email">Mail</label>
                    <input type="text" id="email" name="email"></input><br/>

                    <label for="pwd">Mot de passe</label>
                    <input type="password" id="pwd" name="pwd"><br/>

                    <label for="pwd">Confirmation de mot de passe</label>
                    <input type="password" id="pwd" name="pwd2"><br/>

                    <label>&nbsp;</label>
                    <input type="submit" name="submit" value="inscription" class="submit" />
                </fieldset>    
            </form>
        </main> 

        <!-- <p id="p_prenom"></p>
        <p id="p_nom"></p>
        <p id="mail"></p>
        <p id="p_password"></p>
        <p id="p_password2"></p>
        <p id="erreur"></p> -->

    </body>
</html>