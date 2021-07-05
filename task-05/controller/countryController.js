const db = require('../db/db');

const getAll = async () => await db.getAll();
const count = async () => {
    const list = await db.getAll();
    return list.length;
};

module.exports = {
    getAll,
    count,
};
/**
 * 1. Definiáld a getAll nevű metódust, ami az adatbázis kezelő modulod
 * getAll metódusát hívja meg és visszaadja az értékét.
 */

/**
 * 3. Exportáld ki a getAll metódust egy objektumban, hogy más fájlokból is
 * elérhető legyen.
 */