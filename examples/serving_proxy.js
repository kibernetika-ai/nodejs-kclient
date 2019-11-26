var KibernetikaProjectBackendComponent = require('../src');
var cfg = require('./config.json');

var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = cfg.token;

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var model = 'any';
var body = {
    'raw_input': true,
    'options': {
        'noCache': true
    },
    'inputs': {
        'input': {
            'data': 'data in JSON',
            'dtype': 7
        },
    }
};
var port = '9000';

var callback = function(error, data, response) {
    if (error) {
        console.error('error', error);
    } else {
        console.log('API called successfully.', data);
    }
};

apiInstance.servingTFProxyModel(model, body, cfg.workspaceServing, cfg.servingName, port, callback);
