import { build } from "esbuild";

//
// NODE BUILD
//
build({
  entryPoints: ["src/node.entry.ts"],
  bundle: true,
  outfile: "dist/node.bundle.js",
  platform: "node",
  format: "cjs",
  minify: false
}).catch(() => process.exit(1));

//
// GAS BUILD
//
build({
  entryPoints: ["src/gas.entry.ts"],
  bundle: true,
  outfile: "build/gas.bundle.js",
  platform: "browser",
  format: "iife",
  minify: false,
  banner: {
    js: "/* GAS build - no imports/exports */"
  }
}).catch(() => process.exit(1));
