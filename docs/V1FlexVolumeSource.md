# KibernetikaProjectBackendComponent.V1FlexVolumeSource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secretRef** | [**V1LocalObjectReference**](V1LocalObjectReference.md) | Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts. | [optional] 
**readOnly** | **Boolean** | Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] 
**driver** | **String** | Driver is the name of the driver to use for this volume. | 
**options** | **{String: String}** | Optional: Extra command options if any. | [optional] 
**fsType** | **String** | Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. The default filesystem depends on FlexVolume script. | [optional] 


