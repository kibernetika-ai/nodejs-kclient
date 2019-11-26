# KibernetikaProjectBackendComponent.MlappServing

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skipPrefix** | **Boolean** |  | 
**labels** | **{String: String}** |  | [optional] 
**disabled** | **Boolean** |  | 
**defaultVolumeMapping** | **Boolean** |  | [optional] 
**images** | [**MlappImages**](MlappImages.md) |  | [optional] 
**workDir** | **String** |  | [optional] 
**autoscale** | [**MlappAutoscale**](MlappAutoscale.md) |  | [optional] 
**defaultMountPath** | **String** |  | [optional] 
**frontApi** | **String** |  | [optional] 
**build** | **String** |  | [optional] 
**env** | [**[MlappEnv]**](MlappEnv.md) |  | [optional] 
**taskName** | **String** |  | [optional] 
**spec** | [**MlappServingSpec**](MlappServingSpec.md) |  | [optional] 
**resources** | [**MlappResourceRequest**](MlappResourceRequest.md) |  | [optional] 
**replicas** | **Number** |  | [optional] 
**args** | **String** |  | [optional] 
**nodes** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**displayName** | **String** |  | [optional] 
**buildInfo** | **Object** |  | [optional] 
**command** | **String** |  | [optional] 
**volumes** | [**[MlappVolumeMount]**](MlappVolumeMount.md) |  | [optional] 
**ports** | [**[MlappPort]**](MlappPort.md) |  | [optional] 


