<?php
//Konstanten
if (!defined('MSD_VERSION')) define('MSD_VERSION', '1.23 Rev 315');
if (!defined('MSD_VERSION_ADD')) define('MSD_VERSION_ADD', '');

if (!defined('MSD_OS')) define('MSD_OS', PHP_OS);
if (!defined('MSD_OS_EXT')) define('MSD_OS_EXT',@php_uname());
if (!defined('MSD_IS_WINDOWS')) {
    if (stristr(PHP_OS, 'win')) {
        define('MSD_IS_WINDOWS', 1);
    } else {
        define('MSD_IS_WINDOWS', 0);
    }
}
if (!defined('MSD_USER_OS')) {
    if (!empty($_SERVER['HTTP_USER_AGENT'])) {
        $HTTP_USER_AGENT = $_SERVER['HTTP_USER_AGENT'];
    } else if (!isset($HTTP_USER_AGENT)) {
        $HTTP_USER_AGENT = '';
    }

    // 1. Platform
    if (strstr($HTTP_USER_AGENT, 'Win')) {
        define('MSD_USER_OS', 'Win');
    } else if (strstr($HTTP_USER_AGENT, 'Mac')) {
        define('MSD_USER_OS', 'Mac');
    } else if (strstr($HTTP_USER_AGENT, 'Linux')) {
        define('MSD_USER_OS', 'Linux');
    } else if (strstr($HTTP_USER_AGENT, 'Unix')) {
        define('MSD_USER_OS', 'Unix');
    } else if (strstr($HTTP_USER_AGENT, 'OS/2')) {
        define('MSD_USER_OS', 'OS/2');
    } else {
        define('MSD_USER_OS', 'Other');
    }
}

if (!defined('config') || !is_array($config)) $config=array();
if (!defined('databases') || !is_array($databases)) $databases=array();

//feste Variabeln
$config['lock_tables']=0;

//Pfade und Files
$config['paths']['root']=Realpfad('./');
$config['paths']['work']='work/';
$config['paths']['backup']=$config['paths']['work'].'backup/';
$config['paths']['structure']=$config['paths']['work'].'structure/';
$config['paths']['log']=$config['paths']['work'].'log/';
$config['paths']['config']=$config['paths']['work'].'config/';
$config['paths']['perlexec']='msd_cron/';

if (isset($_SESSION['config_file']))
{
	$config['config_file']=$_SESSION['config_file'];
	$config['cron_configurationfile']=$_SESSION['config_file'];
}
else
{
	$config['config_file']='mysqldumper';
	$_SESSION['config_file']='mysqldumper';
	$config['cron_configurationfile']='mysqldumper.conf.php';
}
$config['files']['log']=$config['paths']['log'].'mysqldump.log';
$config['files']['perllog']=$config['paths']['log'].'mysqldump_perl.log';
$config['files']['perllogcomplete']=$config['paths']['log'].'mysqldump_perl.complete.log';
$config['files']['parameter']=$config['paths']['config'].$config['config_file'].'.php';
$config['files']['dbs_manual']=$config['paths']['config'].'dbs_manual.php';

// inti MySQL-Setting-Vars
$config['mysql_standard_character_set']='';
$config['mysql_possible_character_sets']=array();

//Ini-Parameter
$config['max_execution_time']=ini_get('max_execution_time');
$config['max_execution_time']=($config['max_execution_time']<=0) ? 30:$config['max_execution_time'];
if ($config['max_execution_time']>30) $config['max_execution_time']=30;;
$config['upload_max_filesize']=ini_get('upload_max_filesize');
$config['safe_mode']=ini_get('safe_mode');
$config['magic_quotes_gpc']=ini_get('magic_quotes_gpc');
$config['disabled']=ini_get('disable_functions');
$config['phpextensions']=implode(', ',get_loaded_extensions());
$m=str_replace('M','',get_cfg_var('memory_limit'));
$config['ram']=(empty($m)) ? 0 : $m;

//Ist zlib moeglich?
$p1=explode(', ',$config['phpextensions']);
$p2=explode(',',str_replace(' ','',$config['disabled']));

//Buggy PHP-Version ?
$p3=explode('.',PHP_VERSION);
$buggy=($p3[0]==4 && $p3[1]==3 && $p3[2]<3);
$config['zlib']=(!$buggy) && (in_array('zlib',$p1) && (!in_array('gzopen',$p2) || !in_array('gzwrite',$p2) || !in_array('gzgets',$p2) || !in_array('gzseek',$p2) || !in_array('gztell',$p2)));

//Tuning-Ecke
$config['tuning_add']=1.1;
$config['tuning_sub']=0.9;
$config['time_buffer']=0.75; //max_zeit=$config['max_execution_time']*$config['time_buffer']
$config['perlspeed']=10000;  //Anzahl der Datensaetze, die in einem Rutsch gelesen werden


//Bausteine
$meta='<meta http-equiv="expires" content="3600"> '."\n".'<META HTTP-EQUIV="Pragma" CONTENT="no-cache">'."\n";
$config['homepage']='http://forum.mysqldumper.de/';
$languagepacks_ref='http://forum.mysqldumper.de/downloads.php?cat=9';
$stylepacks_ref='http://forum.mysqldumper.de/downloads.php?cat=3';

$nl="\n";
$mysql_commentstring='--';

//config-Variablen, die nicht gesichert werden sollen
$config_dontsave=Array('homepage','max_execution_time','safe_mode','magic_quotes_gpc','disabled',
'phpextensions','ram','zlib','tuning_add','tuning_sub','time_buffer','perlspeed','cron_configurationfile',
'dbconnection','version','mysql_possible_character_sets','mysql_standard_character_set','config_file','upload_max_filesize');

//Initialisierungen
//0 schaltet frameset-restore aus
$frameset_restore=0;

function v($t)
{
	echo '<br>';
	if (is_array($t))
	{
		echo '<pre>';
		print_r($t);
		echo '</pre>';
	}
	else echo $t;
}

function getServerProtocol ()
{
	return (isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) == 'on') ? 'https://' : 'http://';
}

?>