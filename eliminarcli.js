$(document).ready(function(){

    $('.btnelits').on('click',function(){

    let btn=$('.btnelits').index(this);
    let doc=$('.doc').eq(btn);
   
    let t=doc.val();


    alert("SE BORRARAN LOS DATOS CON EL DOCUMENTO" +t+ "Por Favor Refresque la pagina");
    $.ajax({
        type:"POST",
        url:'/eliminarcli',
        data:{
            tt:t
        }
    });

    });
});