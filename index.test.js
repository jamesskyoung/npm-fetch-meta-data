
const { getNPMMetaData, getAttribute } = require('./index');

describe('Test NPM Meta Data', () => {
  let options;
    beforeEach(() => {
      options = {
        packageName: 'axios',
      }
    });

    it('should return metadata', async () => {
      const metaData = await getNPMMetaData(options);
      expect(metaData).not.toBeNull();
    });
});
