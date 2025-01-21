document.getElementById('requestBtn').addEventListener('click', async () => {
    const prompt = document.getElementById('promptInput').value.trim();
    if (!prompt) return;

    try {
        const resp = await fetch(`/chat?prompt=${encodeURIComponent(prompt)}`);
        if (!resp.ok) throw new Error('Fallo en la petición');
        const data = await resp.json();
        document.getElementById('responseArea').value = data.answer || 'Sin respuesta';
    } catch (error) {
        console.error(error);
        document.getElementById('responseArea').value = 'Error de conexión o de API';
    }
});