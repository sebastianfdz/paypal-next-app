#!/usr/bin/env node

import { join, resolve, dirname } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

const PACKAGE_JSON = "package.json";
const SDK_JS = "__sdk__.js";

const [, , relativePackagePath] = process.argv;

if (!relativePackagePath || !existsSync(relativePackagePath)) {
  throw new Error(`Expected a valid file path`);
}

const packagePath = join(__dirname, "..", PACKAGE_JSON);

if (!existsSync(packagePath)) {
  throw new Error(`Can not find local package.json at ${packagePath}`);
}

const isNodeModules =
  relativePackagePath.indexOf("./node_modules") === 0 ||
  relativePackagePath.indexOf("node_modules") === 0;

const modulePackageDir = resolve(`${relativePackagePath}/${PACKAGE_JSON}`);
const modulePackagePath = dirname(modulePackageDir);
const componentMetaDir = `${modulePackageDir}/${SDK_JS}`;

const finalAliasDir = isNodeModules ? relativePackagePath : modulePackagePath;

const pkg = JSON.parse(readFileSync(packagePath).toString());

if (!existsSync(modulePackageDir)) {
  throw new Error(
    `Expected ${PACKAGE_JSON} to exist in ${modulePackagePath} -- should be a valid npm package`
  );
}

let modulePackage;

try {
  // eslint-disable-next-line security/detect-non-literal-require
  modulePackage = require(modulePackageDir);
} catch (err) {
  throw new Error(
    `Expected to be able to require ${PACKAGE_JSON} from ${modulePackagePath}, got error:\n\n${err.stack}`
  );
}

if (!modulePackage.name) {
  throw new Error(`Expected package at ${modulePackageDir} to have a name`);
}

if (existsSync(componentMetaDir)) {
  try {
    // eslint-disable-next-line security/detect-non-literal-require
    require(componentMetaDir);
  } catch (err) {
    throw new Error(
      `Expected to be able to require ${SDK_JS} from ${packagePath}, got error:\n\n${err.stack}`
    );
  }
}

// eslint-disable-next-line no-console
console.info(`Added alias: ${modulePackage.name} -> ${finalAliasDir}`);

pkg.alias = pkg.alias || {};
pkg.alias[modulePackage.name] = finalAliasDir;

writeFileSync(
  join(__dirname, "..", PACKAGE_JSON),
  JSON.stringify(pkg, null, 2)
);
