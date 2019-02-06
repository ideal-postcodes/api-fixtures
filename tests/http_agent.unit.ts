
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


  it("dispatches http request with right defaults", async () => {
    const url = "/";
    const result = {
      result: "Thanks for trying ideal-postcodes.co.uk",
      code: 2000,
      message: "Success",
    };
    const query = { foo: "bar" };
    const scope = nock("https://api.ideal-postcodes.co.uk")
      .get("/")
      .query({ foo: "bar" })
      .reply(HTTP_SUCCESS, result);
    const { body, httpStatus } = await httpAgent({ url, query });
    assert.equal(httpStatus, HTTP_SUCCESS);
    assert.deepEqual(body, result);
    assert.isTrue(scope.isDone());
  });

  it ("dispatches POST request with body", async () => {
    const url = "/";
    const requestBody = { "foo": "bar" };
    const method = "POST";
    const scope = nock("https://api.ideal-postcodes.co.uk")
      .post("/", requestBody)
      .reply(HTTP_SUCCESS, {});
    const { body, httpStatus } = await httpAgent({ url, body: requestBody, method });
    assert.equal(httpStatus, HTTP_SUCCESS);
    assert.deepEqual(body, {});
    assert.isTrue(scope.isDone());
  });

  it ("allows header, method to be overriden", async () => {
    const url = "/";
    const headers = {
      "Content-Type": "application/xml",
      "Foo": "Bar",
    };
    const method = "HEAD";
    const scope = nock("https://api.ideal-postcodes.co.uk", { reqheaders: headers })
      .head("/")
      .reply(HTTP_SUCCESS, {});
    const { body, httpStatus } = await httpAgent({ url, method, headers });
    assert.equal(httpStatus, HTTP_SUCCESS);
    assert.deepEqual(body, {});
    assert.isTrue(scope.isDone());
  });
});

