# careers

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
```
