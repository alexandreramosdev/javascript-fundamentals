# Exemplos de Consumo de API e AJAX

Esta pasta contém exemplos práticos demonstrando a evolução das requisições HTTP assíncronas em JavaScript:

1. **AJAX Tradicional (`XMLHttpRequest`)** - O método clássico utilizado em navegadores antes da chegada das Promises.
2. **Fetch API com Promises (`.then` / `.catch`)** - A evolução nativa introduzida no ES6 para simplificar requisições.
3. **Fetch API com Async/Await (`async` / `await` / `try...catch`)** - A forma mais moderna, limpa e legível de lidar com código assíncrono.

## Como Executar

Os exemplos com `fetch` (arquivos 02 e 03) podem ser executados diretamente no Node.js (versão 18+):

```bash
node 03-api-consumption/02-fetch-promises.js
node 03-api-consumption/03-async-await.js
```

O exemplo 01 (`XMLHttpRequest`) é voltado para ambientes de navegador, mas está documentado com explicações de seu funcionamento.
