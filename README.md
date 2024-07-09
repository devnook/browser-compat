# &lt;browser-compat> web component

A widget displaying Browser Compatibility of a web feature based on
[mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

<img width="860" alt="Screenshot 2024-07-09 at 12 43 35" src="https://github.com/devnook/browser-compat/assets/1914261/94d4e5b5-c4bf-481f-9b2f-3e5956f01bd9">

## Example

Show Browser Compatibility widget for
[anchor-positioning](https://github.com/web-platform-dx/web-features/blob/main/features/anchor-positioning.yml):

```
<browser-compat feature-id="anchor-positioning"></browser-compat>
```

## Usage

*Option 1. Install and bundle with your application*

Install

```
npm install browser-compat-widget
```

See [docs](https://github.com/devnook/browser-compat/blob/main/docs/index.html)
for example usage in HTML.

See [rollup.config.js](https://github.com/devnook/browser-compat/blob/main/rollup.config.js)
for an example of a bundler configuration.

*Option 2: Precompiled from e.g. CDN.*

```
<script src="https://cdn.jsdelivr.net/npm/browser-compat-widget@0.0.1/browser-compat.min.js" type="module"></script>
<browser-compat feature-id="anchor-positioning"></browser-compat>
```
