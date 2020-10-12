
const requisicao = require('request');

exports.obtemClima = ctx => {
    var cidade = ctx.request.query.cidade;
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+cidade+"&appid=de1d0edd29bd7b6432564fd5a1d5b57d";
    ctx.body = requisicao(url,(error,response,body)=>{
        return body;
    });
};