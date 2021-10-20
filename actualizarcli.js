$(document).ready(function(){
    $('.btnactcli').on('click',function(){
        let btn=$('.btnactcli').index(this);
        let doc=$('.doc').eq(btn);
        let usu=$('.usu').eq(btn);
        let ape=$('.ape').eq(btn);
        let corr=$('.corr').eq(btn);
        let celu=$('.celu').eq(btn);
        let sexo=$('.sexo').eq(btn);
        let FecNa=$('.FecNa').eq(btn);


        let d=doc.val();
        let u=usu.val();
        let c=ape.val();
        let r=corr.val();
        let e=celu.val();
        let i=sexo.val();
        let j=FecNa.val();

        alert("Datos recibidos");

        $.ajax({
            type:"POST",
            url:'/actualizarcli',
            data:{
                dd:d,uu:u,cc:c,rr:r,ee:e,ii:i,jj:j
            }
        })
        
    })
})