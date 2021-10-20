const connection=require('../conexion/conexion');//indicamos que vaya a la carpeta conexion y luego al archivo conexion
const cnn=connection();//creamos una conexion
const {render, name}=require('ejs');//renderizamos
const bcryptjs=require('bcryptjs');
const { application } = require('express');
const controller={};

controller.index=(req,res,next)=>{//renderizamos login, index es el que lee login
    res.render('login')
    res.send('error de controlador')
}

controller.tb_usuarios=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    if(req.session.Login){

    cnn.query('SELECT * FROM tbusuarios',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('usuarios',{datos:resbd})
        }
        //si entra al if es por causa de un error
        //si entra al else se renderiza en el ejs de usuarios los datos de la base.

    })
    }
    else{
        res.redirect('/');
    }

    
}

controller.insertar=async(req,res,next)=>{//creamos un controller aqui es donde creamos los 
    //espacios para el usuario digite informacion
    const i=req.body.UsuId;
    const n=req.body.UsuNombre;
    const c=req.body.UsuClave;
    const r=req.body.UsuRol;
    const e=req.body.UsuEstado;
    const img=req.body.UsuImagen;
    const password=await bcryptjs.hash(c,8)//encriptamos la clve
    console.log(i,n)
    cnn.query('INSERT INTO tbusuarios SET?',{UsuId:i,UsuNombre:n,UsuClave:password,UsuRol:r,UsuEstado:e,UsuImagen:img},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/')
        }
        //hacemos el proceso de saber si los datos ingresan bien
    })
}
controller.cuentcre=async(req,res,next)=>{//creamos un controller aqui es donde creamos los 
    //espacios para el usuario digite informacion
    const i=req.body.CodCuenta;
    const n=req.body.CliId;
    const c=req.body.Cuenta;
    const r=req.body.Saldo;

    console.log(i,n,c,r)
    cnn.query('INSERT INTO cuentas SET?',{CodCuenta:i,CliId:n,Cuenta:c,Saldo:r},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/')
        }
        //hacemos el proceso de saber si los datos ingresan bien
    })
}

controller.insertarcli=async(req,res,next)=>{//creamos un controller aqui es donde creamos los 
    //espacios para el usuario digite informacion
    const i=req.body.CliId;
    const n=req.body.CliNombre;
    const c=req.body.CliApellido;
    const r=req.body.CliCorreo;
    const e=req.body.CliCelular;
    const a=req.body.CliSexo;
    const b=req.body.CliFecNac;
    console.log(i,n)
    cnn.query('INSERT INTO tbclientes SET?',{CliId:i,CliNombre:n,CliApellido:c,CliCorreo:r,CliCelular:e,CliSexo:a,CliFecNac:b},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/')
        }
        //hacemos el proceso de saber si los datos ingresan bien
    })
}

controller.insertarempcli=async(req,res,next)=>{//creamos un controller aqui es donde creamos los 
    //espacios para el usuario digite informacion
    const i=req.body.CliId;
    const n=req.body.CliNombre;
    const c=req.body.CliApellido;
    const r=req.body.CliCorreo;
    const e=req.body.CliCelular;
    const a=req.body.CliSexo;
    const b=req.body.CliFecNac;
    console.log(i,n)
    cnn.query('INSERT INTO tbclientes SET?',{CliId:i,CliNombre:n,CliApellido:c,CliCorreo:r,CliCelular:e,CliSexo:a,CliFecNac:b},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/')
        }
        //hacemos el proceso de saber si los datos ingresan bien
    })
}
controller.insertarcre=async(req,res,next)=>{//creamos un controller aqui es donde creamos los 
    //espacios para el usuario digite informacion
    const i=req.body.CreCodigo;
    const n=req.body.CreId;
    const c=req.body.CreLinea;
    const r=req.body.CreMontPres;
    const e=req.body.CreFecAprobada;
    const a=req.body.CrePlazo;
    console.log(i,n)
    cnn.query('INSERT INTO tbcreditos SET?',{CreCodigo:i,CreId:n,CreLinea:c,CreMontPres:r,CreFecAprobada:e,CrePlazo:a},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/')
        }
        //hacemos el proceso de saber si los datos ingresan bien
    })
}


controller.insertarlin=async(req,res,next)=>{//creamos un controller aqui es donde creamos los 
    //espacios para el usuario digite informacion
    const i=req.body.LinCodigo;
    const n=req.body.LinNomLinea;
    const c=req.body.LinMontMaxCred;
    const r=req.body.LinPlazoMaxCred;
    console.log(i,n)
    cnn.query('INSERT INTO tblineas SET?',{LinCodigo:i,LinNomLinea:n,LinMontMaxCred:c,LinPlazoMaxCred:r},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/')
        }
        //hacemos el proceso de saber si los datos ingresan bien
    })
}


controller.login=async(req,res,next)=>{  //LOGINN 
    const usu = await req.body.Usuario;  // TRAEMOS LOS NAME DE EL LOGIN PARA VALIDAR LOS CAMPOS
    const cla = await req.body.Password;
    
    cnn.query('SELECT * FROM tbusuarios WHERE UsuNombre=?',[usu],async(err,results)=>{  //CONSULTAMOS LOS DATOS EN LA BASE DE DATOS Y REEMPLAZAMOS VALORES CON LOS QUE DILIGENCIA EL USUARIO
        if(err){
            next(new Error("ERROR AL REALIZAR LA CONSULTA",err)); //VALIDAMOS SI EXITEN ERRORES
    
        }else if(results!=0 && await(bcryptjs.compare(cla,results[0].UsuClave))){ // SI EL RESULTADO ES DIFERENTE DE 0 ES QUE ENCONTRO EL USUARIO,POR MEDIO DE UN ARREGLO Y COMPARE, COMPARAMOS LO DILIGENCIADO POR EL USUARIO Y LO REGISTRADO EN LA BD                           console.log("Datos Correctossssssss");

  
       Rol=results[0].UsuRol;
       uss=results[0].UsuNombre;
       Doc=results[0].UsuId;
        //CREAMOS SESIONES POR MEDIO DE UN ARREGLO, QUE NOS RETORNA LOS DATOS DE EL USUARIO LOGEADO
       req.session.Login=true; //GENERAMOS LA SESION AL DARLE COMO TRUE EN VERDADERA.
       console.log(Rol)
       console.log(Doc)
       switch(Rol){
           case 'admin':
                                                      //PASAMOS A VALIDAR POR MEDIO DE UN SWITCH LOS DIFERENTES CASOS POR MEDIO DE LA VARIABLE ROL, QUE CONTIENE EL ARREGLO
              res.redirect('usuarios');  //REDIRIGIMOS
        
              break; //DESCANSA
            
              case 'cliente':  //VALIDAMOS IGUAL QUE ARRIBA 

             
              cnn.query('SELECT * FROM tbclientes WHERE CliId="'+Doc+'"',(err,results)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
                if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                    next(new Error(err));
                    console.log("ERROR EN LA CONSULTA");
                }   
                else{
                    nomcli=results[0].CliNombre;
                    Doc=results[0].CliId;
                    //sexo=results[0].CliSexo;
                    console.log(nomcli);
                   
          
                    res.redirect('clientes');
               
                }
            })

            break;

              case 'empleado':  //VALIDAMOS IGUAL QUE ARRIBA 

              
              cnn.query('SELECT * FROM tbusuarios WHERE UsuId="'+Doc+'"',(err,results)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
                if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                    next(new Error(err));
                    console.log("ERROR EN LA CONSULTA");
                }   
                else{
                    nomemp=results[0].UsuNombre;
                    console.log(nomemp);
                   
          
                    res.render('empleados');
               
                }
            })

              break;
       }


        }
        else{
            console.log("DATOS INCORRECTOS"); //SALIMOS DEL IF DE ENTRADA Y SWITCH A UN VALIDADOR SI LOS DATOS SON INCORRECTOS 
            res.render('/'); //NOS REDIRIGE AL MISMO ARCHIVO
        }
    })
    
    
}
controller.cliente=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    
    console.log(Doc)
    cnn.query('SELECT * FROM tbclientes WHERE  CliId="'+Doc+'"',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('clientes',{datos:resbd})
        }
        //si entra al if es por causa de un error
        //si entra al else se renderiza en el ejs de usuarios los datos de la base.

    })
    }
    controller.cuentass=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    
        console.log(Doc)
        cnn.query('SELECT * FROM cuentas WHERE  CliId="'+Doc+'"',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
            if(err){
                next(new Error(err))
                console.log("Error en la consulta")
            }
            else{
                console.log(resbd)
                res.render('cuentass',{datos:resbd})
            }
            //si entra al if es por causa de un error
            //si entra al else se renderiza en el ejs de usuarios los datos de la base.
    
        })
        }
        controller.enviardiner=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECHA
            const d=req.body.CliId;
            const a=req.body.mont;     //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
            const c=req.body.Cuenta;
            console.log(a);
            cnn.query('UPDATE cuentas SET Saldo= Saldo -"'+a+'" WHERE CliId="'+Doc+'" AND Cuenta="Ahorros"',async(err,respbb)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
            if(err){    
                next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
            }
            else{
                console.log(respbb);
                res.render('dinerenvia',{Datos:respbb}); //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
            }
            });
            cnn.query('UPDATE cuentas SET Saldo= Saldo +"'+a+'" WHERE CliId="'+d+'" AND Cuenta="'+c+'"',async(err,respbb)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
                if(err){    
                    next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
                }
                else{
                    console.log(respbb);
                    res.render('dinerenviar',{Datos:respbb}); //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
                }
                });
             }
             controller.dinerreti=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECHA
                const a=req.body.mont;
                const c=req.body.Cuenta;
    
                
              
                cnn.query('UPDATE cuentas SET Saldo= Saldo -"'+a+'" WHERE CliId="'+Doc+'" AND Cuenta="'+c+'"',async(err,resbd)=>{// CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
                if(err){    
                    next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
                }
                else{
                    console.log(resbd);
                res.render('retidiner')   //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
                }
                });
                 }
                 controller.dinercons=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECHA
                    const a=req.body.mont;
                    const c=req.body.Cuenta;
        
                    
                  
                    cnn.query('UPDATE cuentas SET Saldo= Saldo +"'+a+'" WHERE CliId="'+Doc+'" AND Cuenta="'+c+'"',async(err,resbd)=>{// CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
                    if(err){    
                        next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
                    }
                    else{
                        console.log(resbd);
                    res.render('consdiner')   //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
                    }
                    });
                     }
    controller.credicliente=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    
        console.log(Doc)
        cnn.query('SELECT * FROM tbcreditos WHERE  CreId="'+Doc+'"',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
            if(err){
                next(new Error(err))
                console.log("Error en la consulta")
            }
            else{
                console.log(resbd)
                res.render('credicliente',{datos:resbd})
            }
            //si entra al if es por causa de un error
            //si entra al else se renderiza en el ejs de usuarios los datos de la base.
    
        })
        }
    controller.lincliente=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    
        console.log(Doc)
        cnn.query('SELECT * FROM tblineas,tbcreditos  WHERE tblineas.LinCodigo = tbcreditos.CreLinea AND CreId="'+Doc+'"',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
            if(err){
                next(new Error(err))
                console.log("Error en la consulta")
            }
            else{
                console.log(resbd)
                res.render('lincliente',{datos:resbd})
            }
                //si entra al if es por causa de un error
                //si entra al else se renderiza en el ejs de usuarios los datos de la base.
        
        })
        }
    

    controller.actuusucontra=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    
        console.log(Doc)
        cnn.query('SELECT * FROM tbusuarios WHERE  UsuId="'+Doc+'"',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
            if(err){
                next(new Error(err))
                console.log("Error en la consulta")
            }
            else{
                console.log(resbd)
                res.render('actualizarconcli',{datos:resbd})
            }
            //si entra al if es por causa de un error
            //si entra al else se renderiza en el ejs de usuarios los datos de la base.
    
        })
        }

        
    

    
    
    



/*MIIIOcontroller.login=async(req,res,next)=>{//creamos el controller de login 
    const usu=await req.body.UsuNombre;//en las siguentes lineaas se compara el nombre y la clave para saber si son correctas
    const cla=await req.body.UsuClave;
    cnn.query('SELECT * FROM tbusuarios WHERE nomusu=?',[usu],async(err,results)=>{
        if(err){
            next(new Error("Error de consulta login",err));
        }
        else if(results!=0 && await(bcryptjs.compare(cla,results[0].clave))){
            console.log("datos correectos");
            //res.redirect('consultar');
            rol=results[0].rol;
            uss=results[0].nomusu;
            req.session.login=true;
            switch(rol){
                case 'Cajero':
                    res.redirect('clientes');//dice que si el caso es cajero lo redirija a clientes
                break;

                case 'empleado':
                    res.redirect('login');//si es empleado lo redirija a consulatar
                break;
            }

        }
        else{
            console.log("Datos incorrectos");
            res.redirect('/');

        }
    });
}*/
controller.clientes=(req,res,next)=>{//creamos el controller clientes que renderiza el ejs clientes
    console.log("En la vista del usuario");
    res.render('usuarios');
}
controller.dinerenvia=(req,res,next)=>{//creamos el controller clientes que renderiza el ejs clientes
    console.log("En la vista del usuario");
    res.render('dinerenvia');
}
controller.retidiner=(req,res,next)=>{//creamos el controller clientes que renderiza el ejs clientes
    console.log("En la vista del usuario");
    res.render('retidiner');
}
controller.consdiner=(req,res,next)=>{//creamos el controller clientes que renderiza el ejs clientes
    console.log("En la vista del usuario");
    res.render('consdiner');
}




controller.actualizar=async(req,res,next)=>{
    const docx=req.body.dd;
    const usux=req.body.uu;
    const clavex=req.body.cc;
    const rolx=req.body.rr;
    const estadx=req.body.ee;
    const imgnx=req.body.ii;
    const password=await bcryptjs.hash(clavex,8)
    cnn.query('UPDATE tbusuarios SET UsuNombre="'+usux+'",UsuClave="'+password+'",UsuRol="'+rolx+'",UsuEstado="'+estadx+'",UsuImagen="'+imgnx+'" WHERE UsuId="'+docx+'"'),async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("actualizado")
            res.redirect('usuarios');
        }
    }
}

controller.actualizarconcli=async(req,res,next)=>{
    const docx=req.body.dd;
    const usux=req.body.uu;
    const clavex=req.body.cc;
    const password=await bcryptjs.hash(clavex,8)
    console.log(docx+usux+password)
    cnn.query('UPDATE tbusuarios SET UsuNombre="'+usux+'",UsuClave="'+password+'" WHERE UsuId="'+docx+'"'),async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("actualizado")
            res.redirect('actualizarconcli');
        }
    }
}

controller.actualizardacli=async(req,res,next)=>{
    const idx=req.body.dd;
    const nomx=req.body.uu;
    const apex=req.body.cc;
    const corrx=req.body.rr;
    const celx=req.body.ee;
    const sex=req.body.ii;
    const fecx=req.body.jj;
    
    cnn.query('UPDATE tbclientes SET CliNombre="'+nomx+'",CliApellido="'+apex+'",CliCorreo="'+corrx+'",CliCelular="'+celx+'",CliSexo="'+sex+'",CliFecNac="'+fecx+'" WHERE CliId="'+idx+'"'),async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("actualizado")
            res.redirect('clientes');
        }
    }
}

controller.actualizardacre=async(req,res,next)=>{
    const codx=req.body.dd;
    const idx=req.body.uu;
    const lineax=req.body.cc;
    const montox=req.body.rr;
    const fechax=req.body.ee;
    const plazox=req.body.ii;
    console.log(codx,idx,lineax,montox,fechax,plazox);
    
    cnn.query('UPDATE tbcreditos SET CreCodigo="'+codx+'",CreId="'+idx+'",CreLinea="'+lineax+'",CreMontPres="'+montox+'",CreFecAprobada="'+plazox+'",CrePlazo="'+fechax+'" WHERE CreId="'+idx+'"'),async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("actualizado")
            res.redirect('creditos');
        }
    }
}
controller.actualizardalin=async(req,res,next)=>{
    const codx=req.body.dd;
    const nomx=req.body.uu;
    const montx=req.body.cc;
    const plazox=req.body.rr;
   
    console.log(codx,nomx,montx,plazox);
    
    cnn.query('UPDATE tblineas SET LinCodigo="'+codx+'",LinNomLinea="'+nomx+'",LinMontMaxCred="'+montx+'",LinPlazoMaxCred="'+plazox+'" WHERE LinCodigo="'+codx+'"'),async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("actualizado")
            res.render('lineas');
        }
    }
}

controller.eliminar=async(req,res,next)=>{  
    const d=req.body.dd;

      
    cnn.query('DELETE  FROM tbusuarios WHERE UsuId="'+d+'"',async(err,results)=>{
       
        if(err){
            next(new Error(err));

        }else{
            console.log("Borrado")
            res.redirect('usuarios');
        }

        });
    

}
controller.eliminarcli=async(req,res,next)=>{  
    const t=req.body.tt;

    console.log(t);
    cnn.query('DELETE  FROM tbclientes WHERE CliId="'+t+'"',async(err,results)=>{
       
        if(err){
            next(new Error(err));

        }else{
            console.log("Borrado")
            res.redirect('clientes');
        }
    });
}
controller.eliminarcre=async(req,res,next)=>{  
    const t=req.body.tt;

    console.log(t);
    cnn.query('DELETE  FROM tbcreditos WHERE CreCodigo="'+t+'"',async(err,results)=>{
        
        if(err){
            next(new Error(err));
           

        }else{
            console.log("Borrado")
            res.redirect('creditos');
        }
    });
}
controller.eliminarlin=async(req,res,next)=>{  
    const t=req.body.tt;

    console.log(t);
    cnn.query('DELETE  FROM tblineas WHERE LinCodigo="'+t+'"',async(err,results)=>{
        
        if(err){
            next(new Error(err));
           

        }else{
            console.log("Borrado")
            res.redirect('lineas');
        }
    });
}


controller.cerrar=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    });
}
controller.ircre=(req,res,next)=>{
    req.session.creditos(()=>{
        res.render('creditos');
    });
}






controller.empcliente=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    if(req.session.Login){

    cnn.query('SELECT c.CliId,c.CliNombre, c.CliApellido, c.CliCorreo, c.CliCelular, c.CliSexo, c.CliFecNac FROM tbusuarios u, tbclientes c WHERE u.UsuId=c.CliId AND u.UsuRol="cliente"',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('empcliente',{datos:resbd})
        }
        //si entra al if es por causa de un error
        //si entra al else se renderiza en el ejs de usuarios los datos de la base.

    })
    }
    else{
        res.redirect('/');
    }

    
}

controller.creditos=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    if(req.session.Login){

    cnn.query('SELECT * FROM tbcreditos',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('creditos',{datos:resbd})
        }
        //si entra al if es por causa de un error
        //si entra al else se renderiza en el ejs de usuarios los datos de la base.

    })
    }
    else{
        res.redirect('/');
    }

    
}
controller.creacuent=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    if(req.session.Login){

    cnn.query('SELECT * FROM cuentas',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('creacuent',{datos:resbd})
        }
        //si entra al if es por causa de un error
        //si entra al else se renderiza en el ejs de usuarios los datos de la base.

    })
    }
    else{
        res.redirect('/');
    }

    
}

controller.lineas=(req,res,next)=>{
    if(req.session.Login){
        res.render('lineas');
    }else{
        res.redirect('/');  
    }

}
controller.lineas=(req,res,next)=>{//creamos y rendenderizamos una consulta (consultageneral)
    if(req.session.Login){

    cnn.query('SELECT * FROM tblineas',(err,resbd)=>{//pide la tabala de usuarios de nuestra base de datos
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('lineas',{datos:resbd})
        }
        //si entra al if es por causa de un error
        //si entra al else se renderiza en el ejs de usuarios los datos de la base.

    })
    }
    else{
        res.redirect('/');
    }

    
}


module.exports=controller;