import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts", // entry point for the library
    external: ["react-dom", "styled-components"],
    output: [
      { // commonjs modules
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      { // es6 modules
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss()
    ],
    globals: { "styled-components": "styled" },
  },
  { // typed files
    input: "dist/esm/types/index.d.ts", // entry point for the library for types
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/], // telling rollup anything that is .css|less|scss aren't part of type exports
  },
  {
    input: "src/themes/index.ts",
    output: [{ file: "dist/themes/index.js", format: "cjs" }],
    plugins: [commonjs(), resolve(), typescript({ tsconfig: "./tsconfig.json" })]
  }
];
