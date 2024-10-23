"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = __importDefault(require("./first"));
const second_1 = __importDefault(require("./second"));
console.log("Welcome From Modules");
(0, second_1.default)(first_1.default.FullName, first_1.default.Nationality);
