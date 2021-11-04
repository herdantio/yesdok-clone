# yesdok-clone
This is a simple YesDok webapp clone for technical test. The app is built using 
vue 2.x and Bootstrap-vue. I'm using SCSS as css preprocessor, vue router for routing, and
vuex as state management.

This project implements atomic component design to enforce component reusability. 
The components are separated by its complexity into several parts, atoms, molecules, 
organisms, templates, and pages, which increasing in component complexity. This webapp also
responsive to a certain degree. The states managed by  vuex are separated into modules. Some
components like atoms and templates, doesn't have inner state or connected to vuex module. Those
components only rely on props to get data and in some cases doesn't contain any data.

Live URL: 
https://yesdok-clone.web.app/
https://yesdok-clone.firebaseapp.com/

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
