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
  {
    name: "2000-keys-usage",
    description: "API key recent usage statistics",
    url: "/v1/keys/<VALID_API_KEY>/usage",
    query: {
      user_token: "<USER_TOKEN>"
    },
    headers: {},
  },
  {
    name: "2000-keys-private",
    description: "API Key query for private information",
    url: "/v1/keys/<VALID_API_KEY>",
    query: {
      user_token: "<USER_TOKEN>"
    },
    headers: {},
  },
];

export default keys;

