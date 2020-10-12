const clima = require('./clima.js');
const spotify = require('./spotify.js');

exports.musicaClima = async ctx => {
    var cidade = ctx.request.query.cidade;
    var resultadoClima = await clima.obtemClimaInterno(cidade);
    let tempCidade = resultadoClima.clima.temp - 273.15;
    if( tempCidade > 25){
        var playlistId = await spotify.obtemPlaylistInterno("pop");
        console.log(playlistId);
        var musicas = await spotify.obtemMusicaInterno(playlistId);
        ctx.body = musicas;
    }else if( tempCidade <= 25 && tempCidade >= 10){
        var playlistId = await spotify.obtemPlaylistInterno("rock");
        console.log(playlistId);
        var musicas = await spotify.obtemMusicaInterno(playlistId);
        ctx.body = musicas;
    }else{
        var playlistId = await spotify.obtemPlaylistInterno("classical");
        console.log(playlistId);
        var musicas = await spotify.obtemMusicaInterno(playlistId);
        ctx.body = musicas;
    }
    //ctx.body = resultadoClima;
};