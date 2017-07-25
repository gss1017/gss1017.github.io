<?php
//文件代理
$data = file_get_contents($_GET['url']);
echo $data;