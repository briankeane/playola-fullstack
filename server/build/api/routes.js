"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoutes = void 0;
function addRoutes(app) {
    app.use("/v1/healthCheck", require("./healthCheck"));
}
exports.addRoutes = addRoutes;
exports.default = {
    addRoutes
};
//# sourceMappingURL=routes.js.map