const User = require('../models/User');

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const usuario = new User({ nome, email });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar usuário.' });
  }
};
