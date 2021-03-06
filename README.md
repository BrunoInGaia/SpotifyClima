<h1 align="center">
  <img alt="inGaia" title="inGaia" src=".github/inGaia.png" width="200px" />
</h1>

<h3 align="center">
  Back-end Developer Challenge
</h3>

<p align="center">
  <img alt = "Github Last Confirmation" src = "https://img.shields.io/github/last-commit/BrunoInGaia/SpotifyTemp">
  <img alt = "GitHub Main Language" src = "https://img.shields.io/github/languages/top/BrunoInGaia/SpotifyTemp">
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/BrunoInGaia/SpotifyTemp?color=%2304D361">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/BrunoInGaia/SpotifyTemp/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/BrunoInGaia/SpotifyTemp?style=social">
  </a>
</p>

## :gear: Documentation for API Endpoints

All URIs are relative to *https://climaspotify.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**climaSpotify**](docs/DefaultApi.md#climaSpotify) | **GET** / | Obtem lista de músicas de acordo com o clima.
[**climaInfo**](docs/ClimaApi.md#climaInfo) | **GET** /clima | Obtem informações meteorológicas da cidade informada.
[**listarGeneros**](docs/GeneroApi.md#listarGeneros) | **GET** /genero | Lista os generos mais comuns no Spotify.
[**listarMusicas**](docs/MusicaApi.md#listarMusicas) | **GET** /musica | Lista as músicas de uma playlist.
[**playlistID**](docs/PlaylistApi.md#playlistID) | **GET** /playlist | Obtem o ID da playlist.

## :memo: Documentation for Authorization

 All endpoints do not require authorization.