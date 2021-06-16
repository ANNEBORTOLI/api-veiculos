const db = require('../database/models')

class Database {
  findAll() {
    return db.User.findAll();
  }

  findById(id) {
    const result = db.User.findByPk(id);
    return result;
  }

  create(name, email, cpf, birth_date) {
    const result = db.User.create({
      name,
      email,
      cpf,
      birth_date
    });
    return result;
  }

  update(id, name, email, cpf, birth_date) {
    const result = db.User.update(
      {
        name,
        email,
        cpf,
        birth_date
      },
      {
        where: { id: id }
      });
    return result;
  }

  remove(id) {
    return db.User.destroy(
      {
        where: { id: id }
      });
  }
}

const UserDb = new Database();

module.exports = UserDb;