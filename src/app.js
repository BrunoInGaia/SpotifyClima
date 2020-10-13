const koa = require('koa');
const app = new koa();
const rotas = require('./rotas.js');

app.use(rotas.routes());

app.listen(process.env.PORT || 3000);