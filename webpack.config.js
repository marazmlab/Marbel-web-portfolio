const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Punkt wejścia aplikacji
  output: {
    path: path.resolve(__dirname, 'dist'), // Katalog wyjściowy
    filename: 'bundle.js', // Nazwa pliku wyjściowego
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Obsługa plików JS i JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Użycie Babel do transpilacji
        },
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module.css$/i,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Rozpoznawane rozszerzenia
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
    }),
  ],
  devServer: {
    static: './public', // Serwowanie plików z katalogu public
    port: 3000, // Port dev servera
    open: true,
  },
  mode: 'development', // Tryb development (możesz zmienić na 'production' przy buildzie)
};