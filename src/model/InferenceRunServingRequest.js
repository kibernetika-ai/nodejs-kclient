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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KibernetikaProjectBackendComponent) {
      root.KibernetikaProjectBackendComponent = {};
    }
    root.KibernetikaProjectBackendComponent.InferenceRunServingRequest = factory(root.KibernetikaProjectBackendComponent.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InferenceRunServingRequest model module.
   * @module model/InferenceRunServingRequest
   * @version 0.2
   */

  /**
   * Constructs a new <code>InferenceRunServingRequest</code>.
   * @alias module:model/InferenceRunServingRequest
   * @class
   * @param values {Object} 
   * @param clusterID {String} 
   * @param name {String} 
   * @param workspaceName {String} 
   */
  var exports = function(values, clusterID, name, workspaceName) {
    var _this = this;

    _this['Values'] = values;
    _this['ClusterID'] = clusterID;
    _this['Name'] = name;
    _this['WorkspaceName'] = workspaceName;
  };

  /**
   * Constructs a <code>InferenceRunServingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InferenceRunServingRequest} obj Optional instance to populate.
   * @return {module:model/InferenceRunServingRequest} The populated <code>InferenceRunServingRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Values')) {
        obj['Values'] = ApiClient.convertToType(data['Values'], Object);
      }
      if (data.hasOwnProperty('ClusterID')) {
        obj['ClusterID'] = ApiClient.convertToType(data['ClusterID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('WorkspaceName')) {
        obj['WorkspaceName'] = ApiClient.convertToType(data['WorkspaceName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object} Values
   */
  exports.prototype['Values'] = undefined;
  /**
   * @member {String} ClusterID
   */
  exports.prototype['ClusterID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} WorkspaceName
   */
  exports.prototype['WorkspaceName'] = undefined;



  return exports;
}));


