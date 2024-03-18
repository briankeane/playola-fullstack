"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
describe("Authorization and Authentication", function () {
    before(async function () {
        await server_1.default.isReadyPromise;
    });
    describe("HealthCheck", function () {
        it("checks the health", function (done) {
            (0, supertest_1.default)(server_1.default)
                .get("/v1/healthCheck")
                .expect(200)
                .end(function (err, res) {
                if (err)
                    return done(err);
                chai_1.assert.equal(res.body.healthy, true);
                done();
            });
        });
    });
});
//# sourceMappingURL=healthCheck.api.test.js.map