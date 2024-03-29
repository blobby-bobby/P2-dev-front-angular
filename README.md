# Télésport

![Telesport](/src/assets/cover-page.jpg)

Télésport is a data visualization project focused on presenting Olympic Games data in an interactive and engaging way.
The project features a home page with a pie chart showcasing medals per country, alongside general data on the Olympic Games.
Users can click on a portion of the pie chart to access detailed country-specific data, presented in a dynamic line chart format.

---

## Stack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3,

> Update: the project has been migrated to **Angular version 17.2.4**.

The following stack has been used to complete the project

- `RxJS` for the Observables
- `Charts.js` and `ng2-charts` to render the charts

---

## Development server

> Don't forget to install your node_modules before starting (`npm install`).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

## Architecture

The project has the following structure:

`components` folder: contains every reusable components
`pages` folder: contains components used for routing
`core` folder: contains the business logic (`services`, `models` folders for the Types, `utils` for the config of features)

---

## Angular 17 updates on the codebase

- All the components has been set to standalone, with the command `ng generate @angular/core:standalone`
- `app-routing.module.ts` has been replaced with `app-routes.ts` to fit Angular 17 starter projects standards, and routing has been simplified
