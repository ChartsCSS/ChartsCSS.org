---
permalink: /docs/migrate-to-v1/
next: ../../components/
---

# Migrate to v1.0

This guide covers notable changes and breaking changes introduced in **Charts.css** version 1.0. It will help you migrate from version 0.x to 1.x.

## Notable Changes

**New:**

* New chart type - Pie chart.
* New aspect-ratio for charts.
* New orientation utility classes to reverse labels.
* New utility classes to align labels.
* New utility classes to position data.
* New CSS variables to style legends.
* New `--end` CSS variable.
* New `@property` types added to all CSS variables.
* New SCSS prefix added to all CSS variables.
* Fix legend colors to make them repeat after the basic 10 colors.
* Fix axes by replace hardcoded SASS division with CSS `calc()`.

**Removals:**

* `--heading-size` variable was removed.
* `labels-align-start` class was replaced with `labels-align-{block|inline}-start`.
* `labels-align-center` class was replaced with `labels-align-{block|inline}-center`.
* `labels-align-end` class was replaced with `labels-align-{block|inline}-end`.

**Best Practices:**

* Prefer styling with a wrapper element.
* Custom chart `height` is no longer required.

### Wrapper

Previously, you could either apply custom `id` attributes on a `<table>` element:

```html{1}
<table class="charts-css bar ..." id="my-chart">
  ...
</table>
```

Or, on a wrapping `<div>`:

```html{1}
<div id="my-chart">

  <table class="charts-css bar ...">
    ...
  </table>

</div>
```

You can still do that, but as of this release it's no longer recommended.

All the docs have been updated to recommend using a wrapper `<div>` with custom `id` attribute. This change makes it easier to add new inner elements like the [legend](../components/legend/), [axes titles](../components/axes/#axis-title), [multiple mixed charts](./../charts/mixed/) etc.

We strongly recommend adding [wrapper elements](./../components/wrapper/) when migrating from version 0.x to 1.x.

### Chart Height

**Breaking change!** Previously, when serving an empty `<td>` or utilizing the `hide-data` / `show-data-on-hover` utility classes, the chart had no height. To overcome this issue, you had to set a custom style containing a minimum `height` value. It's no longer required.

```diff
- #my-chart .column {
-   height: 200px;
- }
```

### Aspect Ratio

**Breaking change!** Version 1.0.0 uses `aspect-ratio` on `<tbody>` element, making sure the chart always has a height even when you don't set a `height`. This change sets a proportional height based on the chart width.

The change has the potential to change the height of existing charts. When migrating from 0.x to 1.x versions, if the chart height is changed when you remove the `height` property, use `aspect-ratio` instead:

```css
#my-chart .column tbody {
  aspect-ratio: 21 / 9;
}
```

In version 1.1.0 and above, the `--aspect-ratio` variable was added to simplify [chart styling with CSS variables](../customization/basic-styling/#style-with-css-variables):

```css
#my-chart .column {
  --aspect-ratio: 21 / 9;
}
```

Note that [each chart type has a different aspect ratio](./../customization/basic-styling/#aspect-ratio).

### Heading Size

Previously, when you had a long text inside the `<caption>`, the text and the chart were overlapping. To fix this visual issue, you could increase the size of the heading with the `--heading-size` variable, and tweak the size for each media query. It's no longer required.

As of this release, the size of the heading text fits to the content, without any external workarounds. When migrating to version 1.x, remove all the `--heading-size` variables from your chart customizations. This variable has been removed from **Charts.css**.

```diff
- #my-chart .column {
-   --heading-size: 3rem;
- }
```

### Reverse Labels

Previously, there were three [orientation](../components/orientation/) utility classes for reversing the order of different elements inside the chart - `reverse`, `reverse-data` and `reverse-dataset`.

As of this release, a fourth orientation class was added, the `reverse-labels` class. This class allows you to [position the labels on the other side](./../components/orientation/#reverse-labels). Charts with reversed labels position the label where the data ends, rather where the data starts.

```html{3}
<div id="my-chart">

  <table class="charts-css column reverse-labels ...">
    ...
  </table>

</div>
```

With this feature you can create **[Population Pyramid](./../components/orientation/#population-pyramid-chart)** charts. It can be achieved by positioning side-by-side two bar charts with reversed labels.

<code-example code-example-id="new-population-chart">
<template v-slot:css-code>
#new-population-chart {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
}
#new-population-chart .bar {
  --aspect-ratio: 1 / 1;
}
#new-population-chart .bar.male {
  --color: rgba(100, 210, 80, .75);
}
#new-population-chart .bar.female {
  --color: rgba(240, 50, 50, .75);
}
</template>
<template v-slot:html-code>
<div id="new-population-chart">
  <table class="charts-css bar show-heading show-labels show-data-on-hover data-outside data-spacing-1 reverse-labels reverse male">
    <caption> Male population </caption>
    <thead>
      <tr>
        <th scope="col"> Age </th>
        <th scope="col"> Population </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 85+ </th>
        <td style="--size: calc( 0.010 / 0.10 )"> <span class="data outside">1.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 75-84 </th>
        <td style="--size: calc( 0.020 / 0.10 )"> <span class="data">2.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 65-74 </th>
        <td style="--size: calc( 0.037 / 0.10 )"> <span class="data">3.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 55-64 </th>
        <td style="--size: calc( 0.042 / 0.10 )"> <span class="data">4.2%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 45-54 </th>
        <td style="--size: calc( 0.054 / 0.10 )"> <span class="data">5.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 35-44 </th>
        <td style="--size: calc( 0.062 / 0.10 )"> <span class="data">6.2%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 25-34 </th>
        <td style="--size: calc( 0.065 / 0.10 )"> <span class="data">6.5%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 15-24 </th>
        <td style="--size: calc( 0.074 / 0.10 )"> <span class="data">7.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 5-14 </th>
        <td style="--size: calc( 0.089 / 0.10 )"> <span class="data">8.9%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 0-4 </th>
        <td style="--size: calc( 0.048 / 0.10 )"> <span class="data">4.8%</span> </td>
      </tr>
    </tbody>
  </table>
  <table class="charts-css bar show-heading show-labels show-data-on-hover data-outside data-spacing-1 reverse-labels female">
    <caption> Female population </caption>
    <thead>
      <tr>
        <th scope="col"> Age </th>
        <th scope="col"> Population </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 85+ </th>
        <td style="--size: calc( 0.007 / 0.10 )"> <span class="data outside">0.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 75-84 </th>
        <td style="--size: calc( 0.016 / 0.10 )"> <span class="data">1.6%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 65-74 </th>
        <td style="--size: calc( 0.032 / 0.10 )"> <span class="data">3.2%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 55-64 </th>
        <td style="--size: calc( 0.040 / 0.10 )"> <span class="data">4.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 45-54 </th>
        <td style="--size: calc( 0.053 / 0.10 )"> <span class="data">5.3%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 35-44 </th>
        <td style="--size: calc( 0.064 / 0.10 )"> <span class="data">6.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 25-34 </th>
        <td style="--size: calc( 0.067 / 0.10 )"> <span class="data">6.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 15-24 </th>
        <td style="--size: calc( 0.077 / 0.10 )"> <span class="data">7.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 5-14 </th>
        <td style="--size: calc( 0.094 / 0.10 )"> <span class="data">9.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 0-4 </th>
        <td style="--size: calc( 0.050 / 0.10 )"> <span class="data">5.0%</span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

### Pie Chart

Version 1.0.0 also introduced [Pie charts](../charts/pie/), streamline the process of converting data tables to an additional [chart type](../charts/) using a simple CSS utility class. This is the first circular chart introduced by **Charts.css**.

<code-example code-example-id="new-pie-chart">
<template v-slot:css-code>
#new-pie-chart {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="new-pie-chart">
  <table class="charts-css pie hide-data">
    <caption> Pie Chart </caption>
    <tbody>
      <tr>
        <td style="--start: 0.0; --end: 0.1"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.1; --end: 0.2"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.2; --end: 0.3"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.3; --end: 0.4"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.4; --end: 0.5"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.5; --end: 0.6"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.6; --end: 0.7"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.7; --end: 0.8"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.8; --end: 0.9"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.9; --end: 1.0"> <span class="data"> 10 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

### Labels Position

Previously, all labels were aligned to the center of the `<th>` element. As of this release, the labels are aligned to the beginning of the row in [bar charts](../charts/bar/) and to the bottom of the column on [column](../charts/column/), [area](../charts/area/) and [line](../charts/line/) charts.

To control the [position alignment of the label](./../components/labels/#align-labels), you get more possibilities.

**Deprecated classes:**

* `labels-align-start`
* `labels-align-center`
* `labels-align-end`

**New classes:**

* `labels-align-inline-start`
* `labels-align-inline-center`
* `labels-align-inline-end`
* `labels-align-block-start`
* `labels-align-block-center`
* `labels-align-block-end`

### Data Position

Previously you couldn't control where the data will be displayed. It was fixed at the end of the row. Version 1.0.0 introduces additional CSS utility classes and variables that help you customize the position of your data.

**New classes:**

* `data-start`
* `data-center`
* `data-end`
* `data-outside`

**New variables:**

* `--data-position`

Furthermore, when you have a very low or a very heigh value on your bar and column charts, the data seems out of position. Version 1.0.0 introduces new utility classes added either to the `<td>` element or to the `<span>` element wrapping the data. The new classes are:

* `inside`
* `outside`
