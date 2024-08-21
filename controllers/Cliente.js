const Cliente = require("../model/Cliente");


const getClientes = async  ( req, res ) => {
    try {
      const clientes = await Cliente.find({});
      res.send(clientes);  
    } catch (error) {
        console.log(error);
    }
}

const getClientesNombre = async  ( req, res ) => {
    try {
      const clientes = await Cliente.find({}, {nombre:1});
      res.send(clientes);  
    } catch (error) {
        console.log(error);
    }
}


    
    


const createCliente = async (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        email1: req.body.email1,
        email2: req.body.email2,
        email3: req.body.email3,
        email4: req.body.email4,

    });
   await  cliente.save().then(() => {
    console.log('creado nuevo cliente')
    res.send(cliente);
   }).catch((err)=> {res.send(err);

   });
    
   };

   const updateCliente = async (req, res ) => {
    
    const {_id, nombre, email1, email2, email3, email4 } = req.body;
    console.log('datos:', req.body);

    
    const dbCliente = await Cliente.findByIdAndUpdate(_id, {nombre: req.body.nombre,
        email1: req.body.email1,
        email2: req.body.email2,
        email3: req.body.email3,
        email4: req.body.email4,}, {new:true})
                        .then(() => {
                            res.send(dbCliente);
                        }).catch((err)=> res.send(err));

    
   };
    
   const deleteCliente = async (req, res ) => {
    const { id } = req.params;

    try {
        const cliente = await Cliente.findByIdAndDelete(id);
        return res.status(201).json({
            ok:true,
            msg:'Cliente eliminado'
        });
    } catch ( error) {
        console.log('error en la eliminacion');
        return res.status(500).json({
            ok:false,
            msg:'error en la eliminacion'
        });
    }
   }


module.exports = {
    getClientes,
    getClientesNombre,
    createCliente,
    updateCliente,
    deleteCliente
}