const User = require('../../models/User');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'Usuário registrado com sucesso.', user });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
};
