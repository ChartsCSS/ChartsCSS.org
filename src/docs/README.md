---
next: ./installation
---

# Introduction

**Charts.css** is a new open source framework for data visualization. It replaces traditional JS charting libraries with a **CSS framework**.

Data visualization can improve user experience as graphical representation of data is usually easier to understand. If visualization helps end-users to understand data, **Charts.css** helps frontend developers turn their data into beautiful graphs using simple **CSS classes**.

Modern **CSS frameworks** (like bootstrap) style HTML elements using predefined CSS utility classes. While those CSS frameworks focus on layouts, **Charts.css** focuses only on data visualization.

## How It Works

The web uses HTML for structure, CSS for styling and JS for functionality. When displaying data the same rules apply - we should use HTML to structure the data, and CSS to style the structural HTML elements.

With a few simple CSS classes applied on the container element you can turn your entire table of data into a visually appealing chart. The framework is developer-friendly making it easy to customize every element with simple CSS selectors.

## Alternatives

The web offers many charting libraries. They all use JS to render the data. Each implements a different strategy like VML, SVG, HTML canvas, image generators and others methods.

Traditional chart libraries are heavily dependent on JS. They unnecessarily complicate the visualization process with endless lists of properties and methods.

In addition, large JS libraries usually affect site performance. Search engines having trouble reading the data stored in JS objects. And many old solutions are not always accessible to screen readers.

Some libraries fixed search engine visibility by injecting HTML nodes. Accessibility issues were fixed with additional JS solutions. But in most cases these patches lead to more background processing, affecting page performance.

With CSS frameworks, none of this is required. The raw data is part of the HTML making it visible to search engines and screen readers. With CSS, rendering is not required, resulting in a performance boost compared to JS solutions.

## Which is Better

There is no best solution, it all depends on your needs and the capabilities of the solution you choose.

Should you abandon your current JS charting library? Not necessarily. Each library has its own advantages and use cases. You need to define your needs and find a solution that matches those needs.

When should you consider migrating to **Charts.css**? In most cases, you just need a simple chart to display your data. In those cases there is no sense to load heavy JS libraries. For complex charts with special behaviours not covered by **Charts.css** you should search for JS alternatives. 

## Get Started

To start using **Charts.css** see the [installation](/docs/installation/) page. Read the [usage](/docs/usage/) page explaining how to structure your data and apply CSS classes. And visit the [anatomy](/docs/anatomy/) to see the layers of the different components.

## License

**Charts.css** is licensed under the [MIT license](https://opensource.org/licenses/MIT). 
