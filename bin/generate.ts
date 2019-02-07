import { Resource } from "../generate/resource";
import { Fixture } from "../generate/index";
import { httpAgent } from "../generate/http_agent";
import { toString, loadSecrets } from "../generate/util";
import { resolve } from "path";
import { Definition } from "../lib/index";
import { writeFileSync } from "fs";

interface ResourceDefinition {
  [key: string]: Definition[];
}

// Import definitions
import postcodes from "../generate/definitions/postcodes";
import addresses from "../generate/definitions/addresses";
import autocomplete from "../generate/definitions/autocomplete";
import keys from "../generate/definitions/keys";
import udprn from "../generate/definitions/udprn";
import umprn from "../generate/definitions/umprn";
import errors from "../generate/definitions/errors";

const resourceDefinitions: ResourceDefinition = {
  postcodes,
  addresses,
  autocomplete,
  keys,
  udprn,
  umprn,
  errors,
};

const BASE_DIR = resolve(__dirname, "../");
const FIXTURES_DIR = resolve(__dirname, "../lib/fixtures");

const secrets = loadSecrets(BASE_DIR);

const write = (fixture: Fixture, resourceName: string): void => {
  const { name } = fixture.definition;
  const path = resolve(FIXTURES_DIR, `${resourceName}/${name}.ts`);
  writeFileSync(path, toString(fixture), { encoding: "utf8" });
};

const main = async () => {
  const resourceNames = Object.keys(resourceDefinitions);
  for (const resourceName of resourceNames) {
    const definitions = resourceDefinitions[resourceName];
    const resource = new Resource({ definitions, httpAgent, secrets });
    const fixtures = await resource.generateFixtures();
    fixtures.forEach((fixture, i) => {
      const cleanDefinition = definitions[i];
      fixture.definition = cleanDefinition;
      write(fixture, resourceName); 
    });
  }
};

main();

