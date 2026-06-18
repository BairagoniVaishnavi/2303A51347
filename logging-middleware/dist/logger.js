"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.setAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const LOG_API = "http://4.224.186.213/evaluation-service/logs";
let accessToken = "";
const setAccessToken = (token) => {
    accessToken = token;
};
exports.setAccessToken = setAccessToken;
const Log = async (stack, level, packageName, message) => {
    if (!accessToken) {
        throw new Error("Access Token not initialized.");
    }
    try {
        const response = await axios_1.default.post(LOG_API, {
            stack,
            level,
            package: packageName,
            message,
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }
    catch (error) {
        console.log(error.response?.data ||
            error.message);
    }
};
exports.Log = Log;
