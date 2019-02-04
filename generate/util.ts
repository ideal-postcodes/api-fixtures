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

