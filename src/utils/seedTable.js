import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';
import { vinyl } from '#data/data.js';

// Node command: node src/utils/seedTable.js
async function seedTable() {
  const db = await open({
    filename: path.join('__dirname', '..', 'src', 'data', 'database.db'),
    driver: sqlite3.Database,
  });

  try {
    await db.exec('BEGIN TRANSACTION');

    for (const { title, artist, price, image, year, genre, stock } of vinyl) {
      await db.run(
        `
        INSERT INTO products (title, artist, price, image, year, genre, stock)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
        [title, artist, price, image, year, genre, stock],
      );
    }
    await db.exec('COMMIT');
    console.log(`'products' Table seeded ✅`);
  } catch (err) {
    await db.exec('ROLLBACK');
    console.log('Error inserting data ❌', err.message);
  } finally {
    await db.close();
    console.log('Database connection closed 🔐');
  }
}

seedTable();
