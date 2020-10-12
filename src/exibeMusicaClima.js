const clima = require('./clima.js');
const spotify = require('./spotify.js');

exports.musicaClima = async ctx => {

    if(!ctx.request.query.cidade){
        ctx.throw(400, 'Informar Cidade');
    }

    var cidade = ctx.request.query.cidade;
    var resultadoClima = await clima.obtemClimaInterno(cidade);
    
    if(resultadoClima.status != '200'){
        ctx.throw(404, 'Cidade não encontrada');
    }

    let tempCidade = resultadoClima.clima.temp;

    if( tempCidade > 25){
        var playlistId = await spotify.obtemPlaylistInterno("pop");
        //console.log(playlistId);
        var musicas = await spotify.obtemMusicaInterno(playlistId);
        ctx.body = musicas;
    }else if( tempCidade <= 25 && tempCidade >= 10){
        var playlistId = await spotify.obtemPlaylistInterno("rock");
        //console.log(playlistId);
        var musicas = await spotify.obtemMusicaInterno(playlistId);
        ctx.body = musicas;
    }else{
        var playlistId = await spotify.obtemPlaylistInterno("classical");
        //console.log(playlistId);
        var musicas = await spotify.obtemMusicaInterno(playlistId);
        ctx.body = musicas;
    }
    
    //ctx.body = resultadoClima;
};