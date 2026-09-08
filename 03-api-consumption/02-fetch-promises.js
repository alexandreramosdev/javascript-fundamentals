/**
 * Exemplo 2: Fetch API com Promises (.then / .catch)
 * 
 * A Fetch API veio para substituir o XMLHttpRequest, utilizando Promises para lidar 
 * com operações assíncronas de forma muito mais limpa e encadeada.
 */

console.log('Iniciando requisição com Fetch e Promises...');

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        // O fetch não rejeita a promise em erros HTTP (como 404 ou 500).
        // Precisamos verificar response.ok manualmente:
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Converte a resposta recebida para JSON
        return response.json();
    })
    .then(data => {
        console.log('--- Dados recebidos via Fetch (.then) ---');
        console.log(`Título: ${data.title}`);
        console.log(`Conteúdo: ${data.body}`);
    })
    .catch(error => {
        // Captura qualquer erro de rede ou exceção lançada no .then
        console.error('Erro ao consumir a API:', error.message);
    });
