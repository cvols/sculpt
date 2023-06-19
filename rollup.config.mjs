import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';

import packageJson from "./package.json" assert { type: "json" };

// external: ["react-dom", [/\.css$/], "styled-components"],
// plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" }), postcss()],
export default [
  {
    input: "src/index.ts",
    external: ["react-dom", "styled-components"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
    globals: { "styled-components": "styled" },
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  }
];
