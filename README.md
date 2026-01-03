# Disable Ligatures

Disable ligatures on all websites.

## Development

This project is built using [WXT](https://wxt.dev/).

### Setup

```bash
pnpm install
```

### Development Mode

```bash
# For Chrome/Edge
pnpm dev

# For Firefox
pnpm dev:firefox
```

### Build

```bash
# For Chrome/Edge
pnpm build

# For Firefox
pnpm build:firefox
```

The built extension will be output to the `.output/chrome-mv3/` or `.output/firefox-mv3/` directory.

### Create Distribution ZIP

```bash
pnpm zip
```
