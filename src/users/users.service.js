const { findAll, findById, create, update, remove } = require('./users.database');

class Service {
  findAll() {
    return findAll();
  }

  findById(id) {
    return findById(id);
  }

  save(user) {
    const { id, name, email, cpf, birth_date } = user;
    return id ? update(id, name, email, cpf, birth_date) : create(name, email, cpf, birth_date);
  }

  remove(id) {
    return remove(id);
  }
}

const UserService = new Service();

module.exports = UserService;