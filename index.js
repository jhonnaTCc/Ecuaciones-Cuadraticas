function operar(){
    let dato1=document.getElementById("dato1").value;
    let dato2=document.getElementById("dato2").value;
    let dato3=document.getElementById("dato3").value;

    const raiz1=document.getElementById('raiz1');
    const raiz2=document.getElementById('raiz2');


    if(dato1!=0){

        a=Math.pow(dato2,2);
        b=a-4*dato1*dato3;

        

        if(b<0){

            coe=Math.sqrt((Math.abs(b)))/(2*dato1)
            num=-dato2/(2*dato1);

            raiz1.textContent="x1 = "+num.toFixed(1)+" + "+coe.toFixed(1)+"i"; 
            raiz2.textContent="x2 = "+num.toFixed(1)+" - "+coe.toFixed(1)+"i"; 
        }else {
            x1=(-dato2+(Math.sqrt(b)))/(2*dato1);
            x2=(-dato2-(Math.sqrt(b)))/(2*dato1);

            raiz1.textContent="x1 = "+x1.toFixed(2);
            raiz2.textContent="x2 = "+x2.toFixed(2);}

    }else if(dato1==0 && dato2!=0){
        x1=(-dato3)/dato2;

        raiz1.textContent="x1 = "+x1.toFixed(2);
        raiz2.textContent="x1 = "+x1.toFixed(2);

    }else if(dato1==0 && dato2==0){
        x1='indeterminado'

        raiz1.textContent=x1
        raiz2.textContent=x1
    }
}

function limpiar(){
    
    document.getElementById('datos').reset();
    raiz1.textContent="x1"
    raiz2.textContent="x2"
}