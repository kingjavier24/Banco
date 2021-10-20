$(document).ready(function(){
   
    $('.btnact').on('click',function(){
        let btn=$('.btnact').index(this);
        let Codigo=$('.Codigo').eq(btn);
        let nomli=$('.nomli').eq(btn);
        let montmax=$('.montmax').eq(btn);
        let plaz=$('.plaz').eq(btn);
      
        
      

        let d=Codigo.val();
        let u=nomli.val();
        let c=montmax.val();
        let r=plaz.val();

        alert("Datos recibidos");

        $.ajax({
            type:"POST",
            url:'/actualizarlin',
            data:{
                dd:d,uu:u,cc:c,rr:r
            }
            
        })
        
    })
})