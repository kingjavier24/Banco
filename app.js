const express=require('express');
const { Session } = require('inspector');
const morgan=require('morgan');
const session = require('express-session')
const app=express();
const path=require('path')//son parte del codigo base y de paquetes


app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'vista'));
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:'123',
    resave:true,
    saveUninitialized:true
}));

app.use(require('./rutas/rutas'))
app.use((err,req,res,next)=>{
    res.send({err:err.message});
});//creacion de la app donde le decimos que requerimos la carpeta rutas con ekl archivo rutas.js



/*const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("En conexion")
    res.end("Conexion ok")
})
server.listen(3000,()=>{
    console.log("Esperando respuesta ")
})*/


// creacion de nuestro servidor
app.set('port',process.env.PORT || 3000);//utilizamos el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`En el servidor ${app.get('port')}`);
})

