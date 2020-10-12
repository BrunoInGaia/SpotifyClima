const koa = require('koa');
const app = new koa();
const clima = require('./clima.js');
const roteamento = require('koa-router');
const montagem = require('koa-mount');

var rotas = new roteamento();
rotas.get('/clima',clima.obtemClima);

app.use(rotas.routes());


app.listen(3000);