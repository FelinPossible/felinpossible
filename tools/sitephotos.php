<?php
function get_site_contents()    
{
    $chats_site=array();

    try{
        $arrExtraParam= array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"); 
        $appliParams = parse_ini_file("../site/application/configs/application.ini"); 
        $pdo = new PDO('mysql:host=localhost;dbname='.$appliParams['resources.db.params.dbname'], $appliParams['resources.db.params.username'], $appliParams['resources.db.params.password'], $arrExtraParam); 
                    
    
        // on crée la requête SQL 
        $sql = "SELECT nom,miniature,DATE_FORMAT(date,'%d/%m/%Y') date,tests,vaccins,tatouage,caractere,topic_id FROM fp_cat_fiche WHERE adopte=0 and reserve=0 and disparu=0"; 

        // on fait une boucle qui va faire un tour pour chaque enregistrement 
        foreach  ($pdo->query($sql) as $data) 
        { 
             $chats_site[FPUtils::getNomSansAccentsHTML($data["nom"])]['pic']=  $data["miniature"];
             $chats_site[FPUtils::getNomSansAccentsHTML($data["nom"])]['dateNaissance']=  $data["date"];
             $chats_site[FPUtils::getNomSansAccentsHTML($data["nom"])]['tests']=  $data["tests"];
             $chats_site[FPUtils::getNomSansAccentsHTML($data["nom"])]['vaccin']=  $data["vaccins"];
             $chats_site[FPUtils::getNomSansAccentsHTML($data["nom"])]['identif']=  $data["tatouage"];
             $chats_site[FPUtils::getNomSansAccentsHTML($data["nom"])]['caractere']=  $data["caractere"];
             $chats_site[FPUtils::getNomSansAccentsHTML($data["nom"])]['topic_id']=  $data["topic_id"];
        } 
        }
        catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }
        
    //on trie par nom de chat
    asort($chats_site);
    
    return $chats_site;
}
?>
