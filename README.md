<div align="center">
  <h1>Gatsbylius</h1>

![Gatsbylius logo](./logo-gatsbylius.jpg)

  <p>

**The fastest Open Source storefront for Sylius.**

Gatsbylius leverages Gatsby for building eCommerce PWA storefronts using React backed by a headless Sylius store.
Gatsby + Sylius = :rocket:,
[Try the demo.](https://demo.gatsbylius.com/)

  </p>

  <p>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![Dependencies status](https://img.shields.io/david/Gatsbylius/gatsbylius-starter.svg?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Gatsbylius/gatsbylius-starter.svg?style=flat-square)
[![Questions welcome](https://img.shields.io/badge/questions-welcome-blue.svg?style=flat-square)](https://github.com/Gatsbylius/gatsbylius-starter/issues)
![license](https://img.shields.io/github/license/Gatsbylius/gatsbylius-starter.svg?style=flat-square)
[![Twitter Follow](https://img.shields.io/twitter/follow/gatsbylius.svg?style=social&label=Follow)](https://twitter.com/gatsbylius)

  </p>

Started with :heart: :beers: :fire: in [Béthune #opengento](https://twitter.com/opengento/status/1196360198769778688)

</div>

## Overview

**⚠️ Alpha software:** Gatsbylius is in active development, things will change but contributions are welcome.

Gatsbylius contains everything you need to get started in minutes on an existing Sylius project with the Shop API enabled.
Consider it as a boilerplate for creating your next eCommerce application.

Here is what Gatsbylius can help you with:

- start using new technologies (React, GraphQL) and concepts (JAMStack),
- experiment an idea with your team,
- build your new store theme with performance and user experience on mobile devices in mind,
- convince your boss,
- or win projects by building a <abbr title="Proof of Concept">PoC</abbr>.

![The default Gatsbylius home page](./screenshot.png)

## Features

- **zero configuration:** start developing right away, all the tooling is already configured for you
- **great developer experience:** get in the flow with immediate feedback and interactive tools (<abbr title="Hot Module Reloading">HMR</abbr>, GraphQL…)
- **modern web technologies without the worries:** use up-to-date libraries with their latest features. We already took care of ensuring it all work!
- **scale infinitely:** Gatsbylius generates most pages of your shop as "static" files. It means easy deployments and cheaper hosting, with unlimited scaling to handle heavy traffic
- **<abbr title="Progressive Web Apps">PWA</abbr>:** leverage the latest best web practices to have the fastest possible storefront in mobile contexts

## Get started

Start building something now!

The following steps are all you need if you already are familiar with the JavaScript ecosystem.

> More detailed steps will be documented later!

### Starting

1. `gatsby new gatsbylius-starter https://github.com/Gatsbylius/gatsbylius-starter`
2. `cd gatsbylius-starter`

### Configuration

Create an `.env.local` file based on the `.env` files in the repository root and adapt it to your environment.

### Start it!

```
yarn start
or
npm run start
```

## Sylius

To use Sylius as an API you have to :

- Install [ShopApi official plugin](https://github.com/Sylius/ShopApiPlugin)
- Fix an issue with checkout configuration : https://github.com/Sylius/ShopApiPlugin/issues/241#issuecomment-542240749

## Get help

If you need help we encourage you to search on the web first. It will help you discover the community around both project (Gatsby & Sylius). You might find additional resources for learning each library in-depth when you will be ready.

Useful resources:

- https://docs.sylius.com/en/latest/index.html
- https://app.swaggerhub.com/apis/Sylius/sylius-shop-api/1.0.0#/Product
- https://www.gatsbyjs.org/docs/

You can also open
[issues](https://github.com/Gatsbylius/gatsbylius-starter/issues) with the
tag `"question"` and we will do our best to answer it. Of course, you can
[browse answered questions](https://github.com/Gatsbylius/gatsbylius-starter/issues?q=is%3Aissue+label%3Aquestion+is%3Aopen)
and try to help others by answering their opened questions.

If you need anything else, [send an email to the team behind it!](mailto:contact@gatsbylius.com) We can also take care of your project!

## License

MIT
