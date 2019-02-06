import { Definition } from "../../lib/index";

const keys: Definition[] = [
  {
    name: "4042-keys-invalid",
    description: "Key does not exist",
    url: "/v1/keys/foo",
    query: {},
    headers: {},
  },
  {
    name: "2000-keys",
    description: "Available API Key",
    url: "/v1/keys/iddqd",
    query: {},
    headers: {},
  },
  {

    name: "2000-keys-unavailable",
    description: "Unavailable API Key",
    url: "/v1/keys/idkfa",
    query: {},
    headers: {},
  },
];

export default keys;

