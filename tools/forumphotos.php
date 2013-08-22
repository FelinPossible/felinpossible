<?php
function get_forum_contents()    
{
    include '../site/application/utils/ChatUtil.php';
    
    $chats_forum=array();
        
  
    try{
        $arrExtraParam= array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"); 
		$appliParams = parse_ini_file("../site/application/configs/application.ini"); 
        $pdo = new PDO('mysql:host=localhost;dbname='.$appliParams['resources.db.params.dbname'], $appliParams['resources.db.params.username'], $appliParams['resources.db.params.password'], $arrExtraParam); 

        // on crée la requète SQL 
        $sql = "SELECT topic_id FROM phpbb_topics WHERE forum_id in (10,108) AND topic_type=0"; 


        // on fait une boucle qui va faire un tour pour chaque enregistrement 
        foreach  ($pdo->query($sql) as $data) 
        { 
             $sql2 = "SELECT topic_id,post_text,date_format(date(from_unixtime(post_time)), '%d/%m/%Y') post_time,date_format(date( from_unixtime(post_edit_time)), '%d/%m/%Y') post_edit_time FROM phpbb_posts WHERE topic_id=".$data["topic_id"]." and post_id = (SELECT min(post_id) from phpbb_posts where topic_id=".$data["topic_id"].")"; 
                     
             foreach  ($pdo->query($sql2) as $data2) 
            {
                 $int_name= preg_match_all("#\[.*\]NOM.*:?[ ]*\[.*\][ ]*:?[ ]*(.+)\[/.*\]#i",$data2["post_text"],$forum_contents,PREG_PATTERN_ORDER); 
                 $identif=FP_Util_ChatUtil::getInfosFromText($data2["post_text"],'Identification');
                 $tests=FP_Util_ChatUtil::getInfosFromText($data2["post_text"],'Tests');
                 $vaccins=FP_Util_ChatUtil::getInfosFromText($data2["post_text"],'Vaccin');
                 $caractere=FP_Util_ChatUtil::getInfosFromText($data2["post_text"],'Caractère');
                 $naiss=FP_Util_ChatUtil::getInfosFromText($data2["post_text"],'Né[e]? le');
                 if($naiss==="")
                 {
                     $naiss=FP_Util_ChatUtil::getInfosFromText($data2["post_text"],'Date de naissance'); 
                 }; 
                 
                 
                 $int_img= preg_match_all("#\[img.*\](.*)\[/img.*\]#",$data2["post_text"],$forum_contents2,PREG_PATTERN_ORDER);
        
                $arr_sea[0]="&#46;";
                $arr_sea[1]="&#58;";

                $arr_rep[0]=".";
                $arr_rep[1]=":";
                $pic=null;
                if ($forum_contents2 != null && $forum_contents2[1] != null && $forum_contents2[1][0] != null){
                $pic=str_replace($arr_sea,$arr_rep,htmlspecialchars_decode($forum_contents2[1][0]));
                }
                    if ($forum_contents != null && $forum_contents[1] != null && $forum_contents[1][0] != null){
                        $chats_forum[FPUtils::getNomSansAccentsHTML($forum_contents[1][0])]['pic']= $pic;
                        $chats_forum[FPUtils::getNomSansAccentsHTML($forum_contents[1][0])]['edit_time']= ($data2["post_edit_time"]==='01-01-1970'?$data2["post_time"]:$data2["post_edit_time"]);
                        $chats_forum[FPUtils::getNomSansAccentsHTML($forum_contents[1][0])]['identif']=$identif;
                        $chats_forum[FPUtils::getNomSansAccentsHTML($forum_contents[1][0])]['tests']=$tests;
                        $chats_forum[FPUtils::getNomSansAccentsHTML($forum_contents[1][0])]['vaccin']=$vaccins;
                        $chats_forum[FPUtils::getNomSansAccentsHTML($forum_contents[1][0])]['dateNaissance']=$naiss; 
                        $chats_forum[FPUtils::getNomSansAccentsHTML($forum_contents[1][0])]['topic_id']=  $data2["topic_id"];
                        $chats_forum[FPUtils::getNomSansAccentsHTML($forum_contents[1][0])]['caractere']=substr($caractere,0,120); 
                    }
            }
            
        } 
        }
        catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }
        catch (Exception $e){echo 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr';}
       
        
    //on trie par nom de chat
    ksort($chats_forum);
    
    return $chats_forum;
}
?>