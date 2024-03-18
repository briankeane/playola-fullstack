import healthCheckRouter from "./healthCheck/index.js";
export function addRoutes(app) {
    app.use("/v1/healthCheck", healthCheckRouter);
}
export default {
    addRoutes
};
