---
permalink: /components/animations/
next: ../../charts/
---

# Animations

By animating the chart you can add smooth interactions to make your even more interactive. Use CSS `@keyframes` to animate elements without using JavaScript.

## Examples

Here are some basic examples leveraging CSS animations.

### Spin Your Data

Wrap your data with a `<span>` element with `.data` class:

```html
<tr>
    <th scope="row"> Data set label </th>
    <td> <span class="data"> 10 </span> </td>
    <td> <span class="data"> 20 </span> </td>
    <td> <span class="data"> 30 </span> </td>
</tr>
```

Rotate the data every 6 seconds:

```css
.charts-css.bar span.data {
    animation: spin 6s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotateX(0deg);
    }
    10% {
        transform: rotateX(360deg);
    }
    100% {
        transform: rotateX(360deg);
    }
}
```

You can improve the animation by adding animation delays:

```css
.charts-css.bar tr:nth-of-type(odd) span.data {
    animation-delay: 3s;
}
.charts-css.bar tr:nth-of-type(even) span.data {
    animation-delay: 6s;
}
```
