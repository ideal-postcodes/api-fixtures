import { StringMap } from "../lib/index";
import { config } from "dotenv";
import { resolve } from "path";

const SECRET_REGEX = /<[^<]+>/g;

// Extracts secret name from placeholder, e.g. "<FOO>" => "FOO"
export const toSecretName = (placeholder: string): string => {
  return placeholder.replace(/^</, "").replace(/>$/, "");
};

/**
 * replaceSecrets
 *
 * Replaces occurences of a secret placeholder with secret value
 * 
 * E.g. where FOO=foo,BAR=bar
 * "<FOO> something<BAR>else" => "foo somethingbarelse"
 */
export const replaceSecrets = (val: string, secrets: Secrets) => {
  const placeholder = val.match(SECRET_REGEX);
  if (placeholder === null) return val;
  return placeholder.reduce((result: string, placeholder: string) => {
    const secretValue = secrets.get(toSecretName(placeholder));
    if (secretValue === undefined) return result;
    return result.replace(placeholder, secretValue);
  }, val);
};

export type Secrets = Map<string, string>;

// Converts string object to secrets
const toSecrets = (obj: StringMap): Secrets => {
  const result = new Map();
  Object.keys(obj).forEach(key => result.set(key, obj[key]));
  return result;
};

// Loads secrets as .env from directory
// @throws if not found
export const loadSecrets = (directory: string): Secrets => {
  const path = resolve(directory, ".env");
  const { error, parsed={} } = config({ path });
  if (error) throw error;
  return toSecrets(parsed);
}

