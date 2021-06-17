const { User } = require('../database/models');

class Database {
  findAll() {
    return User.findAll();
  }

  findById(id) {
    const result = User.findByPk(id);
    return result;
  }

  create(name, email, cpf, birth_date) {
    const result = User.create({
      name,
      email,
      cpf,
      birth_date
    });
    return result;
  }

  update(id, name, email, cpf, birth_date) {
    const result = User.update(
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
    return User.destroy(
      {
        where: { id: id }
      });
  }
}

const UserDb = new Database();

module.exports = UserDb;