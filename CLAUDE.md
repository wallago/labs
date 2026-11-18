# labs

Storefront for handmade hardware projects, sold in small limited-stock batches.

## Layout

- `flake.nix`: dev shell (`nix develop`) and the lean CI shell (`nix develop .#ci`). Tools the checks run go in `ciTools`, editor-only ones in `devTools`.
- `index.html`: the page shell Vite serves and builds; the app mounts on `#root`.
- `src/main.tsx`: mounts `App`. Keep it thin.
- `src/App.tsx`: the page. A new section is a component in `src/components/`,
  rendered from here.
- `src/components/`: one component per file, its test next to it
  (`Counter.tsx`, `Counter.test.tsx`).
- `public/`: files served as-is at the site root.
- `.github/workflows/pages.yml`: builds `dist/` and deploys it to GitHub Pages
  on every push to `main`. Turn Pages on once in the repo settings (source:
  GitHub Actions).
- `.github/workflows/ci.yml`: one job per `just ci` recipe, each run in the flake's CI shell, plus the Nix flake check and the commit-format check.

<!-- TODO: what this project is for, and where a typical change lands. Claude
     reads this file before every task, so keep it true. -->

## Rules

Standalone rules live in `.claude/rules/` and are imported here. Only files
reachable from `CLAUDE.md` get loaded, so a new rule needs a line below.

@.claude/rules/nix.md

## Commands

`just` is the entry point, not the raw toolchain; `just --list` shows every
recipe.

- `just ci`: the gate. It runs every check CI runs, recipe by recipe, so a
  green `just ci` is a green CI. Run it before calling a change done.
- `just check`, `just test`, `just lint`, `just fmt`: the fast loop.
  `just dev` serves the site; it doesn't exit, so ask the user to run it.

## Constraints

- TypeScript is `strict` with `noUncheckedIndexedAccess`: no `any`, no `!`
  non-null assertions; narrow instead.
- Biome lints with warnings as errors and owns formatting and import order:
  let `biome check --write` format, don't hand-format.
- Tests use Testing Library: query by role or text, as a user would, not by
  class name or test id.
- Dependencies are locked in `pnpm-lock.yaml`; add one with `pnpm add`, and say
  what it buys before pulling it in.
- `editorconfig-checker` holds every file to `.editorconfig`: indentation, final newline, no trailing spaces.
- `typos` runs over the repo. Add a real term to `typos.toml` rather than rewording around it.
- Every link in Markdown is checked. A placeholder URL fails the gate.
- Commit messages are Conventional Commits (`type(scope): subject`); CI checks every commit of a PR with `committed`, and `git-cliff` builds the changelog from them.

## Verifying a change

`just ci` green is the bar. Say which recipes ran when reporting a change.

<!-- TODO: what the gate cannot catch here (hardware, a UI, a remote service),
     and how it gets checked instead. -->
