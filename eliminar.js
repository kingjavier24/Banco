$(document).ready(function(){

    $('.btneli').on('click',function(){

    let btn=$('.btneli').index(this);
    let doc=$('.doc').eq(btn);
   
    let d=doc.val();


    alert("SE BORRARAN LOS DATOS CON EL DOCUMENTO" +d+ "Por Favor Refresque la pagina");
    $.ajax({
        type:"POST",
        url:'/eliminar',
        data:{
            dd:d
        }
    });

    });
});