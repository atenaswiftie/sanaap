import fs from "fs";
import process from "node:process";
import path from "path";

import { $ } from "execa";

const pkgPath = process.cwd();

async function run() {
  console.log(`[generate] Running for ${pkgPath}`);

  const fillTask = $({
    cwd: pkgPath,
    stderr: process.stderr,
    stdout: process.stdout,
  })`svgr --silent src/icons/svg/fill --template scripts/template/react.cjs --config-file scripts/configs/.svgrrc.fill.cjs`;

  const outlineTask = $({
    cwd: pkgPath,
    stderr: process.stderr,
    stdout: process.stdout,
  })`svgr --silent src/icons/svg/outline --template scripts/template/react.cjs --config-file scripts/configs/.svgrrc.outline.cjs`;

  const coloredTask = $({
    cwd: pkgPath,
    stderr: process.stderr,
    stdout: process.stdout,
  })`svgr --silent src/icons/svg/colored --template scripts/template/react-logo.cjs --config-file scripts/configs/.svgrrc.colored.cjs`;



  await Promise.all([fillTask, outlineTask, coloredTask]);

  const buildDir = path.join(pkgPath, "./src/icons/react");

  const folders = fs
    .readdirSync(buildDir, { withFileTypes: true })
    .filter((dirent) => {
      return dirent.isDirectory();
    })
    .map((dirent) => {
      return dirent.name;
    });

  const indexFile = path.join(pkgPath, "./src/icons/react/index.ts");

  fs.writeFileSync(
    indexFile,
    folders
      .map((folder) => {
        return `export * from './${folder}/index.js';`;
      })
      .join("\n")
  );

  console.log(`[generate] ${pkgPath} built successfully.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
