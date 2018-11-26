# Vue 2 + router + vuex + bundle analiser + prerender boilerplate

This boilerplate is advanced version of [this one](https://github.com/chrisvfritz/prerender-spa-plugin/tree/master/examples/vue2-webpack-router)

Demonstrates usage of Vue 2 with Vue Router, Vuex and Bundle Analiser with Webpack 4. Prerender is avalible as well. To select routes to prerender edit 106 line in `webpack.config.js`

## Build

```bash
yarn
yarn build
```

Now check the new `dist` directory for your prerendered static files

To view the rendered files run static server from `./dist`. For example python static server

```bash
python -m SimpleHTTPServer 8000
```

Now visit the [http://localhost:8000/](http://localhost:8000/) in your browser

## Development

```bash
yarn
yarn serve
```

@ Igor Tarakanov 2018