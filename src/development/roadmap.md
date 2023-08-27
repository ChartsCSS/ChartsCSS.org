---
permalink: /development/roadmap/
next: ../../examples/
---

# Roadmap

This page shows the future development roadmap of the framework.

## Time Table

Planned development and the release of new chart types:

* ~~**October 2020** - Bar chart.~~

* ~~**October 2020** - Column chart.~~

* ~~**November 2020** - Area chart.~~

* ~~**November 2020** - Line chart.~~

* **TBD 2023** - Pie chart.

* **TBD 2023** - Radial chart.

* **TBD 2023** - Polar Chart.

* **TBD 2023** - Radar Chart.

## Long Term Roadmap

The framework will implement new features and components, not necessarily in that order. The long term goals are:

* **More Chart Types** - Add more chart types, start with the radial and pie charts.

* **Dual Axes Labels** - Support two independent secondary-labels, with one dataset on each side.

* **Build Tools** - Add more build tools.

* **Name Spacing** - Use namespaces to prevent class conflicts with other css frameworks.

* ~~**Responsive Control** - Support conditional display for different screen sizes. The code should look like this `sm:pie md:column xl:bar`.~~ <br> Responsive controls can already be implemented with container queries.

* **Component Prefixes** - Consider supporting component prefixes: `chart-axes:primary`, `chart-axes:*-secondary`, `chart-axes:data`, `chart-labels:show`, `chart-labels:align-end` etc.

* **Reverse Labels** - Position chart labels on either side of the chart using the `reverse-labels` utility class.