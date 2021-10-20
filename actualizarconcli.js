$(document).ready(function(){
    $('.btnact').on('click',function(){
        let btn=$('.btnact').index(this);
        let doc=$('.doc').eq(btn);
        let usu=$('.usu').eq(btn);
        let clave=$('.clave').eq(btn);
        

        let d=doc.val();
        let u=usu.val();
        let c=clave.val();

        alert("Datos recibidos");
        alert(u)
        alert(d)
        alert(c)

        $.ajax({
            type:"POST",
            
            url:'/actualizarconcli',
            
            data:{
                dd:d,uu:u,cc:c
            }
        })
        
    })
})