import app from "../../server";
import request, { Response } from "supertest";
import { assert } from "chai";



describe("Authorization and Authentication", function () {
  before(async function () {
    await app.isReadyPromise;
  });

  describe("HealthCheck", function () {
    it("checks the health", function (done) {
      request(app)
        .get("/v1/healthCheck")
        .expect(200)
        .end(function (err: Error, res: Response) {
          if (err) return done(err);
          assert.equal(res.body.healthy, true);
          done();
        });
    });
  });
});
