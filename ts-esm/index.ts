import {createHash} from "sha256-uint8array";

console.log("sha256-uint8array", createHash().update("").digest("hex"));
