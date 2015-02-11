﻿
module.exports = function (grunt) {
    grunt.registerTask('copyapp', function () { //copy the app to the output folder
        shellAppDir = "./atom-shell/resources/app/";
        
        var fs = require('fs-extra');
        fs.mkdirpSync(shellAppDir);
        
        fs.mkdirpSync(shellAppDir + "client");
        fs.copySync("client", shellAppDir + "client");
        fs.mkdirpSync(shellAppDir + "defaults");
        fs.copySync("defaults", shellAppDir + "defaults");
        fs.mkdirpSync(shellAppDir + "resources");
        fs.copySync("resources", shellAppDir + "resources");
        fs.mkdirpSync(shellAppDir + "src");
        fs.copySync("src", shellAppDir + "src");
        
        fs.copySync("index.js", shellAppDir + "index.js");
        fs.copySync("package.json", shellAppDir + "package.json");

        //only copy non-dev modules
        fs.mkdirpSync(shellAppDir + "node_modules");
        var pjson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
        var keys = Object.keys(pjson.dependencies);
        for (var i in keys) {
            fs.copySync("node_modules/" + keys[i], shellAppDir + "node_modules/" + keys[i]);
        }
    });
};