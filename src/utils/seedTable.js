import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';

// Node command: node src/utils/seedTable.js
async function seedTable() {
  const db = await open({
    filename: path.join('__dirname', '..', 'src', 'data', 'database.db'),
    driver: sqlite3.Database,
  });

  try {
    await db.exec('BEGIN TRANSACTION');

    for (const { id, title } of todoObject) {
      await db.run(
        `
        INSERT INTO todolist (id, title)
        VALUES (?, ?)
      `,
        [id, title],
      );
    }
    await db.exec('COMMIT');
    console.log(`'todolist' Table seeded ✅`);
  } catch (err) {
    await db.exec('ROLLBACK');
    console.log('Error inserting data ❌', err.message);
  } finally {
    await db.close();
    console.log('Database connection closed 🔐');
  }
}

seedTable();
