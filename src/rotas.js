const roteamento = require('koa-router');
const clima = require('./clima.js');
const spotify = require('./spotify.js');
const musicaClima = require('./exibeMusicaClima.js');

var rotas = new roteamento();
rotas.get('/clima',clima.obtemClima);
rotas.get('/playlist',spotify.obtemPlaylist);
rotas.get('/musica',spotify.obtemMusica);
rotas.get('/genero',spotify.obtemGeneros);
rotas.get('/',musicaClima.musicaClima);

module.exports = rotas;