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
    define(['ApiClient', 'model/MlappDatasetFSSource', 'model/MlappDatasetSource', 'model/MlappGitRepoVolumeSource', 'model/MlappModelSource', 'model/MlappPersistentStorage', 'model/MlappS3BucketSource', 'model/V1EmptyDirVolumeSource', 'model/V1FlexVolumeSource', 'model/V1HostPathVolumeSource', 'model/V1NFSVolumeSource', 'model/V1PersistentVolumeClaimVolumeSource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MlappDatasetFSSource'), require('./MlappDatasetSource'), require('./MlappGitRepoVolumeSource'), require('./MlappModelSource'), require('./MlappPersistentStorage'), require('./MlappS3BucketSource'), require('./V1EmptyDirVolumeSource'), require('./V1FlexVolumeSource'), require('./V1HostPathVolumeSource'), require('./V1NFSVolumeSource'), require('./V1PersistentVolumeClaimVolumeSource'));
  } else {
    // Browser globals (root is window)
    if (!root.KibernetikaProjectBackendComponent) {
      root.KibernetikaProjectBackendComponent = {};
    }
    root.KibernetikaProjectBackendComponent.MlappVolume = factory(root.KibernetikaProjectBackendComponent.ApiClient, root.KibernetikaProjectBackendComponent.MlappDatasetFSSource, root.KibernetikaProjectBackendComponent.MlappDatasetSource, root.KibernetikaProjectBackendComponent.MlappGitRepoVolumeSource, root.KibernetikaProjectBackendComponent.MlappModelSource, root.KibernetikaProjectBackendComponent.MlappPersistentStorage, root.KibernetikaProjectBackendComponent.MlappS3BucketSource, root.KibernetikaProjectBackendComponent.V1EmptyDirVolumeSource, root.KibernetikaProjectBackendComponent.V1FlexVolumeSource, root.KibernetikaProjectBackendComponent.V1HostPathVolumeSource, root.KibernetikaProjectBackendComponent.V1NFSVolumeSource, root.KibernetikaProjectBackendComponent.V1PersistentVolumeClaimVolumeSource);
  }
}(this, function(ApiClient, MlappDatasetFSSource, MlappDatasetSource, MlappGitRepoVolumeSource, MlappModelSource, MlappPersistentStorage, MlappS3BucketSource, V1EmptyDirVolumeSource, V1FlexVolumeSource, V1HostPathVolumeSource, V1NFSVolumeSource, V1PersistentVolumeClaimVolumeSource) {
  'use strict';




  /**
   * The MlappVolume model module.
   * @module model/MlappVolume
   * @version 0.2
   */

  /**
   * Constructs a new <code>MlappVolume</code>.
   * @alias module:model/MlappVolume
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;




    _this['name'] = name;















  };

  /**
   * Constructs a <code>MlappVolume</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MlappVolume} obj Optional instance to populate.
   * @return {module:model/MlappVolume} The populated <code>MlappVolume</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('datasetFS')) {
        obj['datasetFS'] = MlappDatasetFSSource.constructFromObject(data['datasetFS']);
      }
      if (data.hasOwnProperty('isTrainLogDir')) {
        obj['isTrainLogDir'] = ApiClient.convertToType(data['isTrainLogDir'], 'Boolean');
      }
      if (data.hasOwnProperty('clusterStorage')) {
        obj['clusterStorage'] = ApiClient.convertToType(data['clusterStorage'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('mountPath')) {
        obj['mountPath'] = ApiClient.convertToType(data['mountPath'], 'String');
      }
      if (data.hasOwnProperty('isWorkspaceLocal')) {
        obj['isWorkspaceLocal'] = ApiClient.convertToType(data['isWorkspaceLocal'], 'Boolean');
      }
      if (data.hasOwnProperty('isLibDir')) {
        obj['isLibDir'] = ApiClient.convertToType(data['isLibDir'], 'Boolean');
      }
      if (data.hasOwnProperty('subPath')) {
        obj['subPath'] = ApiClient.convertToType(data['subPath'], 'String');
      }
      if (data.hasOwnProperty('dataset')) {
        obj['dataset'] = MlappDatasetSource.constructFromObject(data['dataset']);
      }
      if (data.hasOwnProperty('s3bucket')) {
        obj['s3bucket'] = MlappS3BucketSource.constructFromObject(data['s3bucket']);
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('gitRepo')) {
        obj['gitRepo'] = MlappGitRepoVolumeSource.constructFromObject(data['gitRepo']);
      }
      if (data.hasOwnProperty('nfs')) {
        obj['nfs'] = V1NFSVolumeSource.constructFromObject(data['nfs']);
      }
      if (data.hasOwnProperty('hostPath')) {
        obj['hostPath'] = V1HostPathVolumeSource.constructFromObject(data['hostPath']);
      }
      if (data.hasOwnProperty('emptyDir')) {
        obj['emptyDir'] = V1EmptyDirVolumeSource.constructFromObject(data['emptyDir']);
      }
      if (data.hasOwnProperty('flexVolume')) {
        obj['flexVolume'] = V1FlexVolumeSource.constructFromObject(data['flexVolume']);
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = MlappModelSource.constructFromObject(data['model']);
      }
      if (data.hasOwnProperty('persistentStorage')) {
        obj['persistentStorage'] = MlappPersistentStorage.constructFromObject(data['persistentStorage']);
      }
      if (data.hasOwnProperty('persistentVolumeClaim')) {
        obj['persistentVolumeClaim'] = V1PersistentVolumeClaimVolumeSource.constructFromObject(data['persistentVolumeClaim']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MlappDatasetFSSource} datasetFS
   */
  exports.prototype['datasetFS'] = undefined;
  /**
   * @member {Boolean} isTrainLogDir
   */
  exports.prototype['isTrainLogDir'] = undefined;
  /**
   * @member {String} clusterStorage
   */
  exports.prototype['clusterStorage'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} mountPath
   */
  exports.prototype['mountPath'] = undefined;
  /**
   * @member {Boolean} isWorkspaceLocal
   */
  exports.prototype['isWorkspaceLocal'] = undefined;
  /**
   * @member {Boolean} isLibDir
   */
  exports.prototype['isLibDir'] = undefined;
  /**
   * @member {String} subPath
   */
  exports.prototype['subPath'] = undefined;
  /**
   * @member {module:model/MlappDatasetSource} dataset
   */
  exports.prototype['dataset'] = undefined;
  /**
   * @member {module:model/MlappS3BucketSource} s3bucket
   */
  exports.prototype['s3bucket'] = undefined;
  /**
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * @member {module:model/MlappGitRepoVolumeSource} gitRepo
   */
  exports.prototype['gitRepo'] = undefined;
  /**
   * @member {module:model/V1NFSVolumeSource} nfs
   */
  exports.prototype['nfs'] = undefined;
  /**
   * @member {module:model/V1HostPathVolumeSource} hostPath
   */
  exports.prototype['hostPath'] = undefined;
  /**
   * @member {module:model/V1EmptyDirVolumeSource} emptyDir
   */
  exports.prototype['emptyDir'] = undefined;
  /**
   * @member {module:model/V1FlexVolumeSource} flexVolume
   */
  exports.prototype['flexVolume'] = undefined;
  /**
   * @member {module:model/MlappModelSource} model
   */
  exports.prototype['model'] = undefined;
  /**
   * @member {module:model/MlappPersistentStorage} persistentStorage
   */
  exports.prototype['persistentStorage'] = undefined;
  /**
   * @member {module:model/V1PersistentVolumeClaimVolumeSource} persistentVolumeClaim
   */
  exports.prototype['persistentVolumeClaim'] = undefined;



  return exports;
}));


