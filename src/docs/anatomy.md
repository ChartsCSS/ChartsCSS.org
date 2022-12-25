---
permalink: /docs/anatomy/
next: ../../components/
---

# Anatomy

The chart is made of several [components](../components/) grouped together. The structure built with a simple HTML `<table>` element. The different components are styled using **CSS classes** which are defined on the parent element but applied on inner HTML tags.

## Chart Layers

The following animation shows how the various elements are separated into layers:

<code-example code-example-id="anatomy-layers">
<template v-slot:css-code>
.layers-wrapper {
	position: relative;
	width: calc(100% * 0.42261826174); /* 100% * cos(65deg) */
	width: 75%;
    margin: 0 auto;
	aspect-ratio: 1 / 1;
}
.layers-wrapper .charts-css {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	border-radius: 10px;
	animation-name: animate_layers;
	animation-duration: 20s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	--labels-size: 40px !important;
	--heading-size: 40px !important;
}
.layers-wrapper .charts-css caption {
	padding: 10px !important;
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
		<caption> </caption>
		<tbody>
			<tr>
				<th> </th>
				<td style="--size:0;"></td>
			</tr>
			<tr>
				<th> </th>
				<td style="--size:0;"></td>
			</tr>
			<tr>
				<th> </th>
				<td style="--size:0;"></td>
			</tr>
			<tr>
				<th> </th>
				<td style="--size:0;"></td>
			</tr>
			<tr>
				<th> </th>
				<td style="--size:0;"></td>
			</tr>
		</tbody>
	</table>
	<table class="charts-css column show-heading show-labels data-spacing-15">
		<caption> </caption>
		<tbody>
			<tr>
				<th> </th>
				<td style="--size:0.2;"></td>
			</tr>
			<tr>
				<th> </th>
				<td style="--size:0.4;"></td>
			</tr>
			<tr>
				<th> </th>
				<td style="--size:0.6;"></td>
			</tr>
			<tr>
				<th> </th>
				<td style="--size:0.8;"></td>
			</tr>
			<tr>
				<th> </th>
				<td style="--size:1;"></td>
			</tr>
		</tbody>
	</table>
	<table class="charts-css column show-heading show-labels">
		<caption> </caption>
		<tbody>
			<tr>
				<th> 2016 </th>
			</tr>
			<tr>
				<th> 2017 </th>
			</tr>
			<tr>
				<th> 2018 </th>
			</tr>
			<tr>
				<th> 2019 </th>
			</tr>
			<tr>
				<th> 2020 </th>
			</tr>
		</tbody>
	</table>
	<table class="charts-css column show-heading">
		<caption> Chart Heading </caption>
	</table>
</div>
</template>
</code-example>

As it was previously mentioned, the layers are composed of different HTML elements that are nestled inside the `<table>` tag.

For example, the [heading](../components/heading/) layer created from the `<caption>` tag, the data [labels](../components/labels/) are created from the `<th>` tags, the [data](../components/data/)/[dataset](../components/datasets/) using `<td>` tags, and the [axes](../components/axes/) layer is generated from the `<tg>` tags.

## HTML Table

The raw data is a basic HTML `<table>` tag visible to search engines and screen readers:

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
      <td style="--size:0.2;"> 20 </td>
    </tr>
    <tr>
      <th> 2017 </th>
      <td style="--size:0.4;"> 40 </td>
    </tr>
    <tr>
      <th> 2018 </th>
      <td style="--size:0.6;"> 60 </td>
    </tr>
    <tr>
      <th> 2019 </th>
      <td style="--size:0.8;"> 80 </td>
    </tr>
    <tr>
      <th> 2020 </th>
      <td style="--size:1.0;"> 100 </td>
    </tr>
  </tbody>

</table>

## Chart Table

With the use of CSS classes, we can convert the raw data into a chart. These classes change the HTML structure's appearance.

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
      <td style="--size:0.2;"></td>
    </tr>
    <tr>
      <th> 2017 </th>
      <td style="--size:0.4;"></td>
    </tr>
    <tr>
      <th> 2018 </th>
      <td style="--size:0.6;"></td>
    </tr>
    <tr>
      <th> 2019 </th>
      <td style="--size:0.8;"></td>
    </tr>
    <tr>
      <th> 2020 </th>
      <td style="--size:1.0;"></td>
    </tr>
  </tbody>

</table>
```

The result is an `<table>` tag displayed to the user as a chart:

<code-example code-example-id="anatomy-simple-chart">
<template v-slot:css-code>
#anatomy-simple-chart {
  height: 300px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes data-spacing-15 hide-data" id="anatomy-simple-chart">

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
      <td style="--size:0.2;"> <span class="data"> 20 </span> </td>
    </tr>
    <tr>
      <th> 2017 </th>
      <td style="--size:0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th> 2018 </th>
      <td style="--size:0.6;"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th> 2019 </th>
      <td style="--size:0.8;"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th> 2020 </th>
      <td style="--size:1.0;"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>
