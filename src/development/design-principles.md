---
permalink: /development/design-principles/
prev: ../
---

# Design Principles

The framework development has several design principles act as philosophical guidelines.

## Decoupled Components

The chart should be broken down into as many building blocks as possible. Each components should either have its own HTML structure or its own CSS classes.

## Building a Framework

The main goal is to develop a framework for the masses, not a niche library used in a very specific use cases.

## Globally Supported Features

When developing new components the thinking needs to be global. New components should work on all chart types, not on one or two chart types.

## Use Intuitive Classes

The project aims to use intuitive class names to make it easy to implement all the components without even reading the documentation.

## CSS Customization

Relying on CSS, the framework should be easy to customize using CSS selector. Developers should have the option to target every element and customize it.

## No JavaScript

The core project should not use JS. If it cannot be done using CSS, it won't be part of the framework. Saying that, end users can add their own "plugins" using JS.

## Learn from the Community

We are highly encourage our users to customize their charts and share new methods, innovative techniques and advance use cases with the community.
