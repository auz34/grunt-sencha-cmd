# grunt-sencha-cmd

> Custom plugin created to automate single sencha cmd commands our team executes days in and days out 
> during development time. Under the hood it is a very simple wrapper which calls sencha cmd with parameters 
> corresponding to the options of your grunt task

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sencha-cmd --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sencha-cmd');
```

Please note that grunt file should be placed in the root of your sencha workspace/application folder.

## The "sencha_cmd" task

### Overview
In your project's Gruntfile, add a section named `sencha_cmd` to the data object passed into `grunt.initConfig()`.


####  sencha app build
For the most common scenario when all you need is to build your app no options or configuration required
```js
grunt.initConfig({
  sencha_cmd: {    
  }
});
```

if environment needs to be defined (production, testing, native or package) it can be done by
```js
grunt.initConfig({
  sencha_cmd: {
      environment: 'testing'
  }
});
```