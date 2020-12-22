---
home: true
navbar: false
heroImage: /assets/img/logo.png
tagline: CSS data visualization framework
actionText: Quick Start
actionLink: /docs/
features:
- title: HTML & CSS
  details: Uses semantic HTML tags
- title: Accessible
  details: Raw data inside the markup
- title: Customizable
  details: Style the charts your way
- title: Open Source
  details: Change the source code
- title: Responsive
  details: Uses media queries for scaling
- title: Large Variety
  details: Many supported chart types
footer: Copyright © 2020 Rami Yushuvaev
---

**Charts.css** is a modern CSS frameworks. It styles HTML elements using predefined CSS utility classes.

See [Chart.css source code](https://github.com/ChartsCSS/charts.css) on GitHub and please consider to star the project.

<div class="circles">

  <div class="circle">
    <a href="./charts/area/">
      <svg viewBox="0 0 100 100">
        <polygon points="0 80 15 50 30 70 45 30 60 60 75 10 100 80 0 80" style="fill:#fff;" />
      </svg>
    </a>
    <p>Area <br> Chart</p>
  </div>

  <div class="circle">
    <a href="./charts/bar/">
      <svg viewBox="0 0 100 100">
        <rect x="10" y="20" width="30" height="15" style="fill:#fff;" />
        <rect x="10" y="45" width="80" height="15" style="fill:#fff;" />
        <rect x="10" y="70" width="60" height="15" style="fill:#fff;" />
      </svg>
    </a>
    <p>Bar <br> Chart</p>
  </div>

  <div class="circle">
    <a href="./charts/column/">
      <svg viewBox="0 0 100 100">
        <rect x="5"  y="65" width="15" height="20" style="fill:#fff;" />
        <rect x="30" y="45" width="15" height="40" style="fill:#fff;" />
        <rect x="55" y="25" width="15" height="60" style="fill:#fff;" />
        <rect x="80" y="55" width="15" height="30" style="fill:#fff;" />
      </svg>
    </a>
    <p>Column <br> Chart</p>
  </div>

  <div class="circle">
    <a href="./charts/line/">
      <svg viewBox="0 0 100 100">
        <polyline points="0 80 15 60 25 70 50 20 70 55 80 36 100 80" style="fill:none; stroke:#fff; stroke-width:4px;" />
      </svg>
    </a>
    <p>Line <br> Chart</p>
  </div>

  <div class="circle">
    <a href="./charts/area/#multiple-datasets">
      <svg viewBox="0 0 100 100">
        <polygon points="0 80 0 76 15 50 30 55 45 30 60 50 75 10 100 70 100 80 0 80" style="fill:#fff; opacity:0.3;" />
        <polygon points="0 80 0 78 15 60 30 65 45 45 60 60 75 30 100 75 100 80 0 80" style="fill:#fff; opacity:0.6;" />
        <polygon points="0 80 0 80 15 70 30 75 45 60 60 70 75 50 100 80 100 80 0 80" style="fill:#fff; opacity:1.0;" />
      </svg>
    </a>
    <p>Multi-Dataset <br> Area</p>
  </div>

  <div class="circle">
    <a href="./charts/bar/#multiple-datasets">
      <svg viewBox="0 0 100 100">
        <rect x="10" y="10" width="30" height="12" style="fill:#fff;" />
        <rect x="11" y="28" width="80" height="12" style="fill:none; stroke:#fff; stroke-width:2px;" />
        <rect x="10" y="60" width="60" height="12" style="fill:#fff;" />
        <rect x="11" y="78" width="50" height="12" style="fill:none; stroke:#fff; stroke-width:2px;" />
      </svg>
    </a>
    <p>Multi-Dataset <br> Bars</p>
  </div>

  <div class="circle">
    <a href="./charts/column/#multiple-datasets">
      <svg viewBox="0 0 100 100">
        <rect x="5"  y="65" width="15" height="19" style="fill:none; stroke:#fff; stroke-width:2px;" />
        <rect x="25" y="40" width="15" height="45" style="fill:#fff;" />
        <rect x="60" y="30" width="15" height="54" style="fill:none; stroke:#fff; stroke-width:2px;" />
        <rect x="80" y="50" width="15" height="35" style="fill:#fff;" />
      </svg>
    </a>
    <p>Multi-Dataset <br> Columns</p>
  </div>

  <div class="circle">
    <a href="./charts/line/">
      <svg viewBox="0 0 100 100">
        <polyline points="0 65 15 50 30 55 45 30 60 50 75 10 100 60" style="fill:none; stroke:#fff; stroke-width:3px; opacity:0.9;" />
        <polyline points="0 72 15 60 30 65 45 45 60 60 75 30 100 70" style="fill:none; stroke:#fff; stroke-width:3px; opacity:0.6;" />
        <polyline points="0 80 15 70 30 75 45 60 60 70 75 50 100 80" style="fill:none; stroke:#fff; stroke-width:3px; opacity:0.3;" />
      </svg>
    </a>
    <p>Multi-Dataset <br> Lines</p>
  </div>

  <div class="circle">
    <a href="./components/stacked/">
      <svg viewBox="0 0 100 100">
        <rect x="5"  y="15" width="15" height="30" style="fill:#fff; opacity:0.3;" />
        <rect x="5"  y="45" width="15" height="20" style="fill:#fff; opacity:0.6;" />
        <rect x="5"  y="65" width="15" height="20" style="fill:#fff; opacity:1.0;" />
        <rect x="30" y="15" width="15" height="20" style="fill:#fff; opacity:0.3;" />
        <rect x="30" y="35" width="15" height="20" style="fill:#fff; opacity:0.6;" />
        <rect x="30" y="55" width="15" height="30" style="fill:#fff; opacity:1.0;" />
        <rect x="55" y="15" width="15" height="10" style="fill:#fff; opacity:0.3;" />
        <rect x="55" y="25" width="15" height="40" style="fill:#fff; opacity:0.6;" />
        <rect x="55" y="65" width="15" height="20" style="fill:#fff; opacity:1.0;" />
        <rect x="80" y="15" width="15" height="40" style="fill:#fff; opacity:0.3;" />
        <rect x="80" y="55" width="15" height="20" style="fill:#fff; opacity:0.6;" />
        <rect x="80" y="75" width="15" height="10" style="fill:#fff; opacity:1.0;" />
      </svg>
    </a>
    <p>Percentage <br> Columns</p>
  </div>

  <div class="circle">
    <a href="./components/stacked/">
      <svg viewBox="0 0 100 100">
        <rect x="5"  y="55" width="15" height="10" style="fill:#fff; opacity:0.3;" />
        <rect x="5"  y="65" width="15" height="10" style="fill:#fff; opacity:0.6;" />
        <rect x="5"  y="75" width="15" height="10" style="fill:#fff; opacity:1.0;" />
        <rect x="30" y="40" width="15" height="10" style="fill:#fff; opacity:0.3;" />
        <rect x="30" y="50" width="15" height="15" style="fill:#fff; opacity:0.6;" />
        <rect x="30" y="65" width="15" height="20" style="fill:#fff; opacity:1.0;" />
        <rect x="55" y="15" width="15" height="20" style="fill:#fff; opacity:0.3;" />
        <rect x="55" y="35" width="15" height="20" style="fill:#fff; opacity:0.6;" />
        <rect x="55" y="55" width="15" height="30" style="fill:#fff; opacity:1.0;" />
        <rect x="80" y="25" width="15" height="15" style="fill:#fff; opacity:0.3;" />
        <rect x="80" y="40" width="15" height="25" style="fill:#fff; opacity:0.6;" />
        <rect x="80" y="65" width="15" height="20" style="fill:#fff; opacity:1.0;" />
      </svg>
    </a>
    <p>Stacked <br> Columns</p>
  </div>

  <div class="circle">
    <a href="./customization/3d-effects/#_3d-bars">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="17.96 61.54 22.07 58.09 22.03 76.76 17.92 80.21 17.96 61.54" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="2.98 61.24 7.08 57.79 22.07 58.09 17.96 61.54 2.98 61.24" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="17.96 61.54 17.92 80.21 2.94 79.91 2.98 61.24 17.96 61.54" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="42.98 43.38 47.08 39.93 47 77.26 42.89 80.71 42.98 43.38" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="27.99 43.08 32.1 39.63 47.08 39.93 42.98 43.38 27.99 43.08" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="42.98 43.38 42.89 80.71 27.91 80.41 27.99 43.08 42.98 43.38" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="67.99 25.12 72.1 21.67 71.97 76.74 67.87 80.19 67.99 25.12" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="53 24.82 57.11 21.37 72.1 21.67 67.99 25.12 53 24.82" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="67.99 25.12 67.87 80.19 52.88 79.89 53 24.82 67.99 25.12" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="92.89 52.69 97 49.24 96.94 77.24 92.83 80.69 92.89 52.69" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="77.92 52.39 82.02 48.94 97 49.24 92.89 52.69 77.92 52.39" style="fill:none; stroke:#fff; stroke-width:1px;" />
        <polygon points="92.89 52.69 92.83 80.69 77.85 80.39 77.92 52.39 92.89 52.69" style="fill:none; stroke:#fff; stroke-width:1px;" />
      </svg>
    </a>
    <p>3D Bars <br> Effect</p>
  </div>

  <div class="circle">
    <a href="./customization/3d-effects/#tilt-chart">
      <svg viewBox="0 0 100 100">
        <g style="transform: skewY(20deg) translateY(-20px) translateX(-5px);">
          <rect x="5"  y="65" width="15" height="20" style="fill:#fff;" />
          <rect x="30" y="45" width="15" height="40" style="fill:#fff;" />
          <rect x="55" y="25" width="15" height="60" style="fill:#fff;" />
          <rect x="80" y="55" width="15" height="30" style="fill:#fff;" />
        </g>
      </svg>
    </a>
    <p>3D Tilting <br> Effect</p>
  </div>

</div>


<br>