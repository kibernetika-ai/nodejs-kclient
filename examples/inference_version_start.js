var KibernetikaProjectBackendComponent = require('../src');
var cfg = require('./config.json');

var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

defaultClient.basePath = 'http://localhost:7272';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = cfg.token;


var apiInstance = new KibernetikaProjectBackendComponent.InferenceApi();

var body = new KibernetikaProjectBackendComponent.InferenceRunServingRequest(
    {
        "recognizer_threshold":0.5,
        "recognizer_model_check_period":5,
        "face_detection":{"model":"coco-faster-rcnn-pretrained","version":"1.0.0","workspace":"kuberlab-demo"},
        "stream":{"key":"live","input":"camera","output":"mjpg","description":"none","params":{"cloud_status":"0","output_fps":"15"}},
        "stream2":{"key":"live2","input":"camera","output":"mjpg","description":"none","params":{"cloud_status":"0","output_fps":"15"}},
        "head_pose":true
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
