import { Resource } from "../generate/resource";
import { HttpResponse } from "../generate/index";
import { httpAgent } from "../generate/http_agent";
import { toString, loadSecrets } from "../generate/util";
import { Definition } from "../lib/index";
import { resolve } from "path";
import { writeFileSync } from "fs";
import { resourceDefinitions } from "../generate/definitions/index";

const BASE_DIR = resolve(__dirname, "../");
const FIXTURES_DIR = resolve(__dirname, "../lib/fixtures");

const secrets = loadSecrets(BASE_DIR);

const write = (
  content: { response: HttpResponse; definition: Definition },
  resourceName: string
): void => {
  const { definition, response } = content;
  const { name } = definition;
  const path = resolve(FIXTURES_DIR, `${resourceName}/${name}.ts`);
  writeFileSync(path, toString(response, definition), { encoding: "utf8" });
};

const main = async () => {
  const resourceNames = Object.keys(resourceDefinitions);
  for (const resourceName of resourceNames) {
    const definitions = resourceDefinitions[resourceName];
    const resource = new Resource({ definitions, httpAgent, secrets });
    const responses = await resource.generate();
    responses.forEach((response, i) => {
      const definition = definitions[i];
      write({ response, definition }, resourceName);
    });
  }
  // Update timestamp
  const now = new Date().toJSON();
  const timestampFile = resolve(BASE_DIR, "last_run");
  writeFileSync(timestampFile, now, { encoding: "utf8" });
};

main();
