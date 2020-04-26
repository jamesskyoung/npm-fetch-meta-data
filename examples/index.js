'use strict';

const { getNPMMetaData } = require('../index');

(async (args) => {

  if (args.length < 3) {
    console.error('Missing package name.')
    console.error('Run with ==> node index,js packagename');
    console.error('Example:  node index.js request');
    process.exit(-1);
  }
  const options = {
    packageName: args[2],
  };
  try {
    const metaData = await getNPMMetaData(options);
    if (metaData.author) {
      console.log(`Package author..............${metaData.author.name ? metaData.author.name : 'N/A'}`);
      console.log(`Package author email........${metaData.author.email ? metaData.author.email : 'N/A'}`);
      console.log(`Package author Url..........${metaData.author.url ? metaData.author.url : 'N/A'}`);
    }
    console.log(`Package name................${metaData.name}`);
    console.log(`Package description.........${metaData.description}`);
    console.log(`Number of versions..........${Object.keys(metaData.versions).length}`);
    console.log(`Last updated................${metaData.time.modified}`);
    console.log(`Homepage....................${metaData.homepage}`);
    console.log(`Repository type.............${metaData.repository.type}`);
    console.log(`Repository url..............${metaData.repository.url}`);
    console.log(`Integrity...................${metaData.versions[metaData['dist-tags'].latest].dist.integrity}`);
    console.log(latest);

  } catch (err) {
    if ( err.response ) {
      if (err.response.status === 404) {
        console.error(`${options.packageName} was not found in the registry.`)
      } else {
        console.error(`Fetching ${options.packageName} has an unrecoverable error`);
        console.error(err.message) 
      }
    }
  }
})(process.argv)