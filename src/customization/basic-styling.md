---
permalink: /customization/basic-styling/
prev: ../
---

# Basic Styling

Charts are styled using regular CSS rules. You can apply custom styles on any HTML element or [chart layer](../docs/anatomy/) inside the `<table>` element.

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

## Style Chart Elements

To style specific chart elements or layers, use one of the HTML tag - `<caption>`, `<tbody>`, `<tr>`, `<th>` or `<td>`.

### Colors

To control the color of different elements, simply use element selector.

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
