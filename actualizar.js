$(document).ready(function(){
    $('.btnact').on('click',function(){
        let btn=$('.btnact').index(this);
        let doc=$('.doc').eq(btn);
        let usu=$('.usu').eq(btn);
        let clave=$('.clave').eq(btn);
        let rol=$('.rol').eq(btn);
        let estad=$('.estad').eq(btn);
        let imgn=$('.imgn').eq(btn);


        let d=doc.val();
        let u=usu.val();
        let c=clave.val();
        let r=rol.val();
        let e=estad.val();
        let i=imgn.val();

        alert("Datos recibidos");

        $.ajax({
            type:"POST",
            url:'/actualizar',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e,ii:i
            }
        })
        
    })
})