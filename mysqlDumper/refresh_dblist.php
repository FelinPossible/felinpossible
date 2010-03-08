<?php
// Konfigurationsdateien, die aktualisiert werden sollen
// configurations to update
// mehrere Dateien so angeben | enter more than one configurationsfile like this
// $configurationfiles=array('mysqldumper','db2');
/////////////////////////////////////////////////////////////////////////

$configurationfiles=array('mysqldumper');

include_once('./inc/functions.php');
$config['language']='en';
$config['theme']="msd";
$config['files']['iconpath']='css/'.$config['theme'].'/icons/';

foreach ($configurationfiles as $conf)
{
	$config['config_file']=$conf;
	include($config['paths']['config'].$conf.'.php');
	GetLanguageArray();
	SetDefault(true);
}
?>