var CarteBlanche = require('carte-blanche');

module.exports = {
    entry: {
        helloWorld: [
           './js/main'
        ]
    },
    output: {
        filename: 'public/[name].js'
    },
    plugins: [
      new CarteBlanche({
        componentRoot: 'js/components'
      })
    ],
    module: {
      loaders: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          loader: "babel",
          query:
            {
              presets:['react', 'es2015']
            }
        },
        { test: /\.css$/, loader: "style!css" },
        { test: /\.(eot|woff|woff2|ttf|svg)$/, loader: 'url?limit=100000' }
    ]
    }
};
