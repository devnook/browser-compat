# &lt;browser-compat> web component

A widget displaying Baseline status of a web feature based on
https://github.com/web-platform-dx/web-features data

<img width="859" alt="baseline_widget_example" src="https://github.com/devnook/browser-compat/assets/1914261/3171ee2d-6949-47c9-8328-b79e467813f7">

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
npm install browser-compat
```

See [docs](https://github.com/devnook/browser-compat/blob/main/docs/index.html)
for example usage in HTML.

See [rollup.config.js](https://github.com/devnook/browser-compat/blob/main/rollup.config.js)
for an example of a bundler configuration.

*Option 2: Precompiled from e.g. CDN.*

```
<script src="https://cdn.jsdelivr.net/npm/browser-compat@0.0.1/browser-compat.min.js" type="module"></script>
<browser-compat feature-id="anchor-positioning"></browser-compat>
```
