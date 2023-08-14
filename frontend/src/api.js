const baseUrl = 'http://localhost:5000';

async function obtenerContenido(ruta) {
    try {
        const response = await fetch(`${baseUrl}/${ruta}`);
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return 'Error al obtener el contenido.';
    }
}

export { obtenerContenido };
