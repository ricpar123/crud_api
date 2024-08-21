const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({

    userid: {
        type: String,
        required: true,
    },
    clave: {
        type: String,
        required: true,
    },
    rol: {
        type: String, 
        required:true,
    },

});

module.exports = mongoose.model("Usuario", UsuarioSchema);