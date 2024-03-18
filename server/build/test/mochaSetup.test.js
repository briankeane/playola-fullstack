"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Global setup code for mocha tests
 * note: I think this works (executes first) because
 * it is not inside of a describe block.   It still must
 * stay within the '${ROOT}/test' folder.
 */
const server_1 = __importDefault(require("../server"));
before(async function () {
    this.timeout(5000);
    await server_1.default.isReadyPromise;
});
//# sourceMappingURL=mochaSetup.test.js.map