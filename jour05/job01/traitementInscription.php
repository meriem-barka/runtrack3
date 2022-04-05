<?php

    //Inscription  
            // echo json_encode(["Message" => 'ok1']);
            // die();
        if (isset($_POST["nom"]) && isset($_POST["prenom"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["confirmpwd"])){

            $nom = $_POST["nom"];
            $prenom = $_POST["prenom"];
            $email = $_POST["email"];
            $password = $_POST["password"];
            $password2 = $_POST["confirmpwd"];
             

            try{
                $bdd = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', 'root');
                $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
            // Vérifier si le login que l'utilisateur a rentrer dans le formulaire n'existe pas deja dans la base de donnée
                $req_email = $bdd->prepare("SELECT * FROM utilisateurs WHERE email = '$email' " );
                $req_email->execute();
                $resultat = $req_email->fetch(PDO::FETCH_ASSOC);
                
                $hashed_password = password_hash($password, PASSWORD_BCRYPT);
                
                //si count = 0 le login est libre
                if(empty($resultat)){

                    if ($password2 == $password) {

                    // On inscrit l'utilisateur dans la base de donée
                        $request = "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (:nom, :prenom, :email, :$hashed_password)";
                        $result = $bdd->prepare($request);
                        $result->execute(array(":nom" => $nom, ":prenom" => $prenom, ":email" => $email, ":password" => $password));   
                    }else {
                        echo json_encode(["Message" => 'Les mots de passe son differents']);
                        die();
                    }
                }else {
                    echo json_encode(["Message" => 'Bienvenue']);
                    die();
                }

            }catch (PDOException $e) {
                echo json_encode(["Message" => "Connection à MySQL impossible : ",]);
                die('Erreur: '.$e->getMessage());
            }    

        }else {
            echo json_encode(["Message" => 'Error2']);
            die();
        }
?>