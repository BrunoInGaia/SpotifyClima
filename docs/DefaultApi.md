# SpotifyClima.DefaultApi

All URIs are relative to *https://climaspotify.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**climaSpotify**](DefaultApi.md#climaSpotify) | **GET** / | Obtem lista de músicas de acordo com o clima.


<a name="climaSpotify"></a>
# **climaSpotify**
> climaSpotify(cidade)

Obtem lista de músicas de acordo com o clima.

Exibe uma lista de músicas de acordo com o clima da cidade informada. Exibe também informações sobre a cidade.

### Example
```
curl -X GET "https://climaspotify.herokuapp.com/?cidade=Campinas" -H  "accept: application/xml"
```

```
https://climaspotify.herokuapp.com/?cidade=Campinas
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