const UsuariosService = require("../services/UsuariosService");

exports.criar = async (req, res) => {
    try {
        const usuario = await UsuariosService.criar(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.buscarPorId = async (req, res) => {
    try {
        const usuario = await UsuariosService.buscarPorId(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}