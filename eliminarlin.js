$(document).ready(function(){
    
    $('.btneli').on('click',function(){

    let btn=$('.btneli').index(this);
    let Codigo=$('.Codigo').eq(btn);
   
    let t=Codigo.val();


    alert("SE BORRARAN LOS DATOS CON EL DOCUMENTO" +t+ "Por Favor Refresque la pagina");
    $.ajax({
        type:"POST",
        url:'/eliminarlin',
        data:{
            tt:t
        }
    });

    });
});