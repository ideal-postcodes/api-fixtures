
import { assert } from "chai";
import nock from "nock";
import { httpAgent } from "../generate/http_agent";

const HTTP_SUCCESS = 200;

describe("httpAgent", () => {
  before(() => {
    nock.disableNetConnect();
  });

  after(() => {
    nock.enableNetConnect();
  });

  const result = {
    result: "Thanks for trying ideal-postcodes.co.uk",
    code: 2000,
    message: "Success",
  };

  const createInterceptor = () => {
    return nock("https://api.ideal-postcodes.co.uk")
      .get("/")
      .query({ foo: "bar" })
      .reply(HTTP_SUCCESS, result);
  };

  it("dispatches http request with right defaults", async () => {
    const scope = createInterceptor();
    const { body, httpStatus } = await httpAgent({
      url: "/",
      query: { foo: "bar" },
    });
    assert.equal(httpStatus, HTTP_SUCCESS);
    assert.deepEqual(body, result);
    assert.isTrue(scope.isDone());
  });
});
