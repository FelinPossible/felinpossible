<!-- BEGIN SQLUPLOAD -->
	<form action="{SQLUPLOAD.POSTTARGET}" method="post" enctype="multipart/form-data">
	<table class="bordersmall">
	<tr>
		<td>{SQLUPLOAD.LANG_OPENSQLFILE}</td>
		<td><input type="file" name="upfile" class="Formbutton"></td>
		<td><input type="submit" class="Formbutton" name="submit_openfile" value="{SQLUPLOAD.LANG_OPENSQLFILE_BUTTON}"></td>
		<td>{SQLUPLOAD.LANG_SQL_MAXSIZE}: <b>{SQLUPLOAD.MAX_FILESIZE}</b></td>
	</tr>
	</table>
	</form>
<!-- END SQLUPLOAD -->

<div id="ymysqlbox">
	<form action="sql.php" method="post">
		<div id="sqlheaderbox">
			<a href="#" onclick="resizeSQL(0);">
			<img src="{ICONPATH}close.gif" width="16" height="16" alt="" border="0" vspace="0" hspace="0" align="bottom"></a>&nbsp;&nbsp;
			<a href="#" onclick="resizeSQL(1);">
			<img src="{ICONPATH}arrowup.gif" width="16" height="16" alt="show less" border="0" vspace="0" hspace="0" align="bottom"></a>
			&nbsp;<a href="#" onclick="resizeSQL(2);"><img src="{ICONPATH}arrowdown.gif" width="16" height="16" alt="show more" border="0" vspace="0" hspace="0" align="bottom"></a>
			&nbsp;&nbsp;&nbsp;
			<input class="Formbutton" type="button" onclick="document.location.href='{PARAMS}&amp;context=1'" value="{LANG_SQL_BEFEHLE}">
			<!-- BEGIN SQLCOMBO -->
				{SQLCOMBO.SQL_COMBOBOX}&nbsp;&nbsp;
			<!-- END SQLCOMBO -->
			{TABLE_COMBOBOX}&nbsp;
			<input class="Formbutton" type="reset" name="reset" value="reset">&nbsp;
			<input class="Formbutton" type="submit" name="execsql" value="{LANG_SQL_EXEC}">&nbsp;

			&nbsp;&nbsp;<a href="{PARAMS}&amp;readfile=1"  title="read file"><img src="{ICONPATH}openfile.gif" width="16" height="16" alt="read file" border="0"></a>
			&nbsp;&nbsp;<a href="{PARAMS}&amp;search=1" title="Mysql-Search"><img src="{ICONPATH}search.gif" width="16" height="16" alt="" border="0"></a>
			&nbsp;&nbsp;<a href="{MYSQL_REF}" target="_blank" title="Mysql-Hilfe"><img src="{ICONPATH}help16.gif" width="16" height="16" alt="" border="0"></a>
		</div>

		<div>
			<textarea style="height:{BOXSIZE}px;width:100%" name="sqltextarea" rows="4" cols="10" id="sqltextarea">{BOXCONTENT}</textarea>
			<div class="sqlbox-warning" align="center">{LANG_SQL_WARNING}</div>
			<input type="hidden" name="db" value="{DB}">
			<input type="hidden" name="tablename" value="{TABLENAME}">
			<input type="hidden" name="dbid" value="{DBID}">
		</div>
	</form>
</div>
<br>
