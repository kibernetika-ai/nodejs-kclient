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
    root.KibernetikaProjectBackendComponent.V1EmptyDirVolumeSource = factory(root.KibernetikaProjectBackendComponent.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1EmptyDirVolumeSource model module.
   * @module model/V1EmptyDirVolumeSource
   * @version 0.2
   */

  /**
   * Constructs a new <code>V1EmptyDirVolumeSource</code>.
   * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
   * @alias module:model/V1EmptyDirVolumeSource
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1EmptyDirVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1EmptyDirVolumeSource} obj Optional instance to populate.
   * @return {module:model/V1EmptyDirVolumeSource} The populated <code>V1EmptyDirVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sizeLimit')) {
        obj['sizeLimit'] = ApiClient.convertToType(data['sizeLimit'], 'String');
      }
      if (data.hasOwnProperty('medium')) {
        obj['medium'] = ApiClient.convertToType(data['medium'], 'String');
      }
    }
    return obj;
  }

  /**
   * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
   * @member {String} sizeLimit
   */
  exports.prototype['sizeLimit'] = undefined;
  /**
   * What type of storage medium should back this directory. The default is \"\" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
   * @member {String} medium
   */
  exports.prototype['medium'] = undefined;



  return exports;
}));

