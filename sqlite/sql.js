import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("test.db");

db.exec(
  `
	CREATE TABLE IF NOT EXISTS people (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT,
	  age INTEGER
	);
  `,
);

db.exec(
  `
	CREATE TABLE IF NOT EXISTS animal (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT,
	  age INTEGER
	);
  `,
);

const insertInToPeople = db.prepare(
  `
    INSERT INTO people (name, age) VALUES (?, ?);
    `,
);

// const insertInToAnimal = db.prepare(
//   `
//     INSERT INTO animal (name, age) VALUES (?, ?);
//     `,
// );

db.exec("BEGIN TRANSACTION;");
for (let i = 0; i <= 1000000; i++) {
  insertInToPeople.run("haider", "bom");
}

db.exec("COMMIT;");
// db.exec(`INSERT INTO people (name, age) VALUES (${"hey"}, 3)`);

// insertInToAnimal.run("j", 1);
// insertInToAnimal.run("k", 2);
// insertInToAnimal.run("l", 3);

// const rows = db.prepare("SELECT id, name, age FROM people").all();
// const animals = db.prepare("SELECT id, name, age FROM animal").all();

// for (const row of rows) {
//   console.table([row]);
// }
// for (const row of animals) {
//   console.table([row]);
// }
db.close();
