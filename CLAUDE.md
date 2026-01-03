# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a browser extension that disables ligatures on all websites by injecting CSS. Built with WXT framework for modern web extension development with Manifest V3 support.

## Architecture

### WXT Framework Structure

- **entrypoints/**: Extension entry points
  - `content.ts`: Content script that runs on all web pages, imports the CSS
- **assets/**: Static assets
  - `disable-ligatures.css`: The core CSS rule with `!important` flag
- **wxt.config.ts**: WXT configuration including extension metadata
- **.output/**: Build output directory (auto-generated, gitignored)
  - `chrome-mv3/`: Chrome/Edge builds (Manifest V3)
  - `firefox-mv3/`: Firefox builds (Manifest V3)

### Key Technical Details

**CSS Injection Strategy**: The extension uses a universal selector (`*`) with `!important` to ensure maximum specificity and prevent websites from overriding the ligature settings. The `!important` flag is critical - without it, websites with strong CSS specificity can re-enable ligatures.

**WXT Auto-Generation**: WXT automatically generates the manifest.json from `wxt.config.ts` and builds TypeScript content scripts. The manifest version, name, and description are defined in `wxt.config.ts`, while package version is in `package.json`.

## Development Commands

### Setup
```bash
pnpm install
```

### Development Mode (with hot reload)
```bash
pnpm dev              # Chrome/Edge
pnpm dev:firefox      # Firefox
```

Load the extension from `.output/chrome-mv3/` or `.output/firefox-mv3/` in your browser's developer mode.

### Build for Production
```bash
pnpm build            # Chrome/Edge
pnpm build:firefox    # Firefox
```

### Create Distribution ZIP
```bash
pnpm zip              # Chrome/Edge
pnpm zip:firefox      # Firefox
```

## Important Notes

- **Version Updates**: Update version in both `package.json` and `wxt.config.ts`
- **CSS Changes**: When modifying CSS, always preserve the `!important` flag on `font-variant-ligatures`
- **Build Verification**: After CSS changes, run `pnpm build` and verify the minified output in `.output/chrome-mv3/content-scripts/content.css`
