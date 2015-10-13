#Plain Application Use Case

If you have simple application and all interaction with Sencha command you need is building application
you can easily achieve this by using in current plugin without any configuration
```js
grunt.initConfig({
  sencha_cmd: {
    app: {}
  }
});
```

# Test it right away
1. Generate your app
```shell
sencha -sdk <path to your sencha distributive> generate app plainApp <path to your app>  
```

2. Make sure you have nodejs, npm and grunt-cli installed 

3. Copy "package.json" and "Gruntfile.js" into main application folder (<path to your app>)

4. Install all packages referenced in in the package.json executing following command
```shell
npm install  
```

5. Run grunt task
```shell
grunt sencha_cmd  
```