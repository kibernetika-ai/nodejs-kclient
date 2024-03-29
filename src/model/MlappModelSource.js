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
    root.KibernetikaProjectBackendComponent.MlappModelSource = factory(root.KibernetikaProjectBackendComponent.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MlappModelSource model module.
   * @module model/MlappModelSource
   * @version 0.2
   */

  /**
   * Constructs a new <code>MlappModelSource</code>.
   * @alias module:model/MlappModelSource
   * @class
   * @param workspace {String} 
   */
  var exports = function(workspace) {
    var _this = this;




    _this['workspace'] = workspace;
  };

  /**
   * Constructs a <code>MlappModelSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MlappModelSource} obj Optional instance to populate.
   * @return {module:model/MlappModelSource} The populated <code>MlappModelSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('downloadURL')) {
        obj['downloadURL'] = ApiClient.convertToType(data['downloadURL'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('workspace')) {
        obj['workspace'] = ApiClient.convertToType(data['workspace'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} downloadURL
   */
  exports.prototype['downloadURL'] = undefined;
  /**
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {String} workspace
   */
  exports.prototype['workspace'] = undefined;



  return exports;
}));


