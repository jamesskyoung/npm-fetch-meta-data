# NPM Fetch Meta Data

A very simple API to retrieve metadata about an NPM package.  There are no helper functions to acquire individual parts of the metadata (example: versions..) rather, the entire JSON object is returned to the caller in order that the caller can do whatever it wishes.

## Installation

```
npm install npm-fetch-meta-data
```

## Usage

```javascript
const { getNPMMetaData } = require('npm-fetch-meta-data');
const options = {
    packageName: PACKAGE_NAME,  // REQUIRED --> ex: axios
    registry: REGISTRY_NAME, // OPTOINAL --> defaults to https://registry.npmjs.org/
  };

const metaData = await getNPMMetaData(options);

// process metadata object
// log some info about this package

console.log(`Package name................${metaData.name}`);
console.log(`Package description.........${metaData.description}`);
console.log(`Number of versions..........${Object.keys(metaData.versions).length}`);
console.log(`Last updated................${metaData.time.modified}`);
console.log(`Homepage....................${metaData.homepage}`);
console.log(`Repository type.............${metaData.repository.type}`);
console.log(`Repository url..............${metaData.repository.url}`);
console.log(`Integrity...................${metaData.versions[metaData['dist-tags'].latest].dist.integrity}`);

```

To view the complete payload from the NPM registry query, try this... (this package, but you can use any package)

https://registry.npmjs.org/npm-fetch-meta-data

Just parse the data that is returned.

## Error Handling
If a package is not found the AXIOS error object is returned... (Generally a 404)

## Running the example

```bash
cd examples
node index.js cookie-parser
```
This will yield
```bash
Package author..............James Young
Package author email........N/A
Package author Url..........N/A
Package name................npm-fetch-meta-data
Package description.........Fetch metadata about any NPM package
Number of versions..........1
Last updated................2020-04-26T18:37:02.876Z
Homepage....................https://github.com/jamesskyoung/npm-fetch-meta-data#readme
Repository type.............git
Repository url..............git+https://github.com/jamesskyoung/npm-fetch-meta-data.git
Integrity...................sha512-DgjO6hbOdCo9pT9GGgFJ2jtwgGnJ2OmVaCC6ezi+liFVwOLmorXbH+Y5SZu7hjMlxoVuwiLMl+yc4mwRcYATBw==
```

## Tests

```bash
npm test
```

