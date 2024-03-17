import { Express } from 'express';

export function addRoutes(app: Express): void {
  app.use("/v1/healthCheck", require("./healthCheck"));
}

export default {
  addRoutes
}
