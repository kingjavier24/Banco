const express=require('express')
const rutas=express.Router();
const controller=require('../controlador/controller')//pedimos todas las ordenes de la carpeta controlador del archivo clientews
//rutas.get('/',controller.index);// es la ruta de nuestro index que esta en controller
//rutas.post('/login',controller.login)//es la ruta de nuestro login que esta en controller
//rutas.get('/consultar',controller.consultageneral) //es la ruta de nuestra consulta general que esta en controller
//rutas.get('/',controller.consultaclientes) //es la ruta de nuestro consultaclientes que esta en controller
//rutas.get('/clientes',controller.clientes);
//rutas.get('/',controller.consultalineas)   //es la ruta de nuestro consultalineas que esta en controller
//rutas.get('/',controller.consultacreditos)   //es la ruta de nuestro consultacreditos  que esta en controller
//rutas.post('/frminsertar',controller.insertar) //es la ruta de nuestro insertar que esta en controller

rutas.get('/',controller.index); 
rutas.post('/login',controller.login);

rutas.get('/usuarios',controller.tb_usuarios);
rutas.post('/frminsertar',controller.insertar);

rutas.get('/clientes',controller.cliente);
rutas.post('/frminsertar2',controller.insertarcli);

rutas.get('/creditos',controller.creditos);
rutas.post('/frminsertar3',controller.insertarcre);

rutas.get('/lineas',controller.lineas);
rutas.post('/frminsertar4',controller.insertarlin);

rutas.get('/empcliente',controller.empcliente);
rutas.post('/frminsertar5',controller.insertarempcli);

rutas.get('/creacuent',controller.creacuent);
rutas.post('/frmcuentcre',controller.cuentcre);

rutas.get('/actuusucontra',controller.actuusucontra);

rutas.get('/credicliente',controller.credicliente);

rutas.get('/lincliente',controller.lincliente);

rutas.get('/dinerenvia',controller.dinerenvia);
rutas.post('/frmdiner',controller.enviardiner);

rutas.get('/retidiner',controller.retidiner);
rutas.post('/frmrestar',controller.dinerreti);

rutas.get('/consdiner',controller.consdiner);
rutas.post('/frmcons',controller.dinercons);

rutas.get('/cuentass',controller.cuentass);












rutas.post('/usuarios',controller.clientes);


//rutas.get('/',controller.tb_cliente);
//rutas.post('/frminsertar',controller.insert_cliente);
rutas.post('/actualizar',controller.actualizar);
rutas.post('/actualizarconcli',controller.actualizarconcli);
rutas.post('/eliminar',controller.eliminar);
rutas.post('/actualizarcli',controller.actualizardacli);
rutas.post('/actualizarlin',controller.actualizardalin);
rutas.post('/actualizarcre',controller.actualizardacre);
rutas.post('/eliminarcli',controller.eliminarcli);
rutas.post('/eliminarcre',controller.eliminarcre);
rutas.post('/eliminarlin',controller.eliminarlin);

//rutas.post('/actualizar',controller.actualizarcli);


rutas.get('/cerrar',controller.cerrar);
rutas.get('/ircre',controller.ircre);

module.exports=rutas //exportamos rutas para conectarlos con los modulos de controller