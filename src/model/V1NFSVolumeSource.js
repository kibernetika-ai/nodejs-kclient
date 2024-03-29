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
    root.KibernetikaProjectBackendComponent.V1NFSVolumeSource = factory(root.KibernetikaProjectBackendComponent.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1NFSVolumeSource model module.
   * @module model/V1NFSVolumeSource
   * @version 0.2
   */

  /**
   * Constructs a new <code>V1NFSVolumeSource</code>.
   * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
   * @alias module:model/V1NFSVolumeSource
   * @class
   * @param path {String} Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   * @param server {String} Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   */
  var exports = function(path, server) {
    var _this = this;

    _this['path'] = path;

    _this['server'] = server;
  };

  /**
   * Constructs a <code>V1NFSVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1NFSVolumeSource} obj Optional instance to populate.
   * @return {module:model/V1NFSVolumeSource} The populated <code>V1NFSVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('server')) {
        obj['server'] = ApiClient.convertToType(data['server'], 'String');
      }
    }
    return obj;
  }

  /**
   * Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
   * @member {String} server
   */
  exports.prototype['server'] = undefined;



  return exports;
}));


