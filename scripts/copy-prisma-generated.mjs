import { rmSync, mkdirSync, cpSync } from "node:fs";

const src = "src/generated/prisma";
const dest = "dist/generated/prisma";

rmSync(dest, { recursive: true, force: true });
mkdirSync("dist/generated", { recursive: true });
cpSync(src, dest, { recursive: true });
