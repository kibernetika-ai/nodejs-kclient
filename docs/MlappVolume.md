# KibernetikaProjectBackendComponent.MlappVolume

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasetFS** | [**MlappDatasetFSSource**](MlappDatasetFSSource.md) |  | [optional] 
**isTrainLogDir** | **Boolean** |  | [optional] 
**clusterStorage** | **String** |  | [optional] 
**name** | **String** |  | 
**mountPath** | **String** |  | [optional] 
**isWorkspaceLocal** | **Boolean** |  | [optional] 
**isLibDir** | **Boolean** |  | [optional] 
**subPath** | **String** |  | [optional] 
**dataset** | [**MlappDatasetSource**](MlappDatasetSource.md) |  | [optional] 
**s3bucket** | [**MlappS3BucketSource**](MlappS3BucketSource.md) |  | [optional] 
**readOnly** | **Boolean** |  | [optional] 
**gitRepo** | [**MlappGitRepoVolumeSource**](MlappGitRepoVolumeSource.md) |  | [optional] 
**nfs** | [**V1NFSVolumeSource**](V1NFSVolumeSource.md) |  | [optional] 
**hostPath** | [**V1HostPathVolumeSource**](V1HostPathVolumeSource.md) |  | [optional] 
**emptyDir** | [**V1EmptyDirVolumeSource**](V1EmptyDirVolumeSource.md) |  | [optional] 
**flexVolume** | [**V1FlexVolumeSource**](V1FlexVolumeSource.md) |  | [optional] 
**model** | [**MlappModelSource**](MlappModelSource.md) |  | [optional] 
**persistentStorage** | [**MlappPersistentStorage**](MlappPersistentStorage.md) |  | [optional] 
**persistentVolumeClaim** | [**V1PersistentVolumeClaimVolumeSource**](V1PersistentVolumeClaimVolumeSource.md) |  | [optional] 


