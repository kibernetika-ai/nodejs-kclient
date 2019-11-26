var KibernetikaProjectBackendComponent = require('../src');
var cfg = require('./config.json');

var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = cfg.token;

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var callback = function(error, data, response) {
    if (error) {
        console.error('error', error);
    } else {
        console.log('API called successfully.', data);
    }
};

apiInstance.servingDisable(cfg.workspaceServing, cfg.servingName, callback);
apiInstance.servingEnable(cfg.workspaceServing, cfg.servingName, callback);
