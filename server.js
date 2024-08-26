/*const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const cepRegex = /^[0-9]{5}-?[0-9]{3}$/; // Expressão regular para validar o CEP

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep; // Obtendo o CEP da URL

    // Validando o CEP informado
    if (!cepRegex.test(cep)) {
        return res.status(400).send('CEP inválido. Formato: XXXXX-XXX');
    }

    try {
        // Fazendo a requisição para a API do ViaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data); // Retorna os dados da resposta
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        res.status(500).send('Erro ao consultar o CEP');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
*/
const express = require('express');
const rotas = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

