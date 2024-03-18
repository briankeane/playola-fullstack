"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const express_bearer_token_1 = __importDefault(require("express-bearer-token"));
const http_1 = __importDefault(require("http"));
const { addRoutes } = require('./api/routes');
const morgan_1 = __importDefault(require("morgan"));
// const { sequelize } = require('./db');
const logger_1 = __importDefault(require("./logger"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
    if ('OPTIONS' === req.method) {
        res.status(200).end();
    }
    else {
        next();
    }
});
app.use((0, express_bearer_token_1.default)());
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
function subscriptionCallback() {
    logger_1.default.log('ToDo: Subscribe for events here');
}
// let setupPromises = [sequelize.sync().then(sequelize.authenticate())];
let setupPromises = [];
if (process.env.NODE_ENV !== 'test') {
    app.use((0, morgan_1.default)('dev'));
    // setupPromises.push(eventStream.connectWithRetry(subscriptionCallback));
}
app.isReadyPromise = new Promise((resolve, reject) => {
    return Promise.all(setupPromises)
        .then(() => {
        return resolve();
    })
        .catch((err) => logger_1.default.error(err));
});
const server = http_1.default.createServer(app);
addRoutes(app);
if (require.main === module) {
    server.listen(port);
}
exports.default = app;
//# sourceMappingURL=server.js.map