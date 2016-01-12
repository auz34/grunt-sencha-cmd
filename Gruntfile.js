/*
 * grunt-sencha-cmd
 * https://github.com/auz34/grunt-sencha-cmd
 *
 * Copyright (c) 2015 Andrew Zavgorodniy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      logs: ['test/actual']
    },

    // Configuration to be run (and then tested).
    sencha_cmd: {
      options: {
        log: {
            preventRealExecution: true,
            dest: 'test/actual'
        }
      },
      minimal_configuration: { // should generate sencha app build
      },
      env: {
        environment: 'testing'
      },
      myPackage: {
          scope: 'package',
          packageName: 'myPackage'
      },
      multipleEnvs: {
        environment: ['development', 'production']
      }
    },

    // Unit tests.
    nodeunit: {
        tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'sencha_cmd', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
