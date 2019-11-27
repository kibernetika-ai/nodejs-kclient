var KibernetikaProjectBackendComponent = require('../src');
var cfg = require('./config.json');

var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = cfg.token;

var apiInstance = new KibernetikaProjectBackendComponent.InferenceApi();

var body = new KibernetikaProjectBackendComponent.InferenceRunServingRequest(
    values={
        'prefix': 'Generated in python KClient: ',
        'source': {
            'repository': 'https://github.com/kibernetika-ai/demo-srv'
        },
    },
    'shared/11913',
    cfg.servingName,
    cfg.workspaceServing
);

var callback = function(error, data, response) {
    if (error) {
        console.error(error);
        console.log('response: ', response)
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};

apiInstance.inferenceInferenceVersionStart(body, cfg.workspaceInference, cfg.inferenceName, cfg.inferenceVersion, callback);
