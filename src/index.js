/**
 * Kibernetika project, backend component
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DealerclientResourceLimit', 'model/InferenceRunServingRequest', 'model/MlappAutoscale', 'model/MlappDatasetFSSource', 'model/MlappDatasetSource', 'model/MlappEnv', 'model/MlappGitRepoVolumeSource', 'model/MlappImages', 'model/MlappModelSource', 'model/MlappPersistentStorage', 'model/MlappPort', 'model/MlappResourceAccelerators', 'model/MlappResourceRequest', 'model/MlappS3BucketSource', 'model/MlappServing', 'model/MlappServingResponseParam', 'model/MlappServingSpec', 'model/MlappServingSpecOptions', 'model/MlappServingSpecParam', 'model/MlappServingSpecParamValue', 'model/MlappUniversalServing', 'model/MlappVolume', 'model/MlappVolumeMount', 'model/ModelsInferenceVersion', 'model/ModelsServing', 'model/ModelsTaskFormElement', 'model/ModelsTaskFormElementStreamExtended', 'model/ModelsTaskFormElementValue', 'model/V1EmptyDirVolumeSource', 'model/V1FlexVolumeSource', 'model/V1HostPathType', 'model/V1HostPathVolumeSource', 'model/V1LocalObjectReference', 'model/V1NFSVolumeSource', 'model/V1PersistentVolumeClaimVolumeSource', 'api/InferenceApi', 'api/ServingApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DealerclientResourceLimit'), require('./model/InferenceRunServingRequest'), require('./model/MlappAutoscale'), require('./model/MlappDatasetFSSource'), require('./model/MlappDatasetSource'), require('./model/MlappEnv'), require('./model/MlappGitRepoVolumeSource'), require('./model/MlappImages'), require('./model/MlappModelSource'), require('./model/MlappPersistentStorage'), require('./model/MlappPort'), require('./model/MlappResourceAccelerators'), require('./model/MlappResourceRequest'), require('./model/MlappS3BucketSource'), require('./model/MlappServing'), require('./model/MlappServingResponseParam'), require('./model/MlappServingSpec'), require('./model/MlappServingSpecOptions'), require('./model/MlappServingSpecParam'), require('./model/MlappServingSpecParamValue'), require('./model/MlappUniversalServing'), require('./model/MlappVolume'), require('./model/MlappVolumeMount'), require('./model/ModelsInferenceVersion'), require('./model/ModelsServing'), require('./model/ModelsTaskFormElement'), require('./model/ModelsTaskFormElementStreamExtended'), require('./model/ModelsTaskFormElementValue'), require('./model/V1EmptyDirVolumeSource'), require('./model/V1FlexVolumeSource'), require('./model/V1HostPathType'), require('./model/V1HostPathVolumeSource'), require('./model/V1LocalObjectReference'), require('./model/V1NFSVolumeSource'), require('./model/V1PersistentVolumeClaimVolumeSource'), require('./api/InferenceApi'), require('./api/ServingApi'));
  }
}(function(ApiClient, DealerclientResourceLimit, InferenceRunServingRequest, MlappAutoscale, MlappDatasetFSSource, MlappDatasetSource, MlappEnv, MlappGitRepoVolumeSource, MlappImages, MlappModelSource, MlappPersistentStorage, MlappPort, MlappResourceAccelerators, MlappResourceRequest, MlappS3BucketSource, MlappServing, MlappServingResponseParam, MlappServingSpec, MlappServingSpecOptions, MlappServingSpecParam, MlappServingSpecParamValue, MlappUniversalServing, MlappVolume, MlappVolumeMount, ModelsInferenceVersion, ModelsServing, ModelsTaskFormElement, ModelsTaskFormElementStreamExtended, ModelsTaskFormElementValue, V1EmptyDirVolumeSource, V1FlexVolumeSource, V1HostPathType, V1HostPathVolumeSource, V1LocalObjectReference, V1NFSVolumeSource, V1PersistentVolumeClaimVolumeSource, InferenceApi, ServingApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var KibernetikaProjectBackendComponent = require('index'); // See note below*.
   * var xxxSvc = new KibernetikaProjectBackendComponent.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new KibernetikaProjectBackendComponent.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new KibernetikaProjectBackendComponent.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new KibernetikaProjectBackendComponent.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DealerclientResourceLimit model constructor.
     * @property {module:model/DealerclientResourceLimit}
     */
    DealerclientResourceLimit: DealerclientResourceLimit,
    /**
     * The InferenceRunServingRequest model constructor.
     * @property {module:model/InferenceRunServingRequest}
     */
    InferenceRunServingRequest: InferenceRunServingRequest,
    /**
     * The MlappAutoscale model constructor.
     * @property {module:model/MlappAutoscale}
     */
    MlappAutoscale: MlappAutoscale,
    /**
     * The MlappDatasetFSSource model constructor.
     * @property {module:model/MlappDatasetFSSource}
     */
    MlappDatasetFSSource: MlappDatasetFSSource,
    /**
     * The MlappDatasetSource model constructor.
     * @property {module:model/MlappDatasetSource}
     */
    MlappDatasetSource: MlappDatasetSource,
    /**
     * The MlappEnv model constructor.
     * @property {module:model/MlappEnv}
     */
    MlappEnv: MlappEnv,
    /**
     * The MlappGitRepoVolumeSource model constructor.
     * @property {module:model/MlappGitRepoVolumeSource}
     */
    MlappGitRepoVolumeSource: MlappGitRepoVolumeSource,
    /**
     * The MlappImages model constructor.
     * @property {module:model/MlappImages}
     */
    MlappImages: MlappImages,
    /**
     * The MlappModelSource model constructor.
     * @property {module:model/MlappModelSource}
     */
    MlappModelSource: MlappModelSource,
    /**
     * The MlappPersistentStorage model constructor.
     * @property {module:model/MlappPersistentStorage}
     */
    MlappPersistentStorage: MlappPersistentStorage,
    /**
     * The MlappPort model constructor.
     * @property {module:model/MlappPort}
     */
    MlappPort: MlappPort,
    /**
     * The MlappResourceAccelerators model constructor.
     * @property {module:model/MlappResourceAccelerators}
     */
    MlappResourceAccelerators: MlappResourceAccelerators,
    /**
     * The MlappResourceRequest model constructor.
     * @property {module:model/MlappResourceRequest}
     */
    MlappResourceRequest: MlappResourceRequest,
    /**
     * The MlappS3BucketSource model constructor.
     * @property {module:model/MlappS3BucketSource}
     */
    MlappS3BucketSource: MlappS3BucketSource,
    /**
     * The MlappServing model constructor.
     * @property {module:model/MlappServing}
     */
    MlappServing: MlappServing,
    /**
     * The MlappServingResponseParam model constructor.
     * @property {module:model/MlappServingResponseParam}
     */
    MlappServingResponseParam: MlappServingResponseParam,
    /**
     * The MlappServingSpec model constructor.
     * @property {module:model/MlappServingSpec}
     */
    MlappServingSpec: MlappServingSpec,
    /**
     * The MlappServingSpecOptions model constructor.
     * @property {module:model/MlappServingSpecOptions}
     */
    MlappServingSpecOptions: MlappServingSpecOptions,
    /**
     * The MlappServingSpecParam model constructor.
     * @property {module:model/MlappServingSpecParam}
     */
    MlappServingSpecParam: MlappServingSpecParam,
    /**
     * The MlappServingSpecParamValue model constructor.
     * @property {module:model/MlappServingSpecParamValue}
     */
    MlappServingSpecParamValue: MlappServingSpecParamValue,
    /**
     * The MlappUniversalServing model constructor.
     * @property {module:model/MlappUniversalServing}
     */
    MlappUniversalServing: MlappUniversalServing,
    /**
     * The MlappVolume model constructor.
     * @property {module:model/MlappVolume}
     */
    MlappVolume: MlappVolume,
    /**
     * The MlappVolumeMount model constructor.
     * @property {module:model/MlappVolumeMount}
     */
    MlappVolumeMount: MlappVolumeMount,
    /**
     * The ModelsInferenceVersion model constructor.
     * @property {module:model/ModelsInferenceVersion}
     */
    ModelsInferenceVersion: ModelsInferenceVersion,
    /**
     * The ModelsServing model constructor.
     * @property {module:model/ModelsServing}
     */
    ModelsServing: ModelsServing,
    /**
     * The ModelsTaskFormElement model constructor.
     * @property {module:model/ModelsTaskFormElement}
     */
    ModelsTaskFormElement: ModelsTaskFormElement,
    /**
     * The ModelsTaskFormElementStreamExtended model constructor.
     * @property {module:model/ModelsTaskFormElementStreamExtended}
     */
    ModelsTaskFormElementStreamExtended: ModelsTaskFormElementStreamExtended,
    /**
     * The ModelsTaskFormElementValue model constructor.
     * @property {module:model/ModelsTaskFormElementValue}
     */
    ModelsTaskFormElementValue: ModelsTaskFormElementValue,
    /**
     * The V1EmptyDirVolumeSource model constructor.
     * @property {module:model/V1EmptyDirVolumeSource}
     */
    V1EmptyDirVolumeSource: V1EmptyDirVolumeSource,
    /**
     * The V1FlexVolumeSource model constructor.
     * @property {module:model/V1FlexVolumeSource}
     */
    V1FlexVolumeSource: V1FlexVolumeSource,
    /**
     * The V1HostPathType model constructor.
     * @property {module:model/V1HostPathType}
     */
    V1HostPathType: V1HostPathType,
    /**
     * The V1HostPathVolumeSource model constructor.
     * @property {module:model/V1HostPathVolumeSource}
     */
    V1HostPathVolumeSource: V1HostPathVolumeSource,
    /**
     * The V1LocalObjectReference model constructor.
     * @property {module:model/V1LocalObjectReference}
     */
    V1LocalObjectReference: V1LocalObjectReference,
    /**
     * The V1NFSVolumeSource model constructor.
     * @property {module:model/V1NFSVolumeSource}
     */
    V1NFSVolumeSource: V1NFSVolumeSource,
    /**
     * The V1PersistentVolumeClaimVolumeSource model constructor.
     * @property {module:model/V1PersistentVolumeClaimVolumeSource}
     */
    V1PersistentVolumeClaimVolumeSource: V1PersistentVolumeClaimVolumeSource,
    /**
     * The InferenceApi service constructor.
     * @property {module:api/InferenceApi}
     */
    InferenceApi: InferenceApi,
    /**
     * The ServingApi service constructor.
     * @property {module:api/ServingApi}
     */
    ServingApi: ServingApi
  };

  return exports;
}));
