
# Microserviço de autenticação com Nodejs

## Nesse projeto realizamos uma api REST (CRUD)


```

/* Comandos & Dependencias instaladas durante o estudo *\

Nodejs
npm init
npm install -g typescript
npm install --save-dev typescript
tsc --init
npm install --save-dev @types/node 
npm install --save-dev ts-node-dev 
npm install --save jsonwebtoken
npm install --save-dev @types/jsonwebtoken



OBS: package.json...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./",
    "build": "tsc -p .",
    "dev": "ts-node-dev --respawn --transpile-only --igonere-watch node_modules --no-notify src/index.ts"
  },
  "dependencies": {
    "express": "^4.17.1",
    "http-status-codes": "^2.1.4"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^16.11.1",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.4.4"
  }

```