"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
async function main() {
    (0, index_1.setAccessToken)("YOUR_BEARER_TOKEN");
    const res = await (0, index_1.Log)("backend", "info", "handler", "Logging Middleware Test");
    console.log(res);
}
main();
