# SpotifyClima.ClimaApi

All URIs are relative to *https://climaspotify.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**climaInfo**](ClimaApi.md#climaInfo) | **GET** /clima | Obtem informações meteorológicas da cidade informada.

### Description

Obtem informações meteorológicas da cidade informada.

A cidade informada deve estar no idioma inglês e não é Case Sensitive.

### Example

```
curl -X GET "https://climaspotify.herokuapp.com/clima?cidade=Campinas" -H  "accept: application/xml"
```

```
https://climaspotify.herokuapp.com/clima?cidade=Campinas
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cidade** | **String**| Cidade que deseja consultar. | 

### Return type

application/xml
application/json

### Authorization

No authorization required