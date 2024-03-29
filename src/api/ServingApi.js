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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MlappServing', 'model/ModelsServing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MlappServing'), require('../model/ModelsServing'));
  } else {
    // Browser globals (root is window)
    if (!root.KibernetikaProjectBackendComponent) {
      root.KibernetikaProjectBackendComponent = {};
    }
    root.KibernetikaProjectBackendComponent.ServingApi = factory(root.KibernetikaProjectBackendComponent.ApiClient, root.KibernetikaProjectBackendComponent.MlappServing, root.KibernetikaProjectBackendComponent.ModelsServing);
  }
}(this, function(ApiClient, MlappServing, ModelsServing) {
  'use strict';

  /**
   * Serving service.
   * @module api/ServingApi
   * @version 0.2
   */

  /**
   * Constructs a new ServingApi. 
   * @alias module:api/ServingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the servingDelete operation.
     * @callback module:api/ServingApi~servingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete serving
     * @param {String} workspace Workspace&#39;s name
     * @param {String} serving Serving&#39;s Name or ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.dependencies Get only dependencies
     * @param {String} opts.confirm String for confirmation
     * @param {Boolean} opts.force Force deletion
     * @param {module:api/ServingApi~servingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.servingDelete = function(workspace, serving, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling servingDelete");
      }

      // verify the required parameter 'serving' is set
      if (serving === undefined || serving === null) {
        throw new Error("Missing the required parameter 'serving' when calling servingDelete");
      }


      var pathParams = {
        'workspace': workspace,
        'serving': serving
      };
      var queryParams = {
        'dependencies': opts['dependencies'],
        'confirm': opts['confirm'],
        'force': opts['force'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v0.2/workspace/{workspace}/serving/{serving}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the servingDisable operation.
     * @callback module:api/ServingApi~servingDisableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsServing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable serving
     * @param {String} workspace Workspace&#39;s name
     * @param {String} serving Serving&#39;s Name or ID
     * @param {module:api/ServingApi~servingDisableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsServing}
     */
    this.servingDisable = function(workspace, serving, callback) {
      var postBody = null;

      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling servingDisable");
      }

      // verify the required parameter 'serving' is set
      if (serving === undefined || serving === null) {
        throw new Error("Missing the required parameter 'serving' when calling servingDisable");
      }


      var pathParams = {
        'workspace': workspace,
        'serving': serving
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ModelsServing;

      return this.apiClient.callApi(
        '/api/v0.2/workspace/{workspace}/serving/{serving}/disable', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the servingEnable operation.
     * @callback module:api/ServingApi~servingEnableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsServing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable serving
     * @param {String} workspace Workspace&#39;s name
     * @param {String} serving Serving&#39;s Name or ID
     * @param {module:api/ServingApi~servingEnableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsServing}
     */
    this.servingEnable = function(workspace, serving, callback) {
      var postBody = null;

      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling servingEnable");
      }

      // verify the required parameter 'serving' is set
      if (serving === undefined || serving === null) {
        throw new Error("Missing the required parameter 'serving' when calling servingEnable");
      }


      var pathParams = {
        'workspace': workspace,
        'serving': serving
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ModelsServing;

      return this.apiClient.callApi(
        '/api/v0.2/workspace/{workspace}/serving/{serving}/enable', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the servingInfo operation.
     * @callback module:api/ServingApi~servingInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsServing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return serving&#39;s info
     * @param {String} workspace Workspace&#39;s name
     * @param {String} serving Serving&#39;s Name or ID
     * @param {module:api/ServingApi~servingInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsServing}
     */
    this.servingInfo = function(workspace, serving, callback) {
      var postBody = null;

      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling servingInfo");
      }

      // verify the required parameter 'serving' is set
      if (serving === undefined || serving === null) {
        throw new Error("Missing the required parameter 'serving' when calling servingInfo");
      }


      var pathParams = {
        'workspace': workspace,
        'serving': serving
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ModelsServing;

      return this.apiClient.callApi(
        '/api/v0.2/workspace/{workspace}/serving/{serving}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the servingTFProxyModel operation.
     * @callback module:api/ServingApi~servingTFProxyModelCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * TF proxy to serving (model)
     * @param {String} model Serving model
     * @param {String} body 
     * @param {String} workspace Workspace&#39;s name
     * @param {String} serving Serving&#39;s Name or ID
     * @param {String} port Serving port
     * @param {module:api/ServingApi~servingTFProxyModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.servingTFProxyModel = function(model, body, workspace, serving, port, callback) {
      var postBody = body;

      // verify the required parameter 'model' is set
      if (model === undefined || model === null) {
        throw new Error("Missing the required parameter 'model' when calling servingTFProxyModel");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling servingTFProxyModel");
      }

      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling servingTFProxyModel");
      }

      // verify the required parameter 'serving' is set
      if (serving === undefined || serving === null) {
        throw new Error("Missing the required parameter 'serving' when calling servingTFProxyModel");
      }

      // verify the required parameter 'port' is set
      if (port === undefined || port === null) {
        throw new Error("Missing the required parameter 'port' when calling servingTFProxyModel");
      }


      var pathParams = {
        'model': model,
        'workspace': workspace,
        'serving': serving,
        'port': port
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data', 'application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the servingTFProxyModelSignature operation.
     * @callback module:api/ServingApi~servingTFProxyModelSignatureCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * TF proxy to serving (model, signature)
     * @param {String} model Serving model
     * @param {String} signature Serving signature
     * @param {String} body 
     * @param {String} workspace Workspace&#39;s name
     * @param {String} serving Serving&#39;s Name or ID
     * @param {String} port Serving port
     * @param {module:api/ServingApi~servingTFProxyModelSignatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.servingTFProxyModelSignature = function(model, signature, body, workspace, serving, port, callback) {
      var postBody = body;

      // verify the required parameter 'model' is set
      if (model === undefined || model === null) {
        throw new Error("Missing the required parameter 'model' when calling servingTFProxyModelSignature");
      }

      // verify the required parameter 'signature' is set
      if (signature === undefined || signature === null) {
        throw new Error("Missing the required parameter 'signature' when calling servingTFProxyModelSignature");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling servingTFProxyModelSignature");
      }

      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling servingTFProxyModelSignature");
      }

      // verify the required parameter 'serving' is set
      if (serving === undefined || serving === null) {
        throw new Error("Missing the required parameter 'serving' when calling servingTFProxyModelSignature");
      }

      // verify the required parameter 'port' is set
      if (port === undefined || port === null) {
        throw new Error("Missing the required parameter 'port' when calling servingTFProxyModelSignature");
      }


      var pathParams = {
        'model': model,
        'signature': signature,
        'workspace': workspace,
        'serving': serving,
        'port': port
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data', 'application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model}/{signature}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the servingTFProxyModelSignatureVersion operation.
     * @callback module:api/ServingApi~servingTFProxyModelSignatureVersionCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * TF proxy to serving (model, signature, version)
     * @param {String} model Serving model
     * @param {String} signature Serving signature
     * @param {String} version Serving version
     * @param {String} body 
     * @param {String} workspace Workspace&#39;s name
     * @param {String} serving Serving&#39;s Name or ID
     * @param {String} port Serving port
     * @param {module:api/ServingApi~servingTFProxyModelSignatureVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.servingTFProxyModelSignatureVersion = function(model, signature, version, body, workspace, serving, port, callback) {
      var postBody = body;

      // verify the required parameter 'model' is set
      if (model === undefined || model === null) {
        throw new Error("Missing the required parameter 'model' when calling servingTFProxyModelSignatureVersion");
      }

      // verify the required parameter 'signature' is set
      if (signature === undefined || signature === null) {
        throw new Error("Missing the required parameter 'signature' when calling servingTFProxyModelSignatureVersion");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling servingTFProxyModelSignatureVersion");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling servingTFProxyModelSignatureVersion");
      }

      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling servingTFProxyModelSignatureVersion");
      }

      // verify the required parameter 'serving' is set
      if (serving === undefined || serving === null) {
        throw new Error("Missing the required parameter 'serving' when calling servingTFProxyModelSignatureVersion");
      }

      // verify the required parameter 'port' is set
      if (port === undefined || port === null) {
        throw new Error("Missing the required parameter 'port' when calling servingTFProxyModelSignatureVersion");
      }


      var pathParams = {
        'model': model,
        'signature': signature,
        'version': version,
        'workspace': workspace,
        'serving': serving,
        'port': port
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data', 'application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/v0.2/workspace/{workspace}/serving/{serving}/tfproxy/{port}/{model}/{signature}/{version}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServing operation.
     * @callback module:api/ServingApi~updateServingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsServing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update serving
     * @param {module:model/MlappServing} body 
     * @param {String} workspace Workspace&#39;s name
     * @param {String} serving Serving&#39;s Name or ID
     * @param {module:api/ServingApi~updateServingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsServing}
     */
    this.updateServing = function(body, workspace, serving, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateServing");
      }

      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling updateServing");
      }

      // verify the required parameter 'serving' is set
      if (serving === undefined || serving === null) {
        throw new Error("Missing the required parameter 'serving' when calling updateServing");
      }


      var pathParams = {
        'workspace': workspace,
        'serving': serving
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ModelsServing;

      return this.apiClient.callApi(
        '/api/v0.2/workspace/{workspace}/serving/{serving}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
