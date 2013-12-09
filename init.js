/* 
 * Chocolat Mixin to support autopep8 indentation for https://chocolatapp.com
 * Author:  Bijan Rahnema b.rahnema@gmail.com
 * Twitter: https://twitter.com/officialhit8run
 * License: MIT
 * Date:    Dec 9th 2013
 */

var execFile = require('child_process').execFile;
var pathToAutopep8Binary = "/usr/local/bin/autopep8" // Change to your autopep8 executable if necessary

Hooks.addMenuItem("Actions/Python/autopep8", "cmd-alt-l", function () {
	var type = Document.current().rootScope();

	if ('python.source'.indexOf(type) !== -1) {
		execFile(pathToAutopep8Binary, ["--aggressive", Document.current().path()], function (error, stdout, stderr) {
			Recipe.run(function (recipe) {
				recipe.text = stdout;
			});
		});
	}
});