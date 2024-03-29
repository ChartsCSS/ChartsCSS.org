---
permalink: /customization/basic-styling/
prev: ../
---

# Basic Styling

Charts are styled using regular CSS rules. You can apply custom styles on any HTML element or [chart layer](../docs/anatomy/) inside the `<table>` element.

## Style Chart Elements

To style specific chart elements or layers, use one of the HTML tags - `<caption>`, `<tbody>`, `<tr>`, `<th>` or `<td>`.

### Colors

To control the color of different elements, simply use the element selector.

```css
/* Heading */
#my-chart caption {
  color: red;
}

/* Labels */
#my-chart tbody th {
  color: green;
}

/* Data */
#my-chart tbody td {
  color: blue;
}
```

### Backgrounds

To control the backgrounds of different elements, use one of the following selectors.

```css
/* Heading */
#my-chart caption {
  background-color: hotpink;
  color: white;
}

/* Chart */
#my-chart tbody {
  background-color: beige;
  color: black;
}

/* Labels */
#my-chart tbody th {
  background-color: deepskyblue;
  color: blue;
}
```

Display your brand logo as a column chart background.

```css
#my-chart .column tbody {
  background-image: url(path/to/your/logo.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100px 100px;
}
```

### Aspect Ratio

To control the chart width/height ratio, use one of the following selectors.

```css
#my-chart .bar {
  --aspect-ratio: auto;
}

#my-chart .column {
  --aspect-ratio: 21 / 9;
}

#my-chart .area {
  --aspect-ratio: 21 / 9;
}

#my-chart .line {
  --aspect-ratio: 21 / 9;
}

#my-chart .pie {
  --aspect-ratio: 1 / 1;
}
```

## Style Specific Elements

To style specific elements, use any method supported by CSS.

### CSS Selectors

Use CSS `:nth-of-type()` pseudo-class to match the nth data CSS based on the position among siblings.

```html
<tbody>
  <tr>
    <td> 20 </td>
  </tr>
  <tr>
    <td> 40 </td>
  </tr>
  <tr>
    <td> 60 </td>
  </tr>
<tbody>
```

```css
#my-chart tbody tr:nth-of-type(2) td {
  font-weight: bold;
}
```

### CSS Classes

Use custom classes on the element you want to style, and apply custom styles only on that CSS class.

```html
<tr>
  <td> 20 </td>
  <td> 40 </td>
  <td> 60 </td>
  <td> 80 </td>
  <td class="highlight"> 100 </td>
</tr>
```

```css
.highlight {
  font-weight: bold;
}
```

## Style with CSS Variables

**Charts.css** offers several [custom CSS variables](../development/supported-features/#variables) to style different chart elements.

Use CSS variables on different chart types.

```css
#my-chart .bar {
  --color: red;
  --labels-size: 150px;
  --labels-align-inline: start;
  --labels-align-block: center;
}

#my-chart .column {
  --aspect-ratio: 21 / 9;
  --primary-axis-color: blue;
  --primary-axis-width: 3px;
}

#my-chart .area {
  --aspect-ratio: 16 / 9;
  --data-axes-color: grey;
}

#my-chart .line {
  --line-size: 3px;
  --color: black;
  --aspect-ratio: 4 / 3;
  --labels-size: 3rem;
}

#my-chart .pie {
  --aspect-ratio: 1 / 1;
  --primary-axis-color: blue;
}

#my-chart .legend {
  --legend-border-width: 2px;
  --legend-border-style: solid;
  --legend-border-color: brown;
}
```
