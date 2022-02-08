---
permalink: /docs/installation/
prev: ../
---

# Installation

Looking to quickly add **Charts.css** to your project? You can [download](#download) the stylesheet file, use a [CDN](#cdn), or use a [package manager](#package-manager).

## Download

To download **Charts.css** latest release, visit our GitHub repository:

[https://github.com/ChartsCSS/charts.css/releases](https://github.com/ChartsCSS/charts.css/releases)

Open the ZIP file and copy the `dist/charts.min.css` file to your project.

Next, you need to load the CSS file in your HTML document. Paste the stylesheet path to your `<link>` tag and place it inside the document `<head>`.

```html
<link rel="stylesheet" href="path/to/your/charts.min.css">
```

## CDN

Alternatively, you can use a CDN. Copy one of the following `<link>` tags and paste it inside the document `<head>`.

Use [jsdelivr](https://www.jsdelivr.com/package/npm/charts.css) CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
```

Or [unpkg](https://unpkg.com/browse/charts.css/) CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/charts.css/dist/charts.min.css">
```


## Package Manager

If you are developing a Node.js powered application, you can pull **Charts.css** source files using your favorite package manager.

Install using [npm](https://www.npmjs.com/package/charts.css):

```bash
npm install charts.css
```

Or using [yarn](https://classic.yarnpkg.com/en/package/charts.css):

```bash
yarn add charts.css
```

Then import it in your project:
```javascript
import 'charts.css';
```
