const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/:archivo', async (req, res) => {
    try {
        const { archivo } = req.params;
        const filePath = path.join(__dirname, 'archivos_json', `${archivo}.json`);

        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.status(404).send(`Archivo ${req.params.archivo}.json no encontrado`);
        } else {
            res.status(500).send('Error interno del servidor');
        }
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
