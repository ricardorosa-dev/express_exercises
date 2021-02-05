# Grupo 12, atividade 2

## Enunciado: 
Rota: ```/btc/price```  
Objetivo: Receber uma requisição com um token e verificar se ele está correto. O formato do token deve ser uma ```string``` de 12 caracteres contendo letras e números. Caso o formato do token esteja incorreto, devolva o erro como resposta _invalid token_. Caso o formato do token esteja correto, faça um fetch em uma _API_ externa de sua preferencia e retorne os dados da API como resposta. (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json ) O _token_ será passado pelo ```header``` da seguinte forma: ```Authorization: asd65asd5sd8```.

Resposta da API:  

```
{
    "USD": {
        "code": "USD",
        "rate": "37,870.7373",
        "description": "United States Dollar",
        "rate_float": 37870.7373
    },
    "BTC": {
        "code": "BTC",
        "rate": "1.0000",
        "description": "Bitcoin",
        "rate_float": 1
    }
}
```
