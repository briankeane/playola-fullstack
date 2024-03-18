import { Express } from 'express';
import healthCheckRouter from "./healthCheck/index.js";

export function addRoutes(app: Express): void {
  app.use("/v1/healthCheck", healthCheckRouter);
}

export default {
  addRoutes
}
