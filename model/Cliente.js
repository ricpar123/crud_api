const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
    },
    email1: {
        type: String,
        required: true,
    },
    email2: {
        type: String, 
        
    },
    email3: {
        type: String, 
        
    },
    email4: {
        type: String, 
        
    },

});

module.exports = mongoose.model("Cliente", ClienteSchema);