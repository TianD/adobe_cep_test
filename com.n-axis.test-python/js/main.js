/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();


    function init() {

        themeManager.init();

        $("#cep_btn").click(function () {
            csInterface.evalScript('sayHello()');
        });
        $("#python_btn").click(function () {
            const exec  = require('child_process').exec;
            exec('python C:\\Users\\29808\\AppData\\Roaming\\Adobe\\CEP\\extensions\\com.n-axis.test-python\\python\\hello_python.py d:/aaab.png', function (err, stdout, stderr) {
            });
        });
    }

    init();

}());

