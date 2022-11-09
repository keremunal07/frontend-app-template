# Frontend App Template

## Installation

Please use yarn as a package manager

## Structure

```
public/ # all icons, pngs, fonts etc.
src/
├─ components/
│  ├─ commons/ # reusable components
│  ├─ templates/ # the page where we add the components
│  ├─ icons/  # svg-type components
├─ config/ #  configs ex: abis
├─ contexts/ #  app contexts
├─ graphql/ #  auto generated graphql queries and mutations
├─ hooks/ #  hooks we created in the project
├─ pages/ # actual pages that responds to url params - dynamic (next)
├─ utils/ #  utils
├─ constants/ # constant variables
├─ styles/
│  ├─ components/ scss files we add for packages etc. #
│  ├─ mixins/ # partial scss files (mixins, functions, variables etc.)
│  ├─ variables/ # all scss variable datas ex: breakpoints, typography
│  ├─ globals - global scss file
types/
├─ components/
│  ├─ common/ # types of common components
│  ├─ templates/ # types of templates
├─ config/ # types of configs
├─ contexts/ # types of contexts
├─ hooks/ # types of hooks
├─ utils/ # types of utils

```

## Example Create Component Folder Structure

Note: We don't use default exporting in this project. Instead, we add indexes to each folder and export from there (base: src)

```
├─ components/
│  ├─  index.ts # export * from './commons';
│  ├─  commons/
│  ├─ ├─ index.ts # export * from './input';
│  ├─ ├─ input/
│  ├─ ├─ ├─ index.tsx
│  ├─ ├─ ├─ input.module.scss
│  ├─ ├─ ├─ input.test.tsx

```

Add the types of this component:

```
├─ types/
│  ├─ index.ts # export * from './components';
│  ├─ components/
│  ├─ ├─ index.ts # export * from './common';
│  ├─ ├─ common/
│  ├─ ├─ ├─ index.ts # export * from './input';
│  ├─ ├─ ├─ input/ # add types to this index

```

## Styling

Using scss in the project. Each component's styles should be added to its own modular scss file. Global variables, styles must be in the /styles folder.

## Test

We use Cypress for the e2e test. For unit tests, we use jest and react testing library.

### Example Cypress Test

```
├─ cypress/
├─ ├─ e2e/
├─ ├─ ├─ spec.cy.ts
```

```
spec.cy.ts
describe('example test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
  });
});

```

### How to run Cypress tests

```
yarn cy:open
yarn cy:run

```

### Example Jest with React Testing Library Test

```
├─ components/
│  ├─  commons/
│  ├─ ├─ input/
│  ├─ ├─ ├─ input.test.tsx

```

```
input.test.tsx

import { Input } from './index';
import { render } from '@testing-library/react';

test('Render input', () => {
  render(<Input />);
});

```

### How to run unit tests

```
yarn test

```
