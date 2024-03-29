# kibernetika_project_backend_component

KibernetikaProjectBackendComponent - JavaScript client for kibernetika_project_backend_component
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.2
- Package version: 0.2
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install kibernetika_project_backend_component --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your kibernetika_project_backend_component from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('kibernetika_project_backend_component')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KibernetikaProjectBackendComponent = require('kibernetika_project_backend_component');

var defaultClient = KibernetikaProjectBackendComponent.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new KibernetikaProjectBackendComponent.InferenceApi()

var workspace = "workspace_example"; // {String} Workspace's name

var inference = "inference_example"; // {String} Item's name (Inference)

var version = "version_example"; // {String} Inference's version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.inferenceInferenceVersionDelete(workspace, inference, version, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://dev.kibernetika.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KibernetikaProjectBackendComponent.InferenceApi* | [**inferenceInferenceVersionDelete**](docs/InferenceApi.md#inferenceInferenceVersionDelete) | **DELETE** /api/v0.2/workspace/{workspace}/inference/{inference}/versions/{version} | Delete inference&#39;s version
*KibernetikaProjectBackendComponent.InferenceApi* | [**inferenceInferenceVersionInfo**](docs/InferenceApi.md#inferenceInferenceVersionInfo) | **GET** /api/v0.2/workspace/{workspace}/inference/{inference}/versions/{version} | Return inference&#39;s info for specified version
*KibernetikaProjectBackendComponent.InferenceApi* | [**inferenceInferenceVersionStart**](docs/InferenceApi.md#inferenceInferenceVersionStart) | **POST** /api/v0.2/workspace/{workspace}/inference/{inference}/versions/{version}/start | Starts serving
*KibernetikaProjectBackendComponent.InferenceApi* | [**inferenceInferenceVersionUpdate**](docs/InferenceApi.md#inferenceInferenceVersionUpdate) | **PUT** /api/v0.2/workspace/{workspace}/inference/{inference}/versions/{version} | Update inference&#39;s info for specified version
*KibernetikaProjectBackendComponent.ServingApi* | [**servingDelete**](docs/ServingApi.md#servingDelete) | **DELETE** /api/v0.2/workspace/{workspace}/serving/{serving} | Delete serving
*KibernetikaProjectBackendComponent.ServingApi* | [**servingDisable**](docs/ServingApi.md#servingDisable) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/disable | Disable serving
*KibernetikaProjectBackendComponent.ServingApi* | [**servingEnable**](docs/ServingApi.md#servingEnable) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/enable | Enable serving
*KibernetikaProjectBackendComponent.ServingApi* | [**servingInfo**](docs/ServingApi.md#servingInfo) | **GET** /api/v0.2/workspace/{workspace}/serving/{serving} | Return serving&#39;s info
*KibernetikaProjectBackendComponent.ServingApi* | [**servingTFProxyModel**](docs/ServingApi.md#servingTFProxyModel) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model} | TF proxy to serving (model)
*KibernetikaProjectBackendComponent.ServingApi* | [**servingTFProxyModelSignature**](docs/ServingApi.md#servingTFProxyModelSignature) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model}/{signature} | TF proxy to serving (model, signature)
*KibernetikaProjectBackendComponent.ServingApi* | [**servingTFProxyModelSignatureVersion**](docs/ServingApi.md#servingTFProxyModelSignatureVersion) | **POST** /api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model}/{signature}/{version} | TF proxy to serving (model, signature, version)
*KibernetikaProjectBackendComponent.ServingApi* | [**updateServing**](docs/ServingApi.md#updateServing) | **PUT** /api/v0.2/workspace/{workspace}/serving/{serving} | Update serving


## Documentation for Models

 - [KibernetikaProjectBackendComponent.DealerclientResourceLimit](docs/DealerclientResourceLimit.md)
 - [KibernetikaProjectBackendComponent.InferenceRunServingRequest](docs/InferenceRunServingRequest.md)
 - [KibernetikaProjectBackendComponent.MlappAutoscale](docs/MlappAutoscale.md)
 - [KibernetikaProjectBackendComponent.MlappDatasetFSSource](docs/MlappDatasetFSSource.md)
 - [KibernetikaProjectBackendComponent.MlappDatasetSource](docs/MlappDatasetSource.md)
 - [KibernetikaProjectBackendComponent.MlappEnv](docs/MlappEnv.md)
 - [KibernetikaProjectBackendComponent.MlappGitRepoVolumeSource](docs/MlappGitRepoVolumeSource.md)
 - [KibernetikaProjectBackendComponent.MlappImages](docs/MlappImages.md)
 - [KibernetikaProjectBackendComponent.MlappModelSource](docs/MlappModelSource.md)
 - [KibernetikaProjectBackendComponent.MlappPersistentStorage](docs/MlappPersistentStorage.md)
 - [KibernetikaProjectBackendComponent.MlappPort](docs/MlappPort.md)
 - [KibernetikaProjectBackendComponent.MlappResourceAccelerators](docs/MlappResourceAccelerators.md)
 - [KibernetikaProjectBackendComponent.MlappResourceRequest](docs/MlappResourceRequest.md)
 - [KibernetikaProjectBackendComponent.MlappS3BucketSource](docs/MlappS3BucketSource.md)
 - [KibernetikaProjectBackendComponent.MlappServing](docs/MlappServing.md)
 - [KibernetikaProjectBackendComponent.MlappServingResponseParam](docs/MlappServingResponseParam.md)
 - [KibernetikaProjectBackendComponent.MlappServingSpec](docs/MlappServingSpec.md)
 - [KibernetikaProjectBackendComponent.MlappServingSpecOptions](docs/MlappServingSpecOptions.md)
 - [KibernetikaProjectBackendComponent.MlappServingSpecParam](docs/MlappServingSpecParam.md)
 - [KibernetikaProjectBackendComponent.MlappServingSpecParamValue](docs/MlappServingSpecParamValue.md)
 - [KibernetikaProjectBackendComponent.MlappUniversalServing](docs/MlappUniversalServing.md)
 - [KibernetikaProjectBackendComponent.MlappVolume](docs/MlappVolume.md)
 - [KibernetikaProjectBackendComponent.MlappVolumeMount](docs/MlappVolumeMount.md)
 - [KibernetikaProjectBackendComponent.ModelsInferenceVersion](docs/ModelsInferenceVersion.md)
 - [KibernetikaProjectBackendComponent.ModelsServing](docs/ModelsServing.md)
 - [KibernetikaProjectBackendComponent.ModelsTaskFormElement](docs/ModelsTaskFormElement.md)
 - [KibernetikaProjectBackendComponent.ModelsTaskFormElementStreamExtended](docs/ModelsTaskFormElementStreamExtended.md)
 - [KibernetikaProjectBackendComponent.ModelsTaskFormElementValue](docs/ModelsTaskFormElementValue.md)
 - [KibernetikaProjectBackendComponent.V1EmptyDirVolumeSource](docs/V1EmptyDirVolumeSource.md)
 - [KibernetikaProjectBackendComponent.V1FlexVolumeSource](docs/V1FlexVolumeSource.md)
 - [KibernetikaProjectBackendComponent.V1HostPathType](docs/V1HostPathType.md)
 - [KibernetikaProjectBackendComponent.V1HostPathVolumeSource](docs/V1HostPathVolumeSource.md)
 - [KibernetikaProjectBackendComponent.V1LocalObjectReference](docs/V1LocalObjectReference.md)
 - [KibernetikaProjectBackendComponent.V1NFSVolumeSource](docs/V1NFSVolumeSource.md)
 - [KibernetikaProjectBackendComponent.V1PersistentVolumeClaimVolumeSource](docs/V1PersistentVolumeClaimVolumeSource.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

