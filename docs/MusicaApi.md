# SpotifyClima.MusicaApi

All URIs are relative to *https://climaspotify.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarMusicas**](MusicaApi.md#listarMusicas) | **GET** /musica | Lista as músicas de uma playlist.

### Description

Lista as músicas de uma playlist.

Informando o Id da playlist é possível listar as músicas.

### Example

```
curl -X GET "https://climaspotify.herokuapp.com/musica?playlist=37i9dQZF1DX0XUsuxWHRQd" -H  "accept: application/json"
```

```
https://climaspotify.herokuapp.com/musica?playlist=37i9dQZF1DX0XUsuxWHRQd
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlist** | **String**| Id da playlist que deseja exibir as músicas. | 

### Return type

application/xml
application/json

### Authorization

No authorization required