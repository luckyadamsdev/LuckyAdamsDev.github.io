# Portfolio for Lucky Adams

## Description

This is a static website that shows off my work, both technical and artistic. The design and development were done completely by me, Lucky Adams. This is a static website hosted by GitHub.

Visit the website by following this link: https://luckyadamsdev.github.io

## Getting Started

In any browser, open the [index.html](index.html) file to navigate to the website locally. You may find that the one embedded YouTube video does not load locally. That is normal.

To get set up for running the tests, use [yarn](https://yarnpkg.com/) and run the following command:
```
yarn install
```

## Testing

Both manual and automated tests are used. Automated tests run in CI on every push to master. Manual tests are found in the [tests/manual/](./tests/manual/) folder, and automated tests are found in the [tests/integration/](./tests/integration/) and [tests/unit/](./tests/unit/) folders.

To execute the tests on your local machine, run the following command:
```
npx playwright test
```

## Deploying

This repository uses [GitHub Pages](https://docs.github.com/en/pages). Deployment happens automatically on every push to the `main` branch.

## License

You are welcome to clone this repository. You are not granted permission to redistribute your own copies of this repository. The software is provided "as is", without warranty of any kind, express or implied.
