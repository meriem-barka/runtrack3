<?php 
    try    {
        $bdd = new PDO('mysql:host=localhost;dbname=utilisateurs','root', 'root');
        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $request = $bdd->prepare('SELECT * FROM utilisateurs');
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);
        
        // echo '<pre>';
        // print_r($result);
        // echo '</pre>';

        $arr = json_encode($result, true);
        echo $arr;
                
    }catch(PDOException $e ) {
        echo "Connection à MySQL impossible : ", 
        die('Erreur: '.$e->getMessage());
    }      
?>

<?php  
    // try{
    //     $req = $dbco->prepare("UPDATE utilisateurs SET id = :id, nom = :nom, prenom = :prenom, email = :email");
    //     $req->bindParam(':id', $id, ':nom', $nom, ':prenom', $prenom, ':email', $email, PDO::PARAM_INT);
    //     $req->execute();
    //     echo 'Données mises à jour';
    // }catch(PDOException $e){
    //     echo "Erreur : " . $e->getMessage();
    // }
?>   

