// Entry for the make.fun bounty "Meme Sprint 3: AI Agent Goes Rogue":
// copies entry.png to $MAKEFUN_OUTPUT_DIR/entry.png.
import { copyFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("entry.png written to " + outDir);
