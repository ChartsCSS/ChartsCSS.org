---
permalink: /components/motion-effects/
---

# Motion Effects

Motion effects enhance your charts with user interactions. The simplest example is CSS hover effects. You can add motion effects when the mouse hovers over the entire chart or an individual bar. Use your imagination and your CSS skills to create beautiful interaction effects.

## Examples

Here are some basic examples leveraging CSS `:hover` pseudo-class.

### Legend Hover Effect

Legend hover effects can include a subtle motion of the entire legend:

```css
.legend {
    transition-duration: 0.6s;
}
.legend:hover {
    transform: translateX(-1em);
}
```

Or a simple growing effect for each individual legend item:

```css
.legend > li {
    transition-duration: 0.6s;
}
.legend > li:hover {
    transform: scale(1.1);
}
```

### Row and Column Hover Effects

A nice background color change when the user hovers over a row:

```css
.charts-css.bar tr:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
```

And opacity when hovering over a single column:

```css
.charts-css.bar td:hover {
    opacity: 0.75;
}
```

### Display Data On Hover

Wrap your data with a `<span>` element with `.data` class:

```html
<tr>
    <th scope="row"> Dataset label </th>
    <td> <span class="data"> 10 </span> </td>
    <td> <span class="data"> 20 </span> </td>
    <td> <span class="data"> 30 </span> </td>
</tr>
```

Hide the data by default and show it when hovering over the row:

```css
.charts-css.bar span.data {
    visibility: hidden;
}
.charts-css.bar tr:hover span.data {
    visibility: visible;
}
```

Note that we use `visibility: hidden;` and not `display: none;` because elements with hidden visibility are hidden from the user not from the document layout. This way the element still take up space on the page.
