const sqlite = require('sqlite3').verbose()

class DB {

  constructor(file) {
    this.db = new sqlite.Database(file)
    this.db.run(`
      CREATE TABLE IF NOT EXISTS user(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        user_pass TEXT NOT NULL,
        is_admin INTEGER NOT NULL DEFAULT 0
      )
    `)
  }

  insert(user, callback) {
    return this.db.run(
      'INSERT INTO user (name, email, user_pass) VALUES(?, ?, ?)',
      user,
      (err) => { callback(err) }
    )
  }


}
module.exports = DB