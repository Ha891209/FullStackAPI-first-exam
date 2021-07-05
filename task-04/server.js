const http = require('http');
const { getAll } = require('./jsonDB');

const port = 8080;

const server = http.createServer(async (req, res) => {
    const list = await getAll();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(list));
});

server.listen(port, () => {
    console.log(`Server is running: http://127.0.0.1:${port}`);
});

/**
 * 1. Töltsd be a szükséges modulokat a http kérésekhez és a jsonDB getAll
 * függvényét.
 */

// 2. Definiáld a port értékét 8080 -ra a port változóban.

/**
 * 3. Hozz létre egy http szervert.
 * A szerver get kérés esetén a getAll függvény segítségével lekéri a listát,
 * majd beállítja a headert, hogy json a tartalom típusa,
 * végül visszaküldi a kliensnek a listában tárolt adatokat.
 */

/**
 * 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
 */
