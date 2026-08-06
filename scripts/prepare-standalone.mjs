import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";

const standaloneDir = ".next/standalone";

if (!existsSync(standaloneDir)) {
  throw new Error("Next.js standalone output was not created.");
}

rmSync(`${standaloneDir}/public`, { force: true, recursive: true });
cpSync("public", `${standaloneDir}/public`, { recursive: true });

mkdirSync(`${standaloneDir}/.next`, { recursive: true });
rmSync(`${standaloneDir}/.next/static`, { force: true, recursive: true });
cpSync(".next/static", `${standaloneDir}/.next/static`, { recursive: true });

console.log("Prepared .next/standalone for Hostinger.");
