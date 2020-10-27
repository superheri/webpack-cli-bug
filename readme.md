# Test repo for reproducing a bug with historyApiFallback

## webpack-cli@3

To start the project with `webpack-cli@3` just run the command `npm run watch` after installing `webpack-cli@5` if it is not already installed.

When testing in a browser, both urls `http://localhost:3000/b` and `http://localhost:3000/b/anything` will return the `b/index.html` file.

## webpack-cli@4

To start the project with `webpack-cli@4` just run the command `npm run watch-cli-4` after installing `webpack-cli@4` if it is not already installed.

When testing in a browser, `http://localhost:3000/b` will return the `b/index.html` file and `http://localhost:3000/b/anything` will return the `/index.html` file.
