# SpotifyClima.PlaylistApi

All URIs are relative to *https://climaspotify.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playlistID**](PlaylistApi.md#playlistID) | **GET** /playlist | Obtem o ID da playlist.

### Description

Obtem o ID da playlist.

Informando um gênero é possível consultar o Id da playlist.

### Example

```
curl -X GET "https://climaspotify.herokuapp.com/playlist?genero=hiphop" -H  "accept: application/json"
```

```
https://climaspotify.herokuapp.com/playlist?genero=hiphop
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genero** | **String**| Genero para consultar o Id da playlist. | 

### Return type

application/xml
application/json

### Authorization

No authorization required