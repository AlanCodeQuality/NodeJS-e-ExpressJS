const express = require('express');
const app = express();

app.get('/calculadora', (req, res) => {
    const { operacao, n1, n2 } = req.query;

    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    let resultado;

    if (operacao === 'soma') {
        resultado = num1 + num2;
    } else if (operacao === 'subtracao') {
        resultado = num1 - num2;
    } else if (operacao === 'multiplicacao') {
        resultado = num1 * num2;
    } else if (operacao === 'divisao') {
        resultado = num1 / num2;
    } else {
        return res.status(400).json({ error: 'Operação inválida' });
    }

    res.json({ resultado });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
