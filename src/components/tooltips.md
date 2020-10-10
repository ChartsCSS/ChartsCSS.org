---
permalink: /components/tooltips/
---

# Tooltips

Tooltips allow you to display additional information about the data, using little popup boxes, when hovering over the data.

## Add Tooltips

To add tooltips to your data, you need to change the HTML markup to include the tooltip content.

### Display Only Data

Simple data `<table>` with only the data:

```html
<tr>
    <th scope="row"> Data set label </th>
    <td> 10 </td>
    <td> 20 </td>
    <td> 30 </td>
</tr>
```

### Display Data With Tooltips

To add tooltips, simply add a `<span>` tag with a `.tooltip` class. 

```html{5}
<tr>
    <th scope="row"> Data set label </th>
    <td> 10 </td>
    <td> 20 </td>
    <td> 30 <span class="tooltip"> Data: 30 <br> More info... </span> </td>
</tr>
```

You can add tooltip to a specific data like you see in the example above, or to all your data elements.

```html{3-5}
<tr>
    <th scope="row"> Data set label </th>
    <td> 10 <span class="tooltip"> Data: 10 <br> More info... </span> </td>
    <td> 20 <span class="tooltip"> Data: 20 <br> More info... </span> </td>
    <td> 30 <span class="tooltip"> Data: 30 <br> More info... </span> </td>
</tr>
```

### Best Practice

It's not required but it's recommended to wrap your data with a `<span>` element and a `.data` class. This way you can distinguish between the data and the tooltip.

```html
<tr>
    <th scope="row"> Data set label </th>
    <td>
        <span class="data"> 10 </span>
        <span class="tooltip"> Data: 10 <br> More info... </span>
    </td>
    <td>
        <span class="data"> 20 </span>
        <span class="tooltip"> Data: 20 <br> More info... </span>
    </td>
    <td>
        <span class="data"> 30 </span>
        <span class="tooltip"> Data: 30 <br> More info... </span>
    </td>
</tr>
```

This markup will help you target the data selector for other purposes like adding [motion effects](/motion-effects/) and [animations](/animations/).