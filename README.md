# Ghost Sequelize 

## Installation

`npm install ghost-sequelize --save`

## Overview

### Config (default listed below)

```json
{
  "database": {
    "host": "localhost",
    "username": "root",
    "password": "password",
    "database": "ghost_sequelize_test",
    "options": {
      "dialect": "mysql",
      "logging": false,
      "sync": {
        "force": false
      }
    },
    "models": {
      "dirPath": "models" // relative to the root of your project
    }
  }
}
```

### Models
The module will attempt to load all sequelize model files from the directory 
provided in the config object. All models will be available via the `getDb()`
method. See examples below.

Follow the steps below to get the module up and running.
 
### 1. Require 

```js
const GhostSequelize = require('ghost-sequelize');
```

### 2. Instantiate

```js
const DbService = new GhostSequelize(config)
// See config above
```

### 3. Access Db (model layer)

```js
const Db = DbService.getDb();
Db.myModel.findById('someId')
.then(result => { ... })
.catch(err => { ... });
```