// webpack.config.mjs

import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: "production",
    entry: path.resolve(__dirname, "index.mjs"),
    output: {
        filename: "bundled-mjs.js",
        path: path.resolve(__dirname, "../dist/"),
    }
};

console.log(config);

export default config;
