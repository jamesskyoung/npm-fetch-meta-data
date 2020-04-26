const axios = require('axios');

exports.getNPMMetaData = async (options) => {
    const registry = options.registry ? options.registry : 'https://registry.npmjs.org/';
    const packageName = options.packageName;
    const response = await axios.get(`${registry}${packageName}`);
    return response.data;;
}
