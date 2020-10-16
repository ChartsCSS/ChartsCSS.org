---
permalink: /components/title/
---

# Title

A title is a heading briefly describing the content of the element. Semantically speaking, any content on the page should have a heading.

## Heading Types

### Document Headings

Document headings are defined using `<h1>` to `<h6>` tags depending on the document flow, regardless if the content is a chart, a text or some kind of media.

```html{1}
<h2> Heading </h2>
...
Content
...
```

### Table & caption

When displaying data in a `<table>`, use the `<caption>` tag to define the chart title. Captions can be displayed [above or below](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side) the data.

```html{2,4}
<table>
  <caption> Caption above the chart </caption>
  ...
  <caption> Caption below the chart </caption>
</table>
```

### Figure & figcaption

When displaying data in a `<figure>`, use the `<figcaption>` tag to define the chart title. Figure captions can be displayed above or below the data.

```html{2,4}
<figure>
  <figcaption> Caption above the chart </figcaption>
  ...
  <figcaption> Caption below the chart </figcaption>
</figure>
```

## Display

Note that the current version of **Chart.css** doesn't display captions. You can use `<h1>` to`<h6>` headings to add a brief description above your chart.
