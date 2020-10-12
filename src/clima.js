const fetch = require('node-fetch');

async function fetchClima(cidade){
    let urlClima = "http://api.openweathermap.org/data/2.5/weather?q="+cidade+"&appid=de1d0edd29bd7b6432564fd5a1d5b57d";
    const resultado = await fetch(urlClima);
    const dados = await resultado.json();
    return dados;
}

var climaCidade =  {
    nome:'',
    ceu:{},
    clima:{}
}

exports.obtemClimaInterno = async (cidade) => {
    let clima = await fetchClima(cidade);
    climaCidade.nome = clima.name;
    climaCidade.ceu = clima.weather;
    climaCidade.clima = clima.main;
    return climaCidade;
}

exports.obtemClima = async ctx => {
    var cidade = ctx.request.query.cidade;
    let clima = await fetchClima(cidade);
    ctx.body = clima;
};