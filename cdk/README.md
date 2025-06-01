# 🧙‍♂️ MTG Wizard Cards API

A Typescript application using AWS Lambda, API Gateway, and MTG API.

### Setup Instructions

- Clone or fork the repository.

- Install the bun toolkit.

- Install dependencies locally.

  - From root, `cd cdk` -> `bun install`.

  - From root, `cd cdk/lambda` -> `bun install`.

- If forked update repository secrets with AWS keys.

- Push to main to automatically run Github workflow or manually run it from Github actions.

- Navigate to API Gateway in AWS to identify URL.

  - Append /wizards to URL to recieve results.

- To run testcases manually run `vitest run` or `bun test`

---