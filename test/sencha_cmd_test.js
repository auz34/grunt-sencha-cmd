'use strict';

var grunt = require('grunt'),
    path = require('path');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function endsWith(s, searchString, position) {
  var subjectString = s.toString();
  if (position === undefined || position > subjectString.length) {
    position = subjectString.length;
  }

  position -= searchString.length;
  var lastIndex = subjectString.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}

exports.sencha_cmd = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  minimal_configuration: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('test/actual/sencha_cmd.minimal_configuration0');
    test.deepEqual(actual, {
      command: 'sencha app build',
      options: { cwd: process.cwd() }
    });


    test.done();
  },

  myPackage: function(test) {
    test.expect(2);

    var actual = grunt.file.readJSON('test/actual/sencha_cmd.myPackage0');
    test.equal(actual.command, 'sencha package build');
    test.ok(endsWith(actual.options.cwd, 'packages\\myPackage'));

    test.done();
  },

  multipleEnvs: function(test) {
    test.expect(2);
    var actual0 = grunt.file.readJSON('test/actual/sencha_cmd.multipleEnvs0'),
        actual1 = grunt.file.readJSON('test/actual/sencha_cmd.multipleEnvs1');

    test.deepEqual(actual0, {
      command: 'sencha app build development',
      options: { cwd: process.cwd() }
    });

    test.deepEqual(actual1, {
      command: 'sencha app build production',
      options: { cwd: process.cwd() }
    });

    test.done();
  }
};
