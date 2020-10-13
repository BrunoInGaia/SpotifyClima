const clima = require('./clima.js');
const spotify = require('./spotify.js');

spotifyClima = {
    climaInfo:{},
    genero:'',
    playlistId:'',
    musicas:''
}

exports.musicaClima = async ctx => {

    if(!ctx.request.query.cidade){
        ctx.throw(400, 'Informar Cidade');
    }

    var cidade = ctx.request.query.cidade;
    spotifyClima.climaInfo = await clima.obtemClimaInterno(cidade);
    
    if(spotifyClima.climaInfo.status != '200'){
        ctx.throw(404, 'Cidade não encontrada');
    }

    let tempCidade = spotifyClima.climaInfo.clima.temp;
    
    var musicas;
    var playlistId;

    if( tempCidade > 25){
        spotifyClima.genero = "Pop";
        playlistId = await spotify.obtemPlaylistInterno("pop");
        musicas = await spotify.obtemMusicaInterno(playlistId);
    }else if( tempCidade <= 25 && tempCidade >= 10){
        spotifyClima.genero = "Rock";
        playlistId = await spotify.obtemPlaylistInterno("rock");
        musicas = await spotify.obtemMusicaInterno(playlistId);
    }else{
        spotifyClima.genero = "Classico";
        playlistId = await spotify.obtemPlaylistInterno("classical");
        musicas = await spotify.obtemMusicaInterno(playlistId);
    }

    spotifyClima.playlistId = playlistId;
    spotifyClima.musicas = musicas;
    
    ctx.body = spotifyClima;
};