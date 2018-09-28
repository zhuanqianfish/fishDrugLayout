<?php

$file = $_GET['file'];
$html = file_get_contents($file);
echo $html;