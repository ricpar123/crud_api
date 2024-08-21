const { model } = require("mongoose");
const { getUsuarios, getUsuariosNombre, loginUsuarios, createUsuario, updateUsuario, deleteUsuario } = require("./controllers/Usuario");
const { getClientes, updateCliente, createCliente, deleteCliente,
     getClientesNombre } = require("./controllers/Cliente");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("let's build a CRUD API!!");
});

router.get("/usuarios", getUsuarios);

router.get("/usuariosNombre", getUsuariosNombre)

router.post("/usuarios", createUsuario);

router.post("/usuarios/login", loginUsuarios)

router.put("/usuarios", updateUsuario );

router.delete("/usuarios/:id", deleteUsuario);

router.get("/clientes", getClientes);
router.get("/clientesNombre", getClientesNombre);

router.post("/clientes", createCliente);

router.put("/clientes", updateCliente );

router.delete("/clientes/:id", deleteCliente);

module.exports = router;