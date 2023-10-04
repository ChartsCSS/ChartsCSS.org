---
permalink: /docs/anatomy/
---

# Anatomy

Charts are made of several [components](../components/) grouped together. The structure is built with a simple HTML `<table>` element. The different components are styled using **CSS classes** which are defined for the parent element but affect inner HTML elements.

## Chart Layers

The following animation shows how the various elements are separated into layers:

<code-example code-example-id="anatomy-layers">
<template v-slot:css-code>
.layers-wrapper {
	position: relative;
	width: calc(100% * 0.42261826174); /* 100% * cos(65deg) */
	width: 75%;
	margin: 0 auto;
	aspect-ratio: 1;
}
.layers-wrapper .charts-css {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	animation-name: animate_layers;
	animation-duration: 20s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	--labels-size: 40px !important;
}
.layers-wrapper .charts-css caption {
	padding: 10px !important;
}
.layers-wrapper .charts-css tbody {
	aspect-ratio: 1.1;
}
.layers-wrapper .charts-css:nth-child(1) {
	--distance: -150px;
}
.layers-wrapper .charts-css:nth-child(2) {
	--distance: -50px;
}
.layers-wrapper .charts-css:nth-child(3) {
	--distance: 50px;
}
.layers-wrapper .charts-css:nth-child(4) {
	--distance: 150px;
}
.layers-wrapper:hover .charts-css {
	animation-play-state: paused;
}
@keyframes animate_layers {
	5% {
		transform: rotateX(0) rotate(0) translateZ(0);
		background-color: rgba(255, 255, 255, 0);
		box-shadow: none;
	}
	20%{
		transform: rotateX(65deg) rotate(45deg) translateZ(var(--distance));
		background-color: rgba(0, 0, 0, 0.1);
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
	}
	35% {
		transform: rotateX(65deg) rotate(-135deg) translateZ(var(--distance));
	}
	65% {
		transform: rotateX(65deg) rotate(135deg) translateZ(var(--distance));
	}
	80% {
		transform: rotateX(65deg) rotate(-45deg) translateZ(var(--distance));
		background-color: rgba(0, 0, 0, 0.1);
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
	}
	95% {
		transform: rotateX(0) rotate(0) translateZ(0);
		background-color: rgba(0, 0, 0, 0);
		box-shadow: none;
	}
}
</template>
<template v-slot:html-code>
<div class="layers-wrapper">
	<table class="charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes">
		<caption> &nbsp; </caption>
		<tbody>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
		</tbody>
	</table>
	<table class="charts-css column show-heading show-labels data-spacing-15">
		<caption> &nbsp; </caption>
		<tbody>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0.2;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0.4;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0.6;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0.8;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 1;"></td>
			</tr>
		</tbody>
	</table>
	<table class="charts-css column show-heading show-labels">
		<caption> &nbsp; </caption>
		<tbody>
			<tr>
				<th> 2016 </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> 2017 </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> 2018 </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> 2019 </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> 2020 </th>
				<td style="--size: 0;"></td>
			</tr>
		</tbody>
	</table>
	<table class="charts-css column show-heading">
		<caption> Chart Heading </caption>
		<tbody>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
			<tr>
				<th> &nbsp; </th>
				<td style="--size: 0;"></td>
			</tr>
		</tbody>
	</table>
</div>
</template>
</code-example>

As was previously mentioned, the layers are composed of different HTML elements nested inside the `<table>` element.

* [Heading layer](../components/heading/) - generated from the `<caption>` element.
* [Labels layer](../components/labels/) - generated from the `<th>` elements.
* [Data layer](../components/data/) - generated from the `<td>` elements.
* [Axes layer](../components/axes/) - generated from the `<tbody>` element.

## Chart Structure

With the help of CSS classes, the HTML table displayed as a chart. These utility classes change the appearance of the table by applying styles on various inner HTML elements.

To transform the `<table>` into a chart, only two inner HTML elements are required, the `<tbody>` and `<td>` elements, without them, nothing works. The other elements are optional. However, we recommend using all the elements, including `<caption>`, `<thead>`, and `<th>`, as they provide more clarity for search-engines and screen-reader users.

### HTML Table

The following table, for example, provides meaningful information like a heading, labels and data. With semantic markup the information visible to search-engines and screen readers.

```html
<table class="charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes data-spacing-15 hide-data">

  <caption> Chart Heading </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Value </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th> 2016 </th>
      <td style="--size: calc( 20 / 100 );"> 20 </td>
    </tr>
    <tr>
      <th> 2017 </th>
      <td style="--size: calc( 40 / 100 );"> 40 </td>
    </tr>
    <tr>
      <th> 2018 </th>
      <td style="--size: calc( 60 / 100 );"> 60 </td>
    </tr>
    <tr>
      <th> 2019 </th>
      <td style="--size: calc( 80 / 100 );"> 80 </td>
    </tr>
    <tr>
      <th> 2020 </th>
      <td style="--size: calc( 100 / 100 );"> 100 </td>
    </tr>
  </tbody>

</table>
```

### Chart View

With the help of CSS classes, the user will see the following chart:

<code-example code-example-id="anatomy-simple-chart">
<template v-slot:css-code>
#anatomy-simple-chart .charts-css {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#anatomy-simple-chart .charts-css tbody {
	aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="anatomy-simple-chart">
  <table class="charts-css column show-heading show-labels show-primary-axis show-3-secondary-axes show-data-axes data-spacing-15 hide-data">
    <caption> Chart Heading </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Value </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th> 2016 </th>
        <td style="--size: calc( 20 / 100 );"> 20 </td>
      </tr>
      <tr>
        <th> 2017 </th>
        <td style="--size: calc( 40 / 100 );"> 40 </td>
      </tr>
      <tr>
        <th> 2018 </th>
        <td style="--size: calc( 60 / 100 );"> 60 </td>
      </tr>
      <tr>
        <th> 2019 </th>
        <td style="--size: calc( 80 / 100 );"> 80 </td>
      </tr>
      <tr>
        <th> 2020 </th>
        <td style="--size: calc( 100 / 100 );"> 100 </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

### Table View

When removing the CSS classes, the style will be removed and the user will see a regular table:

<table>

  <caption> Chart Heading </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Value </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th> 2016 </th>
      <td style="--size: calc( 20 / 100 );"> 20 </td>
    </tr>
    <tr>
      <th> 2017 </th>
      <td style="--size: calc( 40 / 100 );"> 40 </td>
    </tr>
    <tr>
      <th> 2018 </th>
      <td style="--size: calc( 60 / 100 );"> 60 </td>
    </tr>
    <tr>
      <th> 2019 </th>
      <td style="--size: calc( 80 / 100 );"> 80 </td>
    </tr>
    <tr>
      <th> 2020 </th>
      <td style="--size: calc( 100 / 100 );"> 100 </td>
    </tr>
  </tbody>

</table>
