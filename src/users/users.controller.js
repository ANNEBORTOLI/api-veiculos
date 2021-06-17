const UserService = require('./users.service');

class Controller {
  async findAll(req, res) {
    const users = await UserService.findAll();
    return users.length == 0 ? res.json({ "messege": "No users registered yet" }) : res.json(users);
  }

  async findById(req, res) {
    const { id } = req.params;
    const user = await UserService.findById(id);
    return user ? res.json(user) : res.json({ "messege": "User not found" });
  }

  async createOrUpdate(req, res) {
    const { id } = req.params;
    const { name, email, cpf, birth_date } = req.body;
    console.log("CONTROLLER")
    await UserService.save({ id: id, name, email, cpf, birth_date });
    return res.json({ success: true })
  }

  async remove(req, res) {
    const { id } = req.params;
    await UserService.remove(id);

    res.json({ success: true })
  }
}

const UserController = new Controller();
module.exports = UserController;
