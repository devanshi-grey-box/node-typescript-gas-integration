# node-typescript-gas-integration
A TypeScript-based starter template for building projects that run in both Node.js and Google Apps Script, with testing, CI/CD, and automated bundling.
# 📦 Node.js + TypeScript + Google Apps Script Integration Project

This project demonstrates a full development workflow that runs in both **local Node.js** and **Google Apps Script (GAS)** environments using TypeScript, Vitest, CLASP, esbuild, GitHub Actions, and Postman.

---

## 🚀 Features

- ✔ TypeScript project with separate Node and GAS builds  
- ✔ `esbuild` bundler for both environments  
- ✔ Vitest testing framework  
- ✔ CLASP integration for Apps Script deployment  
- ✔ GitHub Actions CI/CD (build, test, deploy)  
- ✔ Postman collection for API testing  
- ✔ Uses GitHub Secrets to securely store OAuth credentials  

---

## 📁 Project Structure

/
├── src/
│ ├── node/ # Local Node.js entry
│ ├── gas/ # Google Apps Script entry
│ ├── utils/ # Shared logic
│ └── types/ # Global GAS type definitions
│
├── build/ # GAS build output (bundled, no imports)
├── dist/ # Node build output
├── tests/ # Vitest test cases
├── postman/ # Exported Postman collection
│
├── tsconfig.json # Node TypeScript config
├── tsconfig.gas.json # GAS TypeScript config
├── .gitignore
├── package.json
└── README.md
