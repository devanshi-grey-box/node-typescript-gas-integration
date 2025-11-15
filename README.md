# Node.js + TypeScript + Google Apps Script Integration Project

A baseline template demonstrating how to run shared TypeScript code in Node.js, Google Apps Script, and automate everything with Vitest, esbuild, CLASP, and GitHub Actions.

------------------------------------------------------------

# Project Structure

/
    src/
        node/
            index.ts
        gas/
            index.ts
        shared/
            add.ts

    tests/
        add.test.ts

    build/          (Apps Script output)
    dist/           (Node output)
    postman/
        collection.json

    package.json
    tsconfig.json
    tsconfig.gas.json
    esbuild.node.js
    esbuild.gas.js
    .clasp.json
    .env
    .gitignore

------------------------------------------------------------

# Installation & Setup (ALL Commands)

Install dependencies:
    npm install

Build everything (Node + GAS):
    npm run build

Run Node output:
    node dist/node.bundle.js

Build Google Apps Script bundle:
    npm run build:gas

Run Vitest tests:
    npm test

Login to Google with CLASP:
    clasp login

Create new Google Apps Script project:
    clasp create --type webapp

Deploy to GAS:
    npm run deploy

Create .env file manually:
    GOOGLE_TOKEN=
    NOTION_TOKEN=
    SLACK_TOKEN=

Add GitHub Secrets manually:
    GOOGLE_TOKEN
    NOTION_TOKEN
    SLACK_TOKEN

------------------------------------------------------------

# Running Tests

    npm test

------------------------------------------------------------

# Building

Build Node bundle:
    npm run build:node

Build GAS bundle:
    npm run build:gas

------------------------------------------------------------

# Google Apps Script Deployment

Login:
    clasp login

Deploy:
    npm run deploy

------------------------------------------------------------

# Postman Collection

Located at:
    /postman/collection.json

Import into Postman to test:
- Local Node endpoints
- Google Apps Script web endpoints

------------------------------------------------------------

# CI/CD (GitHub Actions)

Workflow file:
    .github/workflows/ci.yml

Secrets required:
    GOOGLE_TOKEN
    NOTION_TOKEN
    SLACK_TOKEN

------------------------------------------------------------

# Notes

Google Apps Script cannot use:
- import / export
- async / await

The esbuild GAS bundler converts the code into a GAS-compatible format.

------------------------------------------------------------

# Done

This README provides everything needed to:
- Install  
- Build  
- Test  
- Deploy  
- Run CI/CD  
- Test with Postman  
- Sync Node + GAS codebases
