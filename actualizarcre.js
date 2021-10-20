$(document).ready(function(){
    
    $('.btnact').on('click',function(){
        let btn=$('.btnact').index(this);
        let cod=$('.cod').eq(btn);
        let id=$('.id').eq(btn);
        let lin=$('.lin').eq(btn);
        let mon=$('.mon').eq(btn);
        let fec=$('.fec').eq(btn);
        let pla=$('.pla').eq(btn);
        
      

        let d=cod.val();
        let u=id.val();
        let c=lin.val();
        let r=mon.val();
        let e=fec.val();
        let i=pla.val();

        alert("Datos recibidos");

        $.ajax({
            type:"POST",
            url:'/actualizarcre',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e,ii:i
            }
            
        })
        
    })
})