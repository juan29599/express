const router = require("express").Router();
const { obtenerUsuarios,guardarUsuarios,modificarUsuarios,eliminarUsuarios }=require('../controllers/usuarios.controller');

router.get("/", (req,res) => res.send('hola mundo'));
router.get('/usuarios',obtenerUsuarios);
router.post('/usuarios',guardarUsuarios);
router.put('/usuarios/:id',modificarUsuarios);
router.delete('/usuarios/:id',eliminarUsuarios);
module.exports= router;