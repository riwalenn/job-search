# fake careers project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Vuex documentation 
```

[Vuex documentation on dispatching actions with the dispatch Method](https://vuex.vuejs.org/guide/actions.html#dispatching-actions)
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
npm run lint --fix 
```

### TailwindCss Plugin
```
Preview of the resulting CSS for classes on hover : ctrl + Q on Windows or F1 on Mac
Preferences > Editor > General > Code Completion > [X] Show the documentation popup
```
See [Solution on JetBrains](https://youtrack.jetbrains.com/issue/WEB-52736).

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Components calls
```
<MainNav />
<MainNav></MainNav>
<main-nav></main-nav>
<main-nav />
```

### Pictures
- https://careers.google.com/jobs/dist/img/assets/hero-03_1x.085e94af78d9906f55c83d558eca4453.png
- https://careers.google.com/jobs/dist/img/assets/hero-04_1x.5377e160fa426c8b388a861f23cc185b.png
- https://careers.google.com/jobs/dist/img/assets/hero-02_1x.ccad21962c34a5560e19fdee20717428.png
- https://careers.google.com/jobs/dist/img/assets/hero-01_1x.6edcfb8c57f30c2566faefba9c92ed8b.png
- https://careers.google.com/jobs/dist/img/assets/hero_1x.8a69262ba100bad42a0e3f7520dc7ab1.png

### Notes
```
beforeCreate() {
    console.log("component is about to be created");
  },
  created() {
    console.log("component has been created");
  },
  beforeMount() {
    console.log("component is about to be mounted");
  },
  mounted() {
    console.log("component has been mounted in the DOM");
  },
```

### Json Server
```
ajouter Json Server dans le fichier package.json (scripts) : "backend (n'importe quel nom)": "json-server --watch db.json"
lancer le service npm run backend

ne pas oublier le fichier d'environnement
```
