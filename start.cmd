@echo off
set mode=%1
set content=%2
node .\scr\generatePGN.js %mode% %content%
node .\scr\postPGN.js
node .\scr\getPGN.js