const db = require('../config/dataBase');
const bcrypt = require('bcrypt');
module.exports.obtenerUsuarios= async(req,res) => {
    try {
        let usuarios=await db.usuarios.findAll();
        if(usuarios){
            return res.json(usuarios);
        }else{
            return res.json({mensaje:'no existen datos'});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports.guardarUsuarios=async(req,res) => {
    try {
        req.body.password=bcrypt.hashSync(res.body.password,10);
        await db.usuarios.create(req.body);
        return res.json({mensaje:'usuario agregado satisfactoriamente'});
    } catch (error) {
        res.status(400).json(error); 
    }
}
module.exports.modificarUsuarios = async(req,res) => {
    try {
       await db.usuarios.update({id: ""},{
           where:{
               id:null
           }
       }); 
       return res.json({mensaje:'usuario actualizado satisfactoriamente'})
    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports.eliminarUsuarios = async(req,res) => {
    try {
        req.params.id
    } catch (error) {
        
    }
}