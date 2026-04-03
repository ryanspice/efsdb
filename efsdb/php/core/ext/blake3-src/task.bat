call phpize 2>&1
call configure --with-php-build="..\deps" --enable-blake3 --with-mp="disable" 2>&1
nmake /nologo 2>&1
exit %errorlevel%
