/*
 * grunt-sencha-cmd
 * https://github.com/auz34/grunt-sencha-cmd
 *
 * Copyright (c) 2015 Andrew Zavgorodniy
 * Licensed under the MIT license.
 */

'use strict';

var cp = require('child_process'),
    //fs = require('file_system'),
    path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('sencha_cmd', 'Custom plugin created to automate single sencha cmd commands our team executes days in and days out during development time', function() {
      // Merge task-specific and/or target-specific options with these defaults.
      var me = this,
          options = me.options(),
          scope = me.data.scope || 'app',
          task = me.data.task || 'build',
          env = (scope === 'app' && me.data.environment) ? me.data.environment : '',
          sencha = options.pathToSencha || 'sencha',
          cpOptions = {},
          cmd = sencha + ' ' + scope + ' ' + task + ' ' + env,
          done = me.async();

      if (scope !== 'package' && options.applicationDirectory) {
          cpOptions.cwd = options.applicationDirectory;
      } else if (scope === 'package') {
          cpOptions.cwd = path.join(options.applicationDirectory || process.cwd(), 'packages', this.data.packageName);
      }

      if (options.log && options.log.dest) {
          var logFileName = path.join(options.log.dest, this.nameArgs.replace(':', '.'));
          grunt.log.writeln('Log file name:', logFileName);
          grunt.file.write(logFileName, JSON.stringify({
              command: cmd,
              options: cpOptions
          }));

          if (options.log.preventRealExecution) {
              return;
          }
      }

      grunt.log.writeln('Ready to make a call:');
      grunt.log.writeln('Command = ', cmd);
      grunt.log.writeln('Options = ', JSON.stringify(cpOptions));

      cp.exec(cmd, cpOptions,
          function (error, stdout, stderr) {
              console.log('stdout: ' + stdout);
              console.log('stderr: ' + stderr);

              done(error === null);
          });
  });

};
