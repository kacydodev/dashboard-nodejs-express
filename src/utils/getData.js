import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';

// Node command:
// node src/utils/getData.js
async function getData() {
  const db = await open({
    filename: path.join('__dirname', '..', 'src', 'data', 'database.db'),
    driver: sqlite3.Database,
  });

  try {
    // const query = 'SELECT * FROM products WHERE genre = ?';
    // const params = ['indie'];

    const query = 'SELECT DISTINCT genre FROM products';

    const products = await db.all(query);
    console.log(products.map((element) => element.genre));
  } catch (err) {
    await db.exec('ROLLBACK');
    console.log('Error getting data ❌', err.message);
  } finally {
    await db.close();
    console.log('Database connection closed 🔐');
  }
}

getData();
