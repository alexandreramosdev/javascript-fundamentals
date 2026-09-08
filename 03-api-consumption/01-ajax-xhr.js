/**
 * Exemplo 1: AJAX Tradicional (XMLHttpRequest)
 *
 * O AJAX (Asynchronous JavaScript and XML) permitia buscar dados do servidor sem recarregar a página.
 * Historicamente, utilizávamos o objeto XMLHttpRequest.
 *
 * NOTA: XMLHttpRequest é uma API nativa do navegador. Para testar em Node.js, seria necessário bibliotecas externas,
 * mas o conceito abaixo ilustra exatamente como o AJAX clássico funciona no navegador.
 */

function buscarDadosComAjax() {
  // 1. Instancia o objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // 2. Configura a requisição (Método HTTP e URL)
  // Usaremos a API pública JSONPlaceholder
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);

  // 3. Define a função que será executada quando o estado da requisição mudar
  xhr.onreadystatechange = function () {
    // readyState 4 significa que a requisição foi concluída e a resposta foi recebida
    if (xhr.readyState === 4) {
      // Verifica se o status HTTP é de sucesso (200)
      if (xhr.status === 200) {
        // A resposta vem como string JSON, precisamos converter para objeto JavaScript
        const dados = JSON.parse(xhr.responseText);
        console.log("--- Resposta AJAX (XMLHttpRequest) ---");
        console.log(`Nome: ${dados.name}`);
        console.log(`E-mail: ${dados.email}`);
      } else {
        console.error("Erro na requisição AJAX:", xhr.status);
      }
    }
  };

  // 4. Envia a requisição
  xhr.send();
}

// Para rodar no navegador, basta chamar:
// buscarDadosComAjax();

console.log(
  "Exemplo conceitual de AJAX carregado. Veja o código para entender a estrutura com XMLHttpRequest.",
);
