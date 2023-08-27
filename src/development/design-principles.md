---
permalink: /development/design-principles/
prev: ../
---

# Design Principles

The framework development has several design principles that act as philosophical guidelines.

## Decoupled Components

The chart should be broken down into as many building blocks as possible. Each component should either have its own HTML (legend & titles) structure or its own CSS class (axes, datasets, etc.).

## Building a Framework

The main goal is to develop a framework for the masses, not a niche library used in specific use cases.

## Global Features

When developing components the thinking should be global. New components should work on all chart types, not just on one or two chart types.

## Naming Convention

Class names should be intuitive and self-explanatory to make it easy to implement without even reading the documentation.

## Direction-Free Classes

When naming classes we should consider RTL, LTR and BTT languages. Class names should not use direction names (top, bottom, right, left, vertical, horizontal etc.). Direction-free names like "start" & "end" are preferred.

## CSS Customization

Relying on CSS, the framework should be easy to customize using CSS selectors. Developers should have the option to target every element and customize it.

## No JavaScript

The core project should not use JS. If it cannot be done using CSS, it won't be part of the framework. Saying that, end users can add their own "JS Plugins".

## Learn from the Community

We highly encourage our users to customize their charts and share them with the community along with new methods, innovative techniques and advance use cases.
