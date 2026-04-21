# Visual artifact generator

Piclaw can generate polished self-contained HTML pages, architecture diagrams,
data tables, diff reviews, slide decks, and draw.io files using its vendored
JavaScript libraries and a consistent visual-design profile.

This capability is delivered through the **`visual-artifact-generator` skill**
and a set of related reference assets.

## What it generates

| Command | Output |
|---|---|
| `generate-web-diagram` | Architecture/system diagrams, flowcharts, sequence, ER, state machines |
| `generate-data-table` | Styled HTML tables for comparisons, audits, matrices, status reports |
| `diff-review` | Visual before/after diff with architecture diagram, code review, decision log |
| `plan-review` | Plan-vs-codebase comparison with requirements matrix and risk assessment |
| `fact-check` | Document accuracy verification against actual code |
| `generate-slides` | Magazine-quality slide deck with keyboard navigation |
| `project-recap` | Mental-model snapshot for context switching |
| `generate-drawio-diagram` | Structured `.drawio` XML for the draw.io editor pane |

## Vendored libraries

Generated artifacts use only Piclaw's vendored libraries — no external CDN
dependencies. See [vendored-widget-libraries.md](vendored-widget-libraries.md)
for the full reference.

| Library | Global | Use for |
|---|---|---|
| `beautiful-mermaid` | `beautifulMermaid` | Diagrams (flowcharts, sequence, ER, etc.) |
| ECharts 5.6 | `echarts` | Charts (bar, line, pie, heatmap, treemap, …) |
| D3 7.9 | `d3` | Custom SVG, force layouts |
| KaTeX | `katex` | Math typesetting |
| IBM Plex Sans | CSS `@font-face` | Body font (OFL 1.1) |
| JetBrains Mono NF | CSS `@font-face` | Code/mono font with Nerd Font glyphs (OFL 1.1) |

> **Mermaid API:** The vendored Mermaid bundle exposes `window.beautifulMermaid`,
> not `window.mermaid`. Always call `beautifulMermaid.renderMermaidSVGAsync()`
> and post-process the result with `fixupMermaidSVG()`.

## Post-processing helper

The `beautiful-mermaid` renderer requires post-processing to fix colors,
rounded corners, and Google Fonts imports. A helper handles this in one call:

```html
<script src="/static/js/vendor/beautiful-mermaid.js"></script>
<script src="/workspace/.pi/skills/visual-artifact-generator/scripts/mermaid-fixup.js"></script>
<script>
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  beautifulMermaid.renderMermaidSVGAsync(source, {
    bg: isDark ? '#1e293b' : '#ffffff',
    fg: isDark ? '#e2e8f0' : '#1f2937',
    // ... other explicit color options
  }).then(svg => {
    container.innerHTML = svg;
    fixupMermaidSVG(container, { isDark });
  });
</script>
```

## Visual design profile

All generated artifacts follow the saved visual-design profile:

- **Style file:** `/workspace/.pi/skills/visual-design/SKILL.md`
- **Preference source:** `/workspace/notes/preferences/visual-design.md`

Key defaults: clean/functional style, minimal density, theme-aware neutral/gray
palette with subtle accents, IBM Plex Sans body, JetBrains Mono NF for code,
orthogonal diagram routing with rounded corners.

## Attribution

The skill is adapted from
[nicobailon/visual-explainer](https://github.com/nicobailon/visual-explainer)
(MIT license) by Nico Bailon. The prompt workflow, anti-slop guidance, and
template conventions are derived from that project and thoroughly adapted for
Piclaw's vendored library environment.

## Output location

Artifacts are written to `/workspace/.pi/artifacts/` by default and opened
via `open_workspace_file` or `attach_file`. The draw.io editor pane handles
`.drawio` files natively.

## Skill location

The full skill specification, commands, and references live under:

```
.pi/skills/visual-artifact-generator/
├── SKILL.md                          ← core skill
├── commands/                         ← prompt templates
│   ├── generate-web-diagram.md
│   ├── generate-data-table.md
│   ├── diff-review.md
│   ├── plan-review.md
│   ├── fact-check.md
│   ├── generate-slides.md
│   ├── project-recap.md
│   └── generate-drawio-diagram.md
├── references/
│   ├── libraries.md                  ← vendored library API and post-processing
│   ├── css-patterns.md               ← theme, cards, grids, tables, animations
│   ├── responsive-nav.md             ← sticky TOC for multi-section pages
│   ├── slide-patterns.md             ← slide deck structure and navigation
│   └── drawio-patterns.md            ← draw.io XML generation patterns
└── scripts/
    └── mermaid-fixup.js              ← SVG post-processing helper
```

## See also

- [Vendored widget libraries](vendored-widget-libraries.md) — full library reference, font paths, widget CSP
- [Architecture](architecture.md) — widget pane and dashboard widget surfaces
- [Tools and skills](tools-and-skills.md) — skill discovery and `/skill:` commands
