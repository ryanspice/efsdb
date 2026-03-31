<?php
$c = file_get_contents('all_files.txt');
preg_match_all('/\[relativePath\] => (routes\/.*)/', $c, $m);
print_r(array_unique($m[1]));
