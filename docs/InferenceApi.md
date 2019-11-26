# KibernetikaProjectBackendComponent.InferenceApi

All URIs are relative to *https://dev.kibernetika.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inferenceInferenceVersionDelete**](InferenceApi.md#inferenceInferenceVersionDelete) | **DELETE** /api/v0.2/workspace/{workspace}/inference/{inference}/versions/{version} | Delete inference&#39;s version
[**inferenceInferenceVersionInfo**](InferenceApi.md#inferenceInferenceVersionInfo) | **GET** /api/v0.2/workspace/{workspace}/inference/{inference}/versions/{version} | Return inference&#39;s info for specified version
[**inferenceInferenceVersionStart**](InferenceApi.md#inferenceInferenceVersionStart) | **POST** /api/v0.2/workspace/{workspace}/inference/{inference}/versions/{version}/start | Starts serving
[**inferenceInferenceVersionUpdate**](InferenceApi.md#inferenceInferenceVersionUpdate) | **PUT** /api/v0.2/workspace/{workspace}/inference/{inference}/versions/{version} | Update inference&#39;s info for specified version


<a name="inferenceInferenceVersionDelete"></a>
# **inferenceInferenceVersionDelete**
> inferenceInferenceVersionDelete(workspace, inference, version)

Delete inference&#39;s version

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.InferenceApi();

var workspace = "workspace_example"; // String | Workspace's name

var inference = "inference_example"; // String | Item's name (Inference)

var version = "version_example"; // String | Inference's version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.inferenceInferenceVersionDelete(workspace, inference, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Workspace&#39;s name | 
 **inference** | **String**| Item&#39;s name (Inference) | 
 **version** | **String**| Inference&#39;s version | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="inferenceInferenceVersionInfo"></a>
# **inferenceInferenceVersionInfo**
> ModelsInferenceVersion inferenceInferenceVersionInfo(workspace, inference, version)

Return inference&#39;s info for specified version

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.InferenceApi();

var workspace = "workspace_example"; // String | Workspace's name

var inference = "inference_example"; // String | Item's name (Inference)

var version = "version_example"; // String | Inference's version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.inferenceInferenceVersionInfo(workspace, inference, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Workspace&#39;s name | 
 **inference** | **String**| Item&#39;s name (Inference) | 
 **version** | **String**| Inference&#39;s version | 

### Return type

[**ModelsInferenceVersion**](ModelsInferenceVersion.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="inferenceInferenceVersionStart"></a>
# **inferenceInferenceVersionStart**
> ModelsServing inferenceInferenceVersionStart(body, workspace, inference, version)

Starts serving

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.InferenceApi();

var body = new KibernetikaProjectBackendComponent.InferenceRunServingRequest(); // InferenceRunServingRequest | 

var workspace = "workspace_example"; // String | Workspace's name

var inference = "inference_example"; // String | Item's name (Inference)

var version = "version_example"; // String | Inference's version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.inferenceInferenceVersionStart(body, workspace, inference, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InferenceRunServingRequest**](InferenceRunServingRequest.md)|  | 
 **workspace** | **String**| Workspace&#39;s name | 
 **inference** | **String**| Item&#39;s name (Inference) | 
 **version** | **String**| Inference&#39;s version | 

### Return type

[**ModelsServing**](ModelsServing.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="inferenceInferenceVersionUpdate"></a>
# **inferenceInferenceVersionUpdate**
> ModelsInferenceVersion inferenceInferenceVersionUpdate(body, workspace, inference, version)

Update inference&#39;s info for specified version

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.InferenceApi();

var body = new KibernetikaProjectBackendComponent.ModelsInferenceVersion(); // ModelsInferenceVersion | 

var workspace = "workspace_example"; // String | Workspace's name

var inference = "inference_example"; // String | Item's name (Inference)

var version = "version_example"; // String | Inference's version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.inferenceInferenceVersionUpdate(body, workspace, inference, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsInferenceVersion**](ModelsInferenceVersion.md)|  | 
 **workspace** | **String**| Workspace&#39;s name | 
 **inference** | **String**| Item&#39;s name (Inference) | 
 **version** | **String**| Inference&#39;s version | 

### Return type

[**ModelsInferenceVersion**](ModelsInferenceVersion.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

