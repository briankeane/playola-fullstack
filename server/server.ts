import bodyParser from 'body-parser';
import compression from 'compression';
import express, { Express, Response, Request, NextFunction} from 'express';
import bearerToken from 'express-bearer-token';
import http from 'http';
import { addRoutes } from "./api/routes";
import morgan from 'morgan';
// const { sequelize } = require('./db');
import logger from './logger';
// const eventStream = require('./lib/events');

declare module 'express' {
  export interface CustomExpress extends Express {
    isReadyPromise: Promise<void>
  }
}

const port = process.env.PORT || 3000;
const app: Express = express();

app.all('*', function (req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization'
  );
  if ('OPTIONS' === req.method) {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(bearerToken());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function subscriptionCallback() {
  logger.log('ToDo: Subscribe for events here');
}

// let setupPromises = [sequelize.sync().then(sequelize.authenticate())];
let setupPromises: any[] = [];

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
  // setupPromises.push(eventStream.connectWithRetry(subscriptionCallback));
}

app.isReadyPromise = new Promise((resolve, reject) => {
  return Promise.all(setupPromises)
    .then(() => {
      return resolve();
    })
    .catch((err) => logger.error(err));
});

const server = http.createServer(app);
addRoutes(app);

if (require.main === module) {
  server.listen(port);
}

export default app;
