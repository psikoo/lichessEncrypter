@echo off
set mode=%1
set gameID=%2
node .\scr\getPGN.js %mode% %gameID%
PAUSE