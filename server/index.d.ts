import { Express } from 'express';

declare module 'express-serve-static-core' {
  interface Express {
    isReadyPromise: Promise<void>;
  }
}
