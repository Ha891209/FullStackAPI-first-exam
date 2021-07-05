const http = require('http');
const router = require('./router/countryRouter');

const port = 8080;

const server = http.createServer(async (req, res) => {
    router[req.method.toLowerCase()](res);
});

server.listen(port, () => {
    console.log(`Server is running: http://127.0.0.1:${port}`);
});

/**
 * 1. Töltsd be a szükséges modulokat: http és az általad írt router modul.
 */

// 2. Definiáld a port értékét 8080 -ra a port változóban.

/**
 * 3. Hozz létre egy http szervert.
 * A szerver get kérés esetén meghívja a router kapcsolódó metódusát,
 * amely válaszol a kérésre.
 */

// 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
