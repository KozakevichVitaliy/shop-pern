class UserController {
  async signup() {
    
  }
  async signin() {
    
  }

  async auth(req, res) {
    res.json({ hello: 'sadsa' })
  }
}

module.exports = new UserController()