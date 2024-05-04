const cases = {
  camel: {
    tok: /[a-z]+(?:[A-Z]\w*?)?/,
    fix: (str: string) =>
      str
        .replace(/([A-Z])/g, " $1")
        .replace(/^.|\s\S/g, (a) => a.toUpperCase()),
  },
  /*
  Camel: {
    tok: /(?:(?:[A-Z][a-z]*?)+)/,
    fix: (str: string) => str.replace(/([a-z])([A-Z])/g, "$1 $2"),
  }, */
  snake: {
    tok: /(?:[a-z]+_\w+)+/,
    fix: (str: string) => str.replace(/_/g, " "),
  },
  else: {
    tok: /(?:.*)/,
    fix: (str: string) => str,
  },
} as {
  [x: string]: TMatchCase;
};

type TMatchCase = {
  /**
   * Regular expression to match string casing
   */
  tok: RegExp;
  /**
   * A function to fix the string to human readable format
   * @param str String to fix
   * @returns Fixed string
   */
  fix: (str: string) => string;
};

type NormalizableCase = keyof typeof cases;

type MatchGroups = {
  [x in NormalizableCase]?: string;
};

const compiled = new RegExp(
  Object.entries(cases).reduce((acc, [key, value]) => {
    return (
      acc + `${!!acc ? "|" : ""}(?<${key}>\^${value.tok.source}\$)`
    );
  }, "")
);

/**
 * Converts a string to a human readable format
 * - camelCase -> Camel Case
 * - snake_case -> Snake Case
 * - CamelCase -> Camel Case
 * cases can be extended by adding to the {@linkcode cases} object
 * @example
 * ```ts
 *    humanReadable("camelCase") // Camel Case
 *
 *    cases = {
 *    ...cases,
 *    custom: {
 *      tok: /(?:[A-Z]([a-z][A-Z])*?)+/, // CuStOmCaSe
 *      fix: (str: string) => str
 *      .replace(/([a-z])([A-Z])/g, "$1 $2")
 *    }}}
 *
 * ```
 * @param str String to convert
 * @returns Human readable string
 * @throws Invalid String if the string does not match any of the cases
 */
export function humanReadable(str: string) {
  const match = compiled.exec(str);

  if (!match) throw new Error("Invalid String: " + str);

  return cases[
    Object.entries(match.groups as MatchGroups).find(
      ([key, value]) => value && key
    )![0] as NormalizableCase
  ].fix(str);
}
