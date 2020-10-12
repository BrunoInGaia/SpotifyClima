const fetch = require('node-fetch');

async function fetchToken(){
    const clientID = '5694770023674cdf87103da30972d057';
    const clientSecret = '428a83c6fbc04d248fe2d08d7dadd85c';

    const urlToken = 'https://accounts.spotify.com/api/token';
    const resultado = await fetch(urlToken,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64')
        },
        body: 'grant_type=client_credentials'
    });

    const dados = await resultado.json();
    return dados.access_token;
}

async function fetchPlaylist(token, generoId){
    const urlPlaylist = 'https://api.spotify.com/v1/browse/categories/'+generoId+'/playlists';
    const resultado = await fetch(urlPlaylist,{
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token }
    });

    const dados = await resultado.json();
    return dados.playlists.items;
}

async function fetchTracks(token, playlistId){
    const urlTracks = 'https://api.spotify.com/v1/playlists/'+playlistId;
    const resultado = await fetch(urlTracks,{
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token }
    });

    const dados = await resultado.json();
    return dados.tracks.items;
}

async function fetchGeneros(token){
    const limite = 49;
    const urlGenero = 'https://api.spotify.com/v1/browse/categories?limit='+limite;
    const resultado = await fetch(urlGenero,{
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token }
    });

    const dados = await resultado.json();
    return dados.categories.items;
}

exports.obtemPlaylist = async ctx => {
    let token = await fetchToken();
    let genero = ctx.query.genero;
    let playlists = await fetchPlaylist(token,genero);
    ctx.body = playlists[0].id;
};

exports.obtemPlaylistInterno = async (genero) => {
    let token = await fetchToken();
    let playlists = await fetchPlaylist(token,genero);
    return playlists[0].id;
};

exports.obtemMusica = async ctx => {
    let token = await fetchToken();
    let playlistId = ctx.query.playlist;
    let tracks = await fetchTracks(token,playlistId);
    var musicas = '';
    tracks.forEach(musica => {
        musicas += musica.track.name+"\n";
    });
    ctx.body = musicas;
};

exports.obtemMusicaInterno = async (playlistId) => {
    let token = await fetchToken();
    let tracks = await fetchTracks(token,playlistId);
    var musicas = '';
    tracks.forEach(musica => {
        musicas += musica.track.name+"\n";
    });
    return musicas;
};

exports.obtemGeneros = async ctx => {
    let token = await fetchToken();
    let generos = await fetchGeneros(token);
    var listaGenero = '';
    generos.forEach(genero => {
        listaGenero += genero.id+"\n";
    });
    ctx.body = listaGenero;
};