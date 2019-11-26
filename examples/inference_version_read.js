var KibernetikaProjectBackendComponent = require('../src');
var cfg = require('./config.json');

var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = cfg.token;

var apiInstance = new KibernetikaProjectBackendComponent.InferenceApi();

var callback = function(error, data, response) {
    if (error) {
        console.error('error', error);
    } else {
        console.log('API called successfully.', data);
    }
};
apiInstance.inferenceInferenceVersionInfo(cfg.workspaceInference, cfg.inferenceName, cfg.inferenceVersion, callback);
