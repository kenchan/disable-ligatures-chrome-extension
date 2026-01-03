# Disable Ligatures

Disable ligatures on all websites.

## 開発

このプロジェクトは [WXT](https://wxt.dev/) を使用して構築されています。

### セットアップ

```bash
pnpm install
```

### 開発モード

```bash
# Chrome/Edge用
pnpm dev

# Firefox用
pnpm dev:firefox
```

### ビルド

```bash
# Chrome/Edge用
pnpm build

# Firefox用
pnpm build:firefox
```

ビルドされた拡張機能は `.output/chrome-mv3/` または `.output/firefox-mv3/` ディレクトリに出力されます。

### 配布用ZIPの作成

```bash
pnpm zip
```
