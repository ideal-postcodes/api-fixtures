import { Resource } from "../generate/resource";
import { Fixture } from "../generate/index";
import { httpAgent } from "../generate/http_agent";
import { toString, loadSecrets } from "../generate/util";
import { resolve } from "path";
import { Definition } from "../lib/index";
import { writeFileSync } from "fs";

// Import definitions
import postcodes from "../generate/definitions/postcodes";

interface ResourceDefinition {
  [key: string]: Definition[];
}

const resourceDefinitions: ResourceDefinition = { postcodes };

const BASE_DIR = resolve(__dirname, "../");
const FIXTURES_DIR = resolve(__dirname, "../lib/fixtures");

const resourceNames = Object.keys(resourceDefinitions);
const secrets = loadSecrets(BASE_DIR);


const write = (fixture: Fixture, resourceName: string): void => {
  const { name } = fixture.definition;
  const path = resolve(FIXTURES_DIR, `${resourceName}/${name}.ts`);
  writeFileSync(path, toString(fixture), { encoding: "utf8" });
};

const main = async () => {
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
}

main();

