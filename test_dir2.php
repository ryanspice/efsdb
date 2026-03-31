<?php
$p = str_replace('\\', '/', __DIR__) . '/projects/examples/angular';
echo $p . "\n";
var_dump(is_dir($p));
