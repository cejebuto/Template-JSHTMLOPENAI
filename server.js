import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';

const app = express();
const openai = new OpenAI({
    organization: process.env.OPENAI_ORG_ID,
    project: process.env.OPENAI_PROJECT_ID,
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.static('public'));

app.get('/chat', async (req, res) => {
    const userPrompt = req.query.prompt || 'Hola GPT4 mini';

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // o el que quieras usar
            messages: [{ role: 'user', content: userPrompt }],
            // ...opciones extra (stream, temperature, etc.)
        });

        // Obtén la respuesta del primer choice
        const respuesta = response.choices[0]?.message?.content || 'Sin respuesta';
        res.json({ answer: respuesta });
    } catch (error) {
        console.error('Error aayudame l consumir la API GPT4:', error);
        res.status(500).json({ error: 'Error al consumir la API GPT4' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});