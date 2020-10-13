const fetch = require('node-fetch');
require('dotenv/config');

var climaCidade =  {
    nome:'',
    ceu:{},
    clima:{},
    status:''
}

function sanitizarDadosClima(dados){
    climaCidade.nome = dados.name;
    climaCidade.ceu = dados.weather;
    climaCidade.clima = dados.main;
}

async function fetchClima(cidade){
    let urlClima = "http://api.openweathermap.org/data/2.5/weather?q="+cidade+"&units=metric&appid="+process.env.ENV_CLIMA_TOKEN;
    const resultado = await fetch(urlClima);
    const dados = await resultado.json();
    return dados;
}

exports.obtemClimaInterno = async (cidade) => {
    let clima = await fetchClima(cidade);
    climaCidade.status = clima.cod;
    if(clima.cod == '200'){
        sanitizarDadosClima(clima);
    }
    return climaCidade;
}

exports.obtemClima = async ctx => {
    var cidade = ctx.request.query.cidade;
    let clima = await fetchClima(cidade);

    if(clima.cod != '200'){
        ctx.throw(404,clima);
    }

    ctx.body = clima;
};