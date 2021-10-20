$(document).ready(function(){
    
    $('.btneliv').on('click',function(){

    let btn=$('.btneliv').index(this);
    let cod=$('.cod').eq(btn);
   
    let t=cod.val();


    alert("SE BORRARAN LOS DATOS CON EL DOCUMENTO" +t+ "Por Favor Refresque la pagina");
    $.ajax({
        type:"POST",
        url:'/eliminarcre',
        data:{
            tt:t
        }
    });

    });
});