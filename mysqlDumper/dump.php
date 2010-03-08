<?php
session_name('MySQLDumper');
session_start();
ob_start();
include_once('./inc/functions_dump.php');

// beim Erstaufruf Konfigurationsdatei auslesen und in Session speichern
if (isset($_GET['config']))
{
	$search=array('/','\\',':','@');
	$replace=array('','','','');
	$config_file=str_replace($search,$replace,$_GET['config']);
	if (is_readable($config['paths']['config'].$config_file.'.php'))
	{
		$config['files']['parameter']=$config['paths']['config'].$config_file.'.php';
		$_SESSION['config_file']=$config_file;
		read_config($config['paths']['config'].$config['files']['parameter']);
	}
	else die("Hacking attempt or configuration not found!");
}

include_once('./'.$config['files']['parameter']);
include_once('./inc/mysql.php');
include_once('./language/'.$config['language'].'/lang.php');
include_once('./language/'.$config['language'].'/lang_dump.php');

$pageheader=MSDHeader();
$DumpFertig=0;
$relativ_path='./';

//$_POST-Parameter lesen
$dump['kommentar']=(isset($_GET['comment'])) ? urldecode($_GET['comment']): '';
if (isset($_POST['kommentar'])) $dump['kommentar']=urldecode($_POST['kommentar']);
if(get_magic_quotes_gpc()) $dump['kommentar']=stripslashes($dump['kommentar']);

$dump['backupdatei']=(isset($_POST['backupdatei'])) ? $_POST['backupdatei'] :'';
$dump['backupdatei_structure']= (isset($_POST['backupdatei_structure'])) ? $_POST['backupdatei_structure'] : '';
$dump['part']=(isset($_POST['part'])) ? $_POST['part'] : 1;
$dump['part_offset']=(isset($_POST['part_offset'])) ? $_POST['part_offset'] : 0;
$dump['verbraucht']=(isset($_POST['verbraucht'])) ? $_POST['verbraucht'] : 0;
$out='';
$dump['errors']= (isset($_POST['err'])) ? $_POST['err'] : 0;
$dump['table_offset']=(isset($_POST['table_offset'])) ? $_POST['table_offset'] : -1;
$dump['zeilen_offset']= (isset($_POST['zeilen_offset'])) ? $_POST['zeilen_offset']:0;
$dump['filename_stamp']= (isset($_POST['filename_stamp'])) ? $_POST['filename_stamp'] : '';
$dump['anzahl_zeilen']= (isset($_POST['anzahl_zeilen'])) ? $_POST['anzahl_zeilen'] : (($config['minspeed']>0) ? $config['minspeed'] : 50);
$dump['dump_encoding']= (isset($_POST['dump_encoding'])) ? urldecode($_POST['dump_encoding']):'';

if (isset($_GET['sel_dump_encoding']))
{
	// Erstaufruf -> encoding auswerten
	include_once('./inc/functions_sql.php');
	get_sql_encodings();
	$encodingline=$config['mysql_possible_character_sets'][$_GET['sel_dump_encoding']];
	$encoding=explode(' ',$encodingline);
	$dump['dump_encoding']=isset($encoding[0]) ? $encoding[0]:$encodingline;
}

$mp2=array('Bytes','Kilobytes','Megabytes','Gigabytes');
$aus2=$page_parameter=$a='';
$dump['tabellen_gesamt']=0;

FillMultiDBArrays();
if($databases['db_actual_tableselected']!='' && $config['multi_dump']==0)
{
	$dump['tblArray']=explode('|',$databases['db_actual_tableselected']);
	$tbl_sel=true;
	$msgTbl=sprintf($lang['nr_tables_selected'],count($dump['tblArray']));
}
// Korrektur -> Multi-DB-Array ist gefuellt (damit die Infos in der Konfig nicht verloren gehen), aber Multidump ist nicht aktiviert)
if ($config['multi_dump']==0)
{
	unset($databases['multi']);
	$databases['multi']=array();
	$databases['multi'][0]=$databases['db_actual'];
}
else
{
	// wenn Multidump aktiviert ist, aber keine DB gewaehlt wurde -> aktuelle DB uebernehmen
	if (!isset($databases['multi'][0])) $databases['multi'][0]=$databases['db_actual'];
}

//Zeitzähler aktivieren
$dump['max_zeit']=intval($config['max_execution_time']*$config['time_buffer']);
$dump['startzeit']=time();
$xtime=(isset($_POST['xtime'])) ? $_POST['xtime']:time();
$dump['countdata']= (!empty($_POST['countdata'])) ? $_POST['countdata'] : 0;
$dump['aufruf']= (!empty($_POST['aufruf'])) ? $_POST['aufruf'] : 0;
MSD_mysql_connect($dump['dump_encoding']);

$flipped = array_flip($databases['Name']);
$dump['tables']=Array();
$dump['records']=Array();
$dump['totalrecords']=0;

for($ii=0;$ii<count($databases['multi']);$ii++) {
	$dump['dbindex']=$flipped[$databases['multi'][$ii]];
	$tabellen = mysql_query('SHOW TABLE STATUS FROM `'.$databases['Name'][$dump['dbindex']].'`',$config['dbconnection']) or die(mysql_error());
	$num_tables = mysql_num_rows($tabellen);
	// Array mit den gewünschten Tabellen zusammenstellen... wenn Präfix angegeben, werden die anderen einfach nicht übernommen
	if ($num_tables>0)
	{
		for ($i=0;$i<$num_tables;$i++)
		{
			$row=mysql_fetch_array($tabellen);
			if($config['optimize_tables_beforedump']==1 && $dump['table_offset']==-1) mysql_query('OPTIMIZE `'.$row['Name'].'`');
			if (isset($tbl_sel))
			{
				if (in_array($row['Name'],$dump['tblArray'])) {
					$dump['tables'][]=$databases['Name'][$dump['dbindex']].'|'.$row['Name'];
					$dump['records'][]=$databases['Name'][$dump['dbindex']].'|'.$row['Rows'];
					$dump['totalrecords']+=$row['Rows'];
				}
			}
			elseif ($databases['praefix'][$dump['dbindex']]!='' && !isset($tbl_sel))
			{
				if (substr($row['Name'],0,strlen($databases['praefix'][$dump['dbindex']]))==$databases['praefix'][$dump['dbindex']]) {
					$dump['tables'][]=$databases['Name'][$dump['dbindex']].'|'.$row['Name'];
					$dump['records'][]=$databases['Name'][$dump['dbindex']].'|'.$row['Rows'];
					$dump['totalrecords']+=$row['Rows'];
				}
			}
			else
			{
				$dump['tables'][]=$databases['Name'][$dump['dbindex']].'|'.$row['Name'];
				$dump['records'][]=$databases['Name'][$dump['dbindex']].'|'.$row['Rows'];

				// Get nr of records -> need to do it this way because of incorrect returns when using InnoDBs
				$sql_2="SELECT count(*) as `count_records` FROM `".$databases['Name'][$dump['dbindex']]."`.`".$row['Name']."`";
				$res2=@mysql_query($sql_2);
				$row2=mysql_fetch_array($res2);
				$row['Rows']=$row2['count_records'];
				$dump['totalrecords']+=$row['Rows'];
			}
		}
	}
}

$num_tables=count($dump['tables']);
if($config['optimize_tables_beforedump']==1 && $dump['table_offset']==-1) $out.=sprintf($lang['nr_tables_optimized'],$num_tables).'<br>';
$dump['data']='';
$dump['structure']='';
$dump['dbindex']=(isset($_POST['dbindex'])) ? $_POST['dbindex'] :$flipped[$databases['multi'][0]];

//Ausgaben-Header bauen
$aus_header[]= headline('Backup: '.(($config['multi_dump']==1) ? 'Multidump ('.count($databases['multi']).' '.$lang['dbs'].')' : $lang['db'].': '.$databases['Name'][$dump['dbindex']].(($databases['praefix'][$dump['dbindex']]!='') ?' ('.$lang['withpraefix'].' <span>'.$databases['praefix'][$dump['dbindex']].'</span>)' : '')));
if (isset($aus_error) && count($aus_error)>0) $aus_header=array_merge($aus_header,$aus_error);

if($num_tables==0)
{
	//keine Tabellen gefunden
	$aus[]='<br><br><p class="error">'.$lang['error'].': '.sprintf($lang['dump_notables'],$databases['Name'][$dump['dbindex']]).'</p>';
	if(!$config['multi_dump']==1)
	{
		echo $pageheader;
		echo get_page_parameter($dump);
		echo implode("\n",$aus);
		echo '</body></html>';
		exit();
	}
}
else
{
	if ($dump['table_offset']==-1)
	{
		// File anlegen, da Erstaufruf
		new_file();
		$dump['table_offset']=0; // jetzt kanns losgehen
		flush();
	}
	else
	{
		// SQL-Befehle ermitteln
		$dump['restzeilen']=$dump['anzahl_zeilen'];
		WHILE ( ($dump['table_offset'] < $num_tables) && ($dump['restzeilen']>0) )
		{
			$table = substr($dump['tables'][$dump['table_offset']],strpos($dump['tables'][$dump['table_offset']],'|')+1);
			$adbname=substr($dump['tables'][$dump['table_offset']],0,strpos($dump['tables'][$dump['table_offset']],'|'));
			if($databases['Name'][$dump['dbindex']]!=$adbname)
			{
				//neue Datenbank
				WriteLog('Dump \''.$dump['backupdatei'].'\' finished.');
				ExecuteCommand('a');
				if($config['multi_part']==1)
				{
					$out.=$lang['finished'].'<br><div class="backupmsg">';
					$dateistamm=substr($dump['backupdatei'],0,strrpos($dump['backupdatei'],'part_')).'part_';
					$dateiendung=($config['compression']==1) ? '.sql.gz':'.sql';
					for ($i=1;$i<($dump['part']-$dump['part_offset']);$i++)
					{
						$mpdatei=$dateistamm.$i.$dateiendung;
						clearstatcache();
						$sz=byte_output(@filesize($config['paths']['backup'].$mpdatei));
						$out.= $lang['file'].' <a href="'.$config['paths']['backup'].$mpdatei.'" class="smallblack">'.$mpdatei.' ('.$sz.')</a> '.$lang['dump_successful'].'<br>';
					}
				}
				else
				{
					clearstatcache();
					$out.=$lang['finished'].'<br><div class="backupmsg"><a href="'.$config['paths']['backup'].$dump['backupdatei'].'" class="smallblack">'.$dump['backupdatei'].' ('.byte_output(filesize($config['paths']['backup'].$dump['backupdatei'])).')</a><br>';
				}
				if ($config['send_mail']==1) DoEmail();

				for ($i=0;$i<3;$i++)
				{
					if($config['ftp_transfer'][$i]==1) DoFTP($i);
				}
				if(isset($flipped[$adbname])) $dump['dbindex']=$flipped[$adbname];
				$dump['part_offset']=$dump['part']-1;
				$out.='</div><br>';
				new_file();
			}
			$aktuelle_tabelle=$dump['table_offset'];
			if ($dump['zeilen_offset']==0)
			{
				if($config['minspeed']>0)
				{
					$dump['anzahl_zeilen']=$config['minspeed'];
					$dump['restzeilen']=$config['minspeed'];
				}
				$dump['data'].= get_def($adbname,$table);
				if ($dump['data']===false)
				{
					echo sprintf($lang['fatal_error_dump'],$table,$adbname);
					die();
				}
				$dump['structure'].=get_def($adbname,$table,0);
			}
			WriteToDumpFile();
			get_content($adbname,$table);
			$dump['restzeilen']--;
			if($config['memory_limit']>0 && strlen($dump['data'])>$config['memory_limit']) WriteToDumpFile();
		}
	}

	/////////////////////////////////
	// Anzeige - Fortschritt
	/////////////////////////////////

	if($config['multi_dump']==1)
	{
		$mudbs='';
		$count_dbs=count($databases['multi']);
		for($i=0;$i<$count_dbs;$i++)
		{
			$a.=$databases['multi'][$i];
			if($databases['Name'][$dump['dbindex']]==$databases['multi'][$i])
				$mudbs.= '<span class="active_db">'.$databases['multi'][$i].'&nbsp;&nbsp;</span> ';
			else
				$mudbs.= '<span class="success">'.$databases['multi'][$i].'&nbsp;&nbsp;</span> ';
		}
	}
	if($config['multi_part']==1) $aus[]= '<h5>Multipart-Backup: '.$config['multipartgroesse1'].' '.$mp2[$config['multipartgroesse2']].'</h5>';

	$aus[]= '<h4>'.$lang['dump_headline'].'</h4>';

	if($dump['kommentar']>'') $aus[]= $lang['comment'].': <span><em>'.$dump['kommentar'].'</em></span><br>';
	$aus[]=($config['multi_dump']==1) ? $lang['db'].': '.$mudbs :  $lang['db'].': <strong>'.$databases['Name'][$dump['dbindex']].'</strong>';
	$aus[]=(($databases['praefix'][$dump['dbindex']]!='') ?' ('.$lang['withpraefix'].' <span>'.$databases['praefix'][$dump['dbindex']].'</span>)' : '').'<br>';
	if(isset($tbl_sel)) $aus[]= $msgTbl.'<br><br>';

	if($config['multi_part']==1)
	{
		$aus[]= '<span>Multipart-Backup File <strong>'.($dump['part']-$dump['part_offset']-1).'</strong></span><br>';
		$aus2=', '.($dump['part']-1).' files';
	}
	$aus[]=$lang['dump_filename'].'<b>'.$dump['backupdatei'].'</b><br>'
		.$lang['charset'].': <strong>'.$dump['dump_encoding'].'</strong>'

		.'<br>'.$lang['filesize'].': <b>'.byte_output($dump['filesize']).'</b><br><br>'.$lang['gzip_compression'].' <b>';
	$aus[]=($config['compression']==1) ? $lang['activated'] : $lang['not_activated'];
	$aus[]='</b>.<br>';

	$table = @substr($dump['tables'][$dump['table_offset']],strpos($dump['tables'][$dump['table_offset']],'|')+1);
	$adbname=@substr($dump['tables'][$dump['table_offset']],0,strpos($dump['tables'][$dump['table_offset']],'|'));

	$sql='SELECT COUNT(*) AS anzahl FROM `'.$table.'`';
	$res=mysql_query($sql);
	if ($res)
	{
		$row=mysql_fetch_object($res);
		$dump['zeilen_total']=intval($row->anzahl);

		if ($dump['zeilen_total']>0) $fortschritt=intval((100*$dump['zeilen_offset'])/$dump['zeilen_total']);
		else $fortschritt=100;

		$aus[]= $lang['saving_table'].'<b>'.($dump['table_offset']+1).'</b> '.$lang['of'].'<b> '.sizeof($dump['tables']).'</b><br>'
			.$lang['actual_table'].': <b>'.$table.'</b><br><br>'
			.$lang['progress_table'].':<br>';

		$aus[]= '<table border="0" width="380"><tr>'
			.'<td width="'.($fortschritt*3).'"><img src="'.$config['files']['iconpath'].'progressbar_dump.gif" alt="" width="'.($fortschritt*3).'" height="16" border="0"></td>'
			.'<td width="'.((100-$fortschritt)*3).'">&nbsp;</td>'
			.'<td width="80" align="right">'.($fortschritt).'%</td>';

		if ($dump['anzahl_zeilen']+$dump['zeilen_offset']>=$dump['zeilen_total'])
		{
			$eintrag=$dump['zeilen_offset']+1;
			$zeilen_gesamt=$dump['zeilen_total'];
			if ($zeilen_gesamt==0) $eintrag=0;
		}
		else
		{
			$zeilen_gesamt=$dump['zeilen_offset']+$dump['anzahl_zeilen'];
			$eintrag=$dump['zeilen_offset']+1;
		}

		$aus[]= '</tr><tr>'
			.'<td colspan="3">'.$lang['entry'].' <b>'.number_format($eintrag,0,',','.').'</b> '.$lang['upto'].' <b>'
			.number_format(($zeilen_gesamt),0,',','.').'</b> '.$lang['of'].' <b>'
			.number_format($dump['zeilen_total'],0,',','.').'</b></td></tr></table>';

		$dump['tabellen_gesamt']=(isset($dump['tables'])) ? count($dump['tables']) : 0;

		$noch_zu_speichern=$dump['totalrecords']-$dump['countdata'];
		$prozent= ($dump['totalrecords']>0) ? round(((100*$noch_zu_speichern)/$dump['totalrecords']),0) : 100;
		if ($noch_zu_speichern==0 || $prozent>100) $prozent=100;

		$aus[]= "\n".'<br>'.$lang['progress_over_all'].':'."\n"
			.'<table border="0" width="550" cellpadding="0" cellspacing="0"><tr>'
			.'<td width="'.(5*(100-$prozent)).'"><img src="'.$config['files']['iconpath'].'progressbar_dump.gif" alt="" width="'.(5*(100-$prozent)).'" height="16" border="0"></td>'
			.'<td width="'.($prozent*5).'" align="center"></td>'
			.'<td width="50">'.(100-$prozent).'%</td></tr></table>';

		//Speed-Anzeige
		$fw=($config['maxspeed']==$config['minspeed']) ? 300 : round(($dump['anzahl_zeilen']-$config['minspeed'])/($config['maxspeed']-$config['minspeed'])*300,0);
		if($fw>300)$fw=300;
		$aus[]= '<br><table border="0" cellpadding="0" cellspacing="0"><tr>'
			.'<td class="nomargin" width="60" valign="top" align="center" style="font-size:10px;" >'
			.'<strong>Speed</strong><br>'.$dump['anzahl_zeilen'].'</td><td class="nomargin" width="300">'
			.'<table border="0" width="100%" cellpadding="0" cellspacing="0"><tr>'
			.'<td class="nomargin small" align="left" width="300" nowrap>'
			.'<img src="'.$config['files']['iconpath'].'progressbar_speed.gif" alt="" width="'.$fw.'" height="14" border="0" vspace="0" hspace="0">'
			.'</td></tr></table><table border="0" width="100%" cellpadding="0" cellspacing="0"><tr>'
			.'<td class="nomargin" align="left" nowrap style="font-size:10px;" >'.$config['minspeed'].'</td>'
			.'<td class="nomargin" nowrap style="font-size:10px;text-align:right;" >'.$config['maxspeed'].'</td>'
			.'</tr></table>'."\n".'</td></tr></table>'

			//Status-Text
			.'<p class="small">'.zeit_format(time()-$xtime).', '.$dump['aufruf'].' pages'.$aus2;
		$aus[]= ($dump['errors']>0) ? ', <span style="color:red;">'.$dump['errors'].' errors</span>' : '';
		$aus[]= '</p>';
		if ($out>'') $aus[]= '<div style="position:absolute;width:600px;height:90px;overflow:auto;"><span class="smallgrey">'.$out.'</span></div>';
	}
	//////////////////////////////////////
	// Ende Anzeige
	//////////////////////////////////////

	WriteToDumpFile();

	flush();
	if(!isset($summe_eintraege)) $summe_eintraege=0;

	if ($dump['table_offset']<=$dump['tabellen_gesamt'])
	{
		$dauer=time()-($xtime+$dump['verbraucht']);
		$dump['verbraucht']+=$dauer;
	   	$summe_eintraege+=$dump['anzahl_zeilen'];

		//Zeitanpassung
		if($config['direct_connection']==1) {
			if ($dauer<$dump['max_zeit']) $dump['anzahl_zeilen']=$dump['anzahl_zeilen']*$config['tuning_add'];
			else $dump['anzahl_zeilen']=$dump['anzahl_zeilen']*$config['tuning_sub'];
			$dump['anzahl_zeilen']=round($dump['anzahl_zeilen'],0);
			if($config['minspeed']>0) {if ($dump['anzahl_zeilen']<$config['minspeed']) $dump['anzahl_zeilen']=$config['minspeed'];}
			if($config['maxspeed']>0) {if($dump['anzahl_zeilen']>$config['maxspeed']) $dump['anzahl_zeilen']=$config['maxspeed'];}
		}
		$dump['aufruf']++;
	}
	else
	{
		//Backup fertig
		$dump['data']="\nSET FOREIGN_KEY_CHECKS=1;";
		$dump['data'].="\n".$mysql_commentstring.' EOB - End of backup'."\n\n";
		WriteToDumpFile();
		ExecuteCommand('a');
		chmod($config['paths']['backup'].$dump['backupdatei'],0755);
	    if($config['multi_part']==1)
	    {
			$out.="\n".'<br><div class="backupmsg">';
			$dateistamm=substr($dump['backupdatei'],0,strrpos($dump['backupdatei'],'part_')).'part_';
			$dateiendung=($config['compression']==1) ? '.sql.gz':'.sql';
			clearstatcache();
			for ($i=1;$i<($dump['part']-$dump['part_offset']);$i++)
			{
				$mpdatei=$dateistamm.$i.$dateiendung;
				$sz=byte_output(@filesize($config['paths']['backup'].$mpdatei));
				$out.= "\n".$lang['file'].' <a href="'.$config['paths']['backup'].$mpdatei.'" class="smallblack">'.$mpdatei.' ('.$sz.')</a> '.$lang['dump_successful'].'<br>';
			}

		}
		else $out.="\n".'<div class="backupmsg">'.$lang['file'].
				' <a href="'.$config['paths']['backup'].$dump['backupdatei'].'" class="smallblack">'.$dump['backupdatei'].' ('.byte_output(filesize($config['paths']['backup'].$dump['backupdatei'])).')'
				.'</a>'.$lang['dump_successful'].'<br>';

		$backup_ready=1;
	    $xtime=time()-$xtime;
		$aus=Array();
		$aus[]= '<br>'."\n";
		if($config['multi_dump']==1)
		{
			WriteLog('Dump \''.$dump['backupdatei'].'\' finished.');
			WriteLog('Multidump: '.count($databases['multi']).' Databases in '.zeit_format($xtime).'.');
		}
		else WriteLog('Dump \''.$dump['backupdatei'].'\' finished in '.zeit_format($xtime).'.');

		if ($config['send_mail']==1) DoEmail();
		for ($i=0;$i<3;$i++)
		{
			if($config['ftp_transfer'][$i]==1) DoFTP($i);
		}

		$aus[]= '<strong>'.$lang['done'].'</strong><br>';

		if($config['multi_dump']==1)
		{
			$aus[]= sprintf($lang['multidump'],count($databases['multi'])).': ';
			$aus[]='<strong>'.implode(', ',$databases['multi']).'</strong>';
		}
		else
		{
			$aus[]= '<br>'.sprintf($lang['dump_endergebnis'],$num_tables,number_format($dump['countdata'],0,',','.'));
		}
		if($dump['errors']>0) $aus[]=sprintf($lang['dump_errors'],$dump['errors']);

		$aus[]='<form action="" method="POST">'.$out.'<br>'
			.'<p class="small">'.zeit_format($xtime).', '.$dump['aufruf'].' pages'.$aus2.'</p></div>'."\n";
		$aus[]= "\n".'<br><input class="Formbutton" type="button" value="'.$lang['back_to_control'].'" onclick="self.location.href=\''.$relativ_path.'filemanagement.php\'">';
		$aus[]= '&nbsp;&nbsp;&nbsp;<input class="Formbutton" type="button" value="'.$lang['back_to_minisql'].'" onclick="self.location.href=\''.$relativ_path.'sql.php\'">';
		$aus[]= '&nbsp;&nbsp;&nbsp;<input class="Formbutton" type="button" value="'.$lang['back_to_overview'].'" onclick="self.location.href=\''.$relativ_path.'main.php?action=db&amp;dbid='.$dump['dbindex'].'#dbid\'"><br><br>';
		$aus[]='</form>';

		$DumpFertig=1;
	}
}


//=====================================================================
//================= Anzeige ===========================================
//=====================================================================

//Seite basteln
$aus=array_merge($aus_header,$aus);

$dump['xtime']=$xtime;
if ($DumpFertig!=1)
{
	$page_parameter=get_page_parameter($dump);
	$pagefooter='';
	$selbstaufruf=$page_parameter.'<script language="javascript" type="text/javascript">setTimeout("document.dump.submit()", 10);</script></div>';
}
else
{
//	$pagefooter='<p align="center" class="small"><a class="small" href="http://www.daniel-schlichtholz.de" target="_blank">Daniel Schlichtholz & Steffen Kamper</a> - Infoboard: <a class="small" href="'.$config['homepage'].'" target="_blank">'.$config['homepage'].'</a></p>';

	$pagefooter=MSDFooter('',1);
	$selbstaufruf='';
}
$complete_page=$pageheader.implode("\n",$aus)."\n".$selbstaufruf."\n".$pagefooter;
echo $complete_page;
ob_end_flush();
?>