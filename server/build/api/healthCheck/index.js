"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthCheck_controller_1 = __importDefault(require("./healthCheck.controller"));
const router = express_1.default.Router();
router.get("/", healthCheck_controller_1.default.index);
module.exports = router;
//# sourceMappingURL=index.js.map