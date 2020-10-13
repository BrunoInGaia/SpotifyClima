const koa = require('koa');
const app = new koa();
const clima = require('./clima.js');
const spotify = require('./spotify.js');
const musicaClima = require('./exibeMusicaClima.js');

const roteamento = require('koa-router');


var rotas = new roteamento();
rotas.get('/clima',clima.obtemClima);
rotas.get('/playlist',spotify.obtemPlaylist);
rotas.get('/musica',spotify.obtemMusica);
rotas.get('/genero',spotify.obtemGeneros);
rotas.get('/',musicaClima.musicaClima);

app.use(rotas.routes());


app.listen(process.env.PORT || 3000);