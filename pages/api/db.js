import db from '../../db.json';

// fetch('http://localhost:3000/api/db')
// .then(async(respostaDoServidor) => {
//     const resposta = await respostaDoServidor.json();
//     console.log(resposta);
// })


// Tudo o que estiver na pasta pages/ funciona como uma página. Da mesma forma, podemos colocar vários 
// tipos de arquivos como se fosse um servidor express (lambida server).
// Precisamos exportar uma função que recebe request e response
export default function dbHandler(request, response) {
    // ERRO DE CORS (CROSS-ORIGIN):
    // O browser por segurança não deixa você sair do domínio e ir pra outros endereços para evitar que o usuário acesse algo de fora daquele domínio
    // Passamos no cabeçalho que permitimos o browser sair do domínio e fazer requisições post, get...
    // Configurar a resposta para conseguirmos fazer uma api pública (qualquer um pode fazer requisições a ela), 
    // configurando o servidor para lidarmos com a segurança do browser
    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
    response.json(db);
}