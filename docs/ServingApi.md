# KibernetikaProjectBackendComponent.ServingApi

All URIs are relative to *https://dev.kibernetika.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servingDelete**](ServingApi.md#servingDelete) | **DELETE** /api/v0.2/workspace/{workspace}/serving/{serving} | Delete serving
[**servingDisable**](ServingApi.md#servingDisable) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/disable | Disable serving
[**servingEnable**](ServingApi.md#servingEnable) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/enable | Enable serving
[**servingInfo**](ServingApi.md#servingInfo) | **GET** /api/v0.2/workspace/{workspace}/serving/{serving} | Return serving&#39;s info
[**servingTFProxyModel**](ServingApi.md#servingTFProxyModel) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model} | TF proxy to serving (model)
[**servingTFProxyModelSignature**](ServingApi.md#servingTFProxyModelSignature) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model}/{signature} | TF proxy to serving (model, signature)
[**servingTFProxyModelSignatureVersion**](ServingApi.md#servingTFProxyModelSignatureVersion) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model}/{signature}/{version} | TF proxy to serving (model, signature, version)
[**updateServing**](ServingApi.md#updateServing) | **PUT** /api/v0.2/workspace/{workspace}/serving/{serving} | Update serving


<a name="servingDelete"></a>
# **servingDelete**
> servingDelete(workspace, serving, opts)

Delete serving

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var workspace = "workspace_example"; // String | Workspace's name

var serving = "serving_example"; // String | Serving's Name or ID

var opts = { 
  'dependencies': true, // Boolean | Get only dependencies
  'confirm': "confirm_example", // String | String for confirmation
  'force': true // Boolean | Force deletion
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.servingDelete(workspace, serving, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Workspace&#39;s name | 
 **serving** | **String**| Serving&#39;s Name or ID | 
 **dependencies** | **Boolean**| Get only dependencies | [optional] 
 **confirm** | **String**| String for confirmation | [optional] 
 **force** | **Boolean**| Force deletion | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="servingDisable"></a>
# **servingDisable**
> ModelsServing servingDisable(workspace, serving)

Disable serving

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var workspace = "workspace_example"; // String | Workspace's name

var serving = "serving_example"; // String | Serving's Name or ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servingDisable(workspace, serving, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Workspace&#39;s name | 
 **serving** | **String**| Serving&#39;s Name or ID | 

### Return type

[**ModelsServing**](ModelsServing.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="servingEnable"></a>
# **servingEnable**
> ModelsServing servingEnable(workspace, serving)

Enable serving

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var workspace = "workspace_example"; // String | Workspace's name

var serving = "serving_example"; // String | Serving's Name or ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servingEnable(workspace, serving, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Workspace&#39;s name | 
 **serving** | **String**| Serving&#39;s Name or ID | 

### Return type

[**ModelsServing**](ModelsServing.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="servingInfo"></a>
# **servingInfo**
> ModelsServing servingInfo(workspace, serving)

Return serving&#39;s info

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var workspace = "workspace_example"; // String | Workspace's name

var serving = "serving_example"; // String | Serving's Name or ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servingInfo(workspace, serving, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Workspace&#39;s name | 
 **serving** | **String**| Serving&#39;s Name or ID | 

### Return type

[**ModelsServing**](ModelsServing.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="servingTFProxyModel"></a>
# **servingTFProxyModel**
> &#39;String&#39; servingTFProxyModel(model, body, workspace, serving, port)

TF proxy to serving (model)

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var model = "model_example"; // String | Serving model

var body = "body_example"; // String | 

var workspace = "workspace_example"; // String | Workspace's name

var serving = "serving_example"; // String | Serving's Name or ID

var port = "port_example"; // String | Serving port


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servingTFProxyModel(model, body, workspace, serving, port, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| Serving model | 
 **body** | [**String**](String.md)|  | 
 **workspace** | **String**| Workspace&#39;s name | 
 **serving** | **String**| Serving&#39;s Name or ID | 
 **port** | **String**| Serving port | 

### Return type

**&#39;String&#39;**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/json
 - **Accept**: application/json

<a name="servingTFProxyModelSignature"></a>
# **servingTFProxyModelSignature**
> &#39;String&#39; servingTFProxyModelSignature(model, signature, body, workspace, serving, port)

TF proxy to serving (model, signature)

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var model = "model_example"; // String | Serving model

var signature = "signature_example"; // String | Serving signature

var body = "body_example"; // String | 

var workspace = "workspace_example"; // String | Workspace's name

var serving = "serving_example"; // String | Serving's Name or ID

var port = "port_example"; // String | Serving port


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servingTFProxyModelSignature(model, signature, body, workspace, serving, port, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| Serving model | 
 **signature** | **String**| Serving signature | 
 **body** | [**String**](String.md)|  | 
 **workspace** | **String**| Workspace&#39;s name | 
 **serving** | **String**| Serving&#39;s Name or ID | 
 **port** | **String**| Serving port | 

### Return type

**&#39;String&#39;**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/json
 - **Accept**: application/json

<a name="servingTFProxyModelSignatureVersion"></a>
# **servingTFProxyModelSignatureVersion**
> &#39;String&#39; servingTFProxyModelSignatureVersion(model, signature, version, body, workspace, serving, port)

TF proxy to serving (model, signature, version)

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var model = "model_example"; // String | Serving model

var signature = "signature_example"; // String | Serving signature

var version = "version_example"; // String | Serving version

var body = "body_example"; // String | 

var workspace = "workspace_example"; // String | Workspace's name

var serving = "serving_example"; // String | Serving's Name or ID

var port = "port_example"; // String | Serving port


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servingTFProxyModelSignatureVersion(model, signature, version, body, workspace, serving, port, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| Serving model | 
 **signature** | **String**| Serving signature | 
 **version** | **String**| Serving version | 
 **body** | [**String**](String.md)|  | 
 **workspace** | **String**| Workspace&#39;s name | 
 **serving** | **String**| Serving&#39;s Name or ID | 
 **port** | **String**| Serving port | 

### Return type

**&#39;String&#39;**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/json
 - **Accept**: application/json

<a name="updateServing"></a>
# **updateServing**
> ModelsServing updateServing(body, workspace, serving)

Update serving

### Example
```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');
var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KibernetikaProjectBackendComponent.ServingApi();

var body = new KibernetikaProjectBackendComponent.MlappServing(); // MlappServing | 

var workspace = "workspace_example"; // String | Workspace's name

var serving = "serving_example"; // String | Serving's Name or ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateServing(body, workspace, serving, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MlappServing**](MlappServing.md)|  | 
 **workspace** | **String**| Workspace&#39;s name | 
 **serving** | **String**| Serving&#39;s Name or ID | 

### Return type

[**ModelsServing**](ModelsServing.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

