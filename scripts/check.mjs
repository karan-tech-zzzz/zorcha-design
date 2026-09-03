import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const rootUrl = new URL("../", import.meta.url);
const root = fileURLToPath(rootUrl);
const required = [
  "DESIGN.md",
  "SKILL.md",
  "SOURCES.md",
  "tokens/foundation.css",
  "tokens/tokens.json",
  "tokens/marketing.css",
  "tokens/product.css",
  "templates/marketing-page.html",
  "templates/dashboard-feature.html",
  "examples/free-instagram-dm-automation.html",
  "index.html"
];

const files = [];
async function walk(dir) {
  for (const name of await readdir(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const path = join(dir, name);
    (await stat(path)).isDirectory() ? await walk(path) : files.push(path);
  }
}

await walk(root);
const names = new Set(files.map((file) => relative(root, file)));
const errors = required.filter((file) => !names.has(file)).map((file) => `Missing ${file}`);

for (const file of files.filter((path) => [".html", ".css"].includes(extname(path)))) {
  const content = await readFile(file, "utf8");
  const name = relative(root, file);
  if (content.split("\n").length > 1000) errors.push(`${name} exceeds 1000 lines`);
  if (/\b(?:src|href)=["']https?:\/\//i.test(content) || /url\(["']?https?:\/\//i.test(content)) errors.push(`${name} hotlinks a runtime asset`);
  if (/\{\{[^}]+\}\}/.test(content)) errors.push(`${name} contains an unfinished placeholder`);
}

for (const token of ["--zorcha-primary", "--zorcha-canvas", "--zorcha-surface", "--zorcha-ink"]) {
  for (const file of ["tokens/marketing.css", "tokens/product.css"]) {
    if (!(await readFile(new URL(file, rootUrl), "utf8")).includes(token)) errors.push(`${file} is missing ${token}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Zorcha design check passed (${files.length} files).`);
