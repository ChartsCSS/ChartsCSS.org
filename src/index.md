---
title: Charts.css
home: true
navbar: false
heroImage: /assets/img/logo-animation.svg
tagline: CSS data visualization framework
---

<p class="action">
  <a href="/docs/" class="action-button">Quick Start</a>
  <a href="https://github.com/ChartsCSS/charts.css" target="_blank" class="action-button github">GitHub Repo</a>
</p>

**Charts.css** is a modern CSS framework. It uses CSS utility classes to style HTML elements as charts.

The [source code is available on GitHub](https://github.com/ChartsCSS/charts.css). If you like the project, please consider to star the repo on GitHub.

<div class="charts">

  <div class="chart">
    <a href="./charts/area/" aria-label="Area Chart">
      <svg viewBox="0 0 100 100">
        <polygon points="0 80 15 50 30 70 45 30 60 60 75 10 100 80 0 80" style="fill:#fff;" />
      </svg>
    </a>
    <p>Area <br> Chart</p>
  </div>

  <div class="chart">
    <a href="./charts/bar/" aria-label="Bar Chart">
      <svg viewBox="0 0 100 100">
        <rect x="10" y="20" width="30" height="15" style="fill:#fff;" />
        <rect x="10" y="45" width="80" height="15" style="fill:#fff;" />
        <rect x="10" y="70" width="60" height="15" style="fill:#fff;" />
      </svg>
    </a>
    <p>Bar <br> Chart</p>
  </div>

  <div class="chart">
    <a href="./charts/column/" aria-label="Column Chart">
      <svg viewBox="0 0 100 100">
        <rect x="5"  y="65" width="15" height="20" style="fill:#fff;" />
        <rect x="30" y="45" width="15" height="40" style="fill:#fff;" />
        <rect x="55" y="25" width="15" height="60" style="fill:#fff;" />
        <rect x="80" y="55" width="15" height="30" style="fill:#fff;" />
      </svg>
    </a>
    <p>Column <br> Chart</p>
  </div>

  <div class="chart">
    <a href="./charts/line/" aria-label="Line Chart">
      <svg viewBox="0 0 100 100">
        <polyline points="0 80 15 60 25 70 50 20 70 55 80 36 100 80" style="fill:none; stroke:#fff; stroke-width:4px;" />
      </svg>
    </a>
    <p>Line <br> Chart</p>
  </div>

  <div class="chart">
    <a href="./charts/area/#multiple-datasets" aria-label="Multi-Dataset Area Chart">
      <svg viewBox="0 0 100 100">
        <polygon points="0 80 0 76 15 50 30 55 45 30 60 50 75 10 100 70 100 80 0 80" style="fill:#fff; opacity:0.3;" />
        <polygon points="0 80 0 78 15 60 30 65 45 45 60 60 75 30 100 75 100 80 0 80" style="fill:#fff; opacity:0.6;" />
        <polygon points="0 80 0 80 15 70 30 75 45 60 60 70 75 50 100 80 100 80 0 80" style="fill:#fff; opacity:1.0;" />
      </svg>
    </a>
    <p>Multi-Dataset <br> Area Chart</p>
  </div>

  <div class="chart">
    <a href="./charts/bar/#multiple-datasets" aria-label="Multi-Dataset Bar Chart">
      <svg viewBox="0 0 100 100">
        <rect x="10" y="10" width="30" height="12" style="fill:#fff;" />
        <rect x="11" y="28" width="80" height="12" style="fill:none; stroke:#fff; stroke-width:2px;" />
        <rect x="10" y="60" width="60" height="12" style="fill:#fff;" />
        <rect x="11" y="78" width="50" height="12" style="fill:none; stroke:#fff; stroke-width:2px;" />
      </svg>
    </a>
    <p>Multi-Dataset <br> Bar Chart</p>
  </div>

  <div class="chart">
    <a href="./charts/column/#multiple-datasets" aria-label="Multi-Dataset Column Chart">
      <svg viewBox="0 0 100 100">
        <rect x="5"  y="65" width="15" height="19" style="fill:none; stroke:#fff; stroke-width:2px;" />
        <rect x="25" y="40" width="15" height="45" style="fill:#fff;" />
        <rect x="60" y="30" width="15" height="54" style="fill:none; stroke:#fff; stroke-width:2px;" />
        <rect x="80" y="50" width="15" height="35" style="fill:#fff;" />
      </svg>
    </a>
    <p>Multi-Dataset <br> Column Chart</p>
  </div>

  <div class="chart">
    <a href="./charts/line/" aria-label="Multi-Dataset Line Chart">
      <svg viewBox="0 0 100 100">
        <polyline points="0 65 15 50 30 55 45 30 60 50 75 10 100 60" style="fill:none; stroke:#fff; stroke-width:3px; opacity:0.9;" />
        <polyline points="0 72 15 60 30 65 45 45 60 60 75 30 100 70" style="fill:none; stroke:#fff; stroke-width:3px; opacity:0.6;" />
        <polyline points="0 80 15 70 30 75 45 60 60 70 75 50 100 80" style="fill:none; stroke:#fff; stroke-width:3px; opacity:0.3;" />
      </svg>
    </a>
    <p>Multi-Dataset <br> Line Chart</p>
  </div>

  <div class="chart">
    <a href="./components/stacked/" aria-label="Percentage Columns">
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

  <div class="chart">
    <a href="./components/stacked/" aria-label="Stacked Columns">
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

  <div class="chart">
    <a href="./customization/3d-effects/#_3d-bars" aria-label="3D Bars Effect">
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

  <div class="chart">
    <a href="./customization/3d-effects/#tilt-chart" aria-label="3D Tilt Effect">
      <svg viewBox="0 0 100 100">
        <g style="transform: skewY(20deg) translateY(-20px) translateX(-5px);">
          <rect x="5"  y="65" width="15" height="20" style="fill:#fff;" />
          <rect x="30" y="45" width="15" height="40" style="fill:#fff;" />
          <rect x="55" y="25" width="15" height="60" style="fill:#fff;" />
          <rect x="80" y="55" width="15" height="30" style="fill:#fff;" />
        </g>
      </svg>
    </a>
    <p>3D Tilt <br> Effect</p>
  </div>

  <div class="chart hidden">
    <a href="./charts/pie/" aria-label="Pie Chart">
      <svg viewBox="0 0 100 100">
        <path d="M50,10V50L17.24,27.06A39.92,39.92,0,0,1,50,10Z" style="fill:#fff; opacity:0.3;" />
        <path d="M50,50,39.65,88.64A40,40,0,0,1,17.24,27.06Z" style="fill:#fff; opacity:0.6;" />
        <path d="M90,50A40,40,0,0,1,39.65,88.64L50,50V10A40,40,0,0,1,90,50Z" style="fill:#fff; opacity:0.9;" />
      </svg>
    </a>
    <p>Pie <br> Chart</p>
  </div>

  <div class="chart hidden">
    <a href="./charts/donut/" aria-label="Donut Chart">
      <svg viewBox="0 0 100 100">
        <path d="M50,30V10A39.92,39.92,0,0,0,17.24,27.06L33.63,38.54A19.94,19.94,0,0,1,50,30Z" style="fill:#fff; opacity:0.3;" />
        <path d="M30,50a19.85,19.85,0,0,1,3.63-11.46L17.24,27.06A40,40,0,0,0,39.65,88.64L44.83,69.3A20,20,0,0,1,30,50Z" style="fill:#fff; opacity:0.6;" />
        <path d="M50,10V30a20,20,0,1,1-5.17,39.3L39.65,88.64A40,40,0,1,0,50,10Z" style="fill:#fff; opacity:0.9;" />
      </svg>
    </a>
    <p>Donut <br> Chart</p>
  </div>

</div>

<div class="features">

  <div class="feature">
    <h2>Semantic Structure</h2>
    <p>Uses HTML tags to display data</p>
  </div>

  <div class="feature">
    <h2>Customizable</h2>
    <p>Custom styling using CSS</p>
  </div>

  <div class="feature">
    <h2>Responsive</h2>
    <p>Scaled using media queries</p>
  </div>

  <div class="feature">
    <h2>Accessible</h2>
    <p>Raw data inside the markup</p>
  </div>

  <div class="feature">
    <h2>Large Variety</h2>
    <p>Many supported chart types</p>
  </div>

  <div class="feature">
    <h2>No dependencies</h2>
    <p>Zero external overhead</p>
  </div>

  <div class="feature">
    <h2>Small Library</h2>
    <p>72kb file size, 6kb gzipped</p>
  </div>

  <div class="feature">
    <h2>Better Performance</h2>
    <p>No JS = no rendering</p>
  </div>

  <div class="feature">
    <h2>Open Source</h2>
    <p>You can change the code</p>
  </div>

</div>

<div class="contributors">

  <div class="contributor">
    <img src="/assets/img/rami.jpg" title="Rami Yushuvaev">
    <div>Rami Yushuvaev</div>
    <div>Developer</div>
  </div>

  <div class="contributor">
    <img src="/assets/img/lana.jpg" title="Lana Gordiievska">
    <div>Lana Gordiievski</div>
    <div>Designer</div>
  </div>

</div>

**Charts.css** is an open source framework licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT license</a>.

<br>