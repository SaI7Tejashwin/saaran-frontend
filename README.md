# Saaran - SummarizationAppFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

Drop in text documents to get the summary of what the content was.
Can upscale this to PDFs and other large text documents as well.

## Setup

If possible use NVM (Node Version Manager) version 18 for node setup, a cleaner way to setup node rather than handling npm globally.

- npm version -> v9.5.1
- node version -> v18.16.1

> do a `npm install` once cloned

## Stack

- Angular (frontend)
- Angular Material (UI)
- FastAPI (Backend API)
- Spacy (NLP toolkit)

## Git Branching Strategy

Get a branch from master to implement a feature, merge it into the `test-branch` and see if it is stable with other changes, then merge it to master. Any sort of deployment or build releases will be derived from the master branch.

## Development server

> `npm run start` to test your code in a dev server (same as `ng serve`)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
