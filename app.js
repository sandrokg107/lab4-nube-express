const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
 res.send('Bienvenido a nuestra tienda');
});

app.get('/clientes', (req, res) => {
 const clientes = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Pedro' },
 ];
 res.json(clientes);
});

app.get('/productos', (req, res) => {
 const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
 ];
 res.json(productos);
});

app.listen(port, () => {
 console.log(`Aplicación escuchando en el puerto ${port}`);
});