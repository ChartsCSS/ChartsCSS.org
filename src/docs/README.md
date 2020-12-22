---
next: ./installation
---

# Introduction

**Charts.css** is a new open source framework for data visualization. It replaces traditional JS charting libraries with a **CSS framework**.

Data visualization can improve user experience as graphical representation of data is usually easier to understand. If visualization help end-users to understand data, **Charts.css** help frontend developers to turn their data into beautiful graphs using simple **CSS classes**.

Modern **CSS frameworks** (like bootstrap) style HTML elements using predefined CSS utility classes. While those CSS frameworks focus on layouts, **Charts.css** focus only on data visualization.

## How It Works

The web uses HTML for structure, CSS for styling and JS for functionality. When displaying data the same rules apply - we should use HTML to store the data, and CSS to style the structural HTML elements.

With a few simple CSS classes applied on the container element you can turn your entire table of data into a visually appealing chart. The framework is developer-friendly making it easy to customize every element with simple CSS selectors.

## Alternatives

The web offers many charting libraries. They all use JS to render the data. Each implement different strategy like VML, SVG, HTML canvas, image generators and others methods.

Traditional chart libraries heavily dependent on JS. They unnecessarily complicate the visualization process with an endless lists of properties and methods.

In addition, large JS libraries usually effect your site performance. Search engines having trouble reading the data stored in JS objects. And many old solutions are not always accessible to screen readers.

Some libraries fixed search engines visibility by injecting HTML nodes. Accessible issues fixed with additional JS solutions. But in most cases those patches lead to more background processing, effecting page performance.

With CSS frameworks, all this is not required. The raw data is part of the HTML making it visibility to search engines and screen readers. With CSS, rendering is not required, resulting in performance boost compare to JS solutions.

## Which is Better

There is no better solution, it all depends on your needs and the capabilities of the solution you choose.

Should you abandon your current JS charting library? Not necessarily. Each library has it's own advantage and use cases. You need to define your needs, and find a solution that matches those needs.

When should you consider migrating to **Charts.css**? In most cases, you need a simple chart displaying your data. In those case there is no sense to load heavy JS libraries. For complex charts with special behaviours not covered by **Charts.css** you should search for JS alternatives. 

## Get Started

To start using **Charts.css** see the [installation](/docs/installation/) page and read the [usage](/docs/usage/) page explaining how to structure your data and apply CSS classes.

## License

**Charts.css** is licensed under the [MIT license](https://opensource.org/licenses/MIT). 
