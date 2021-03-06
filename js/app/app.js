/*	Main application module
 *
 *	Holds main application window module
 *
 	Main window structure
 	--------------------------------------------
 	| ---------------------------------------- |
 	| |           main title bar             | |
 	| ---------------------------------------- |
 	| ---------------------------------------- |
	| | main views                           | |
	| | ------------------ ----------------- | |
	| | |                | |               | | |
	| | |   tiles view   | |   tile view   | | |
	| | |                | |     (zoom)    | | |
	| | |                | |               | | |
	| | ------------------ ----------------- | |
	| ---------------------------------------  |
	| ---------------------------------------- |
 	| |           main footer bar            | |
 	| ---------------------------------------- |
	--------------------------------------------
*/
define(['main_window'], function(MainWindow) {

	MainWindow.show();

})