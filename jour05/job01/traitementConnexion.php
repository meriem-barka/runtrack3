
<?php 

    //Connexion
        if (isset($_POST["email"]) && isset($_POST["password"])){

            $mail = $_POST["email"];
            $password = $_POST["password"];

            try{
                $bdd = new PDO('mysql:host=localhost;dbname=utilisateurs','root', 'root');
                $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        
                $request = $bdd->prepare("SELECT * FROM utilisateurs WHERE email = '$mail' AND password = '$password'");
                $request->execute();
                $result = $request->fetchAll(PDO::FETCH_ASSOC);

                if (!empty($result)) {

                    echo json_encode(["message" =>  "Autorisé"]);
                }else{
                    echo json_encode(["message" =>  "refusé"]);
                }
                        
            }catch (PDOException $e ) {
                echo json_encode(["message" =>  "Connection à MySQL impossible : ",]); 
                die('Erreur: '.$e->getMessage());
            }   
        }
        

