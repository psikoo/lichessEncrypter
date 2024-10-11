@echo off
set mode=%1
set content=%2
node .\src\generatePGN.js %mode% %content%
node .\src\postPGN.js
node .\src\getPGN.js
PAUSE