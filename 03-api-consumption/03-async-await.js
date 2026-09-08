/**
 * Exemplo 3: Fetch API com Async/Await (Modo Atual / Recomendado)
 * 
 * O async/await é açúcar sintático sobre as Promises, permitindo escrever 
 * código assíncrono que se parece com código síncrono, facilitando a leitura 
 * e o tratamento de erros com try/catch.
 */

async function buscarUsuario() {
    try {
        console.log('Iniciando requisição com async/await...');

        // Aguarda a resposta da requisição
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2');

        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        // Aguarda a conversão dos dados para JSON
        const usuario = await response.json();

        console.log('--- Dados recebidos via Async/Await ---');
        console.log(`Nome: ${usuario.name}`);
        console.log(`Cidade: ${usuario.address.city}`);
        console.log(`Empresa: ${usuario.company.name}`);

    } catch (error) {
        // Captura erros de rede ou erros lançados acima
        console.error('Falha ao buscar usuário:', error.message);
    }
}

// Executa a função assíncrona
buscarUsuario();
