"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
function index(req, res) {
    res.status(200).json({ healthy: true });
}
exports.index = index;
exports.default = {
    index,
};
//# sourceMappingURL=healthCheck.controller.js.map