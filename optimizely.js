const optimizelySdk = require('@optimizely/optimizely-sdk');

const optimizelyClient = optimizelySdk.createInstance({
  sdkKey: process.env.SDK_KEY,
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1000,
  },
});

module.exports = optimizelyClient;
