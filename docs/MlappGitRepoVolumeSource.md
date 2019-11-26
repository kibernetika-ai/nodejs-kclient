# KibernetikaProjectBackendComponent.MlappGitRepoVolumeSource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privateKey** | **String** |  | [optional] 
**repository** | **String** | Repository URL | 
**accessToken** | **String** |  | [optional] 
**directory** | **String** | Target directory name. Must not contain or start with &#39;..&#39;.  If &#39;.&#39; is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. | [optional] 
**accountId** | **String** |  | [optional] 
**userName** | **String** |  | [optional] 
**revision** | **String** | Commit hash for the specified revision. | [optional] 


