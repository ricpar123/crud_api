const Usuario = require("../model/Usuario");

const getUsuarios = async  ( req, res ) => {
    try {
      const usuarios = await Usuario.find({});
      res.send(usuarios);
      
    } catch (error) {
        console.log(error);
    }
}

const getUsuariosNombre = async  ( req, res ) => {
    let tec = [];
    try {
      const usuarios = await Usuario.find({}, {userid:1, _id:0 });


      for( let i = 0; i < usuarios.length; i++){
        tec.push(usuarios[i].userid);
        
      }
      console.log(tec);
      res.send(tec);  
      
     
    } catch (error) {
        console.log(error);
    }
}

const loginUsuarios = async ( req, res) => {
    const { userid, clave } = req.body;

    try {
        const usuario = await Usuario.findOne({userid});
        if(!usuario) {
            return res.status(400).json({
                ok:false,
                msg:'Usuario no encontrado'
            });
        }
        if( clave != usuario.clave){
            return res.status(400).json({
                ok:false,
                msg:'Clave no es correcta'
            });
        }

        res.status(201).json({
            ok: true,
            msg:'login exitoso',
            usuario
        })
    } catch (error) {
        console.log('error');
        return res.status(500).json({
            ok: false,
            msg: 'Por favor contacte con el administrador'
        });
    }
}
    
    


const createUsuario = async (req, res) => {
    const usuario = new Usuario({
        userid: req.body.userid,
        clave: req.body.clave,
        rol: req.body.rol,
    });
   await  usuario.save().then(() => {
    console.log('creado nuevo usuario')
    res.send(usuario);
   }).catch((err)=> {res.send(err);

   });
    
   };

   const updateUsuario = async (req, res ) => {
    
    const {_id, userid, clave, rol } = req.body;
    console.log('datos:', req.body);

    
    const dbUsuario = await Usuario.findByIdAndUpdate(_id, {userid, clave, rol}, {new:true})
                        .then(() => {
                            res.send(dbUsuario);
                        }).catch((err)=> res.send(err));

    
   };
    
   const deleteUsuario = async (req, res ) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findByIdAndDelete(id);
        return res.status(201).json({
            ok:true,
            msg:'Usuario eliminado'
        });
    } catch ( error) {
        console.log('error en la eliminacio');
        return res.status(500).json({
            ok:false,
            msg:'error en la eliminacion'
        });
    }
   }


module.exports = {
    getUsuarios,
    loginUsuarios,
    getUsuariosNombre,
    createUsuario,
    updateUsuario,
    deleteUsuario
}