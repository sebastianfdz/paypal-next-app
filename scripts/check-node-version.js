import { readFileSync } from "fs";
import { join } from "path";

import semver from "semver";

const expectedNodeVersion = readFileSync(
  join(__dirname, "../", ".nvmrc"),
  "utf-8"
);

const isValidNodeVersion = semver.satisfies(
  process.version,
  expectedNodeVersion
);

// exit when Node version is invalid
if (!isValidNodeVersion) {
  const output = `
        Node: ${process.version}
        Wanted node version ${expectedNodeVersion}
        `;

  console.error(output);

  process.exit(1);
}
