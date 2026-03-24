<p align="center">
  <img
    src="https://raw.githubusercontent.com/varavelio/vdl/9cb8432f972f986ba91ffa1e4fe82220a8aa373f/assets/png/vdl.png"
    alt="VDL logo"
    width="130"
  />
</p>

<h1 align="center">VDL Plugin Meta</h1>

<p align="center">
  Generate VDL Intermediate Representation (IR) as JSON.
</p>

`vdl-plugin-meta` exports your VDL schema IR into a JSON file so your apps can inspect schema structure at runtime.

Use it when you want reflection-like capabilities such as:

- build dynamic forms from schema fields
- inspect RPCs, inputs, and outputs
- power schema explorers and internal tooling
- validate or transform data using schema metadata

## Quick usage

In your `vdl.config.vdl`:

```vdl
const config = {
  version 1
  plugins [
    {
      src "varavelio/vdl-plugin-meta@v1.0.0"
      schema "./schema.vdl"
      outDir "./gen"
      options {
        outFile "vdl-meta.json"
        includePositions "false"
      }
    }
  ]
}
```

Then run:

```bash
vdl generate
```

The plugin writes one JSON file inside your `outDir`.

## Plugin behavior

The plugin writes one JSON file containing the VDL IR. The output structure strictly follows the [VDL Intermediate Representation (IR) schema](https://github.com/varavelio/vdl/blob/main/schemas/ir.vdl).

### Options

- `outFile`
  - Output JSON filename.
  - Default: `vdl-meta.json`.

- `includePositions`
  - Include source code position metadata (`position`) from parsed schema nodes.
  - Default: `false`.
  - Set to `"true"` only if your tooling needs file/line/column information.

Example with custom file name and positions enabled:

```vdl
const config = {
  version 1
  plugins [
    {
      src "varavelio/vdl-plugin-meta@v1.0.0"
      schema "./schema.vdl"
      outDir "./gen"
      options {
        outFile "schema.json"
        includePositions "true"
      }
    }
  ]
}
```

## Note

`includePositions` can significantly increase output size. Keep it disabled unless you need source-level diagnostics. The generated JSON may include schema file paths when positions are enabled.

## License

This plugin is released under the MIT License. See [LICENSE](LICENSE).
