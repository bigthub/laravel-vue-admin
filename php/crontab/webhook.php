<?php
/**
 * Web Hooks
 * User: DEV
 * Date: 2018/10/22
 * Time: 14:36
 */

$pwd = getcwd();
echo $pwd;
$pwd = '~/bus';
$command = 'cd ' . $pwd . ' && git pull';
$output = shell_exec($command);
print $output;

// shell_exec('cd bus/token/app && npm run build');
