#Workspace use case
If you are working withing workspace and separate packages you may want to build packages one by one.
In this case corresponding grunt task configuration would look like following one:

```js
grunt.initConfig({
  sencha_cmd: {
    myPackage: {
      scope: 'package',
      packageName: 'myPackage'
    }    
  }
});
```

# Test it right away

1. Generate workspace
```shell
sencha generate workspace <path to your workspace>  
```

2. Generate package
```shell
sencha generate package myPackage  
```

2. Make sure you have nodejs, npm and grunt-cli installed 

3. Copy "package.json" and "Gruntfile.js" into workspace folder folder (<path to your workspace>)

4. Install all packages referenced in in the package.json executing following command
```shell
npm install  
```

5. Run grunt task
```shell
grunt sencha_cmd  
```
