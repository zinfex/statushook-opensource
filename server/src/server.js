const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/automacoes', automacoesRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running');
});