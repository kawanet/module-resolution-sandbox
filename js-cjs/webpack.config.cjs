// webpack.config.cjs

const path = require("path");

const config = {
    mode: "production",
    entry: path.resolve(__dirname, "index.cjs"),
    output: {
        filename: "bundled-cjs.js",
        path: path.resolve(__dirname, "../dist/"),
    }
};

console.log(config);

module.exports = config;
