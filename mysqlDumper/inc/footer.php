<?php
$config_array=(isset($config)) ? "<strong>CONFIG</strong><pre>".@print_r($config,true)."</pre>": "";
$database_array=(isset($database)) ? "<strong>DATABASE</strong><pre>".@print_r($database,true)."</pre>": "";
$dump_array=(isset($dump)) ? "<strong>DUMP</strong><pre>".@print_r($dump,true)."</pre>": "";
$restore_array=(isset($restore)) ? "<strong>RESTORE</strong><pre>".@print_r($restore,true)."</pre>" : "";

echo '<p align="center" class="footer">
    '.$lang['authors'].': <a href="http://www.mysqldumper.de" target="_blank">Daniel Schlichtholz &amp; Steffen Kamper</a> | Infoboard: 
<a href="'.$config['homepage'].'" target="_blank">'.
$config['homepage'].'</a></p>';

echo '</div></body></html>';

?>
