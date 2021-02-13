

function ejercicio2(){
    var n1,n2,n3,resultado;
    n1=prompt("Primer numero")
    n2=prompt("segundonumero")
    n3=prompt("tercero numero")
    n1=n1*n1*n1;
    n2=n2*n2*n3;
    n3=n3*n3*n3;
    resultado=n1+n2+n3;
    alert("La suma de los cubos es "+resultado);
}
function ejercicio6(){
    
    var array = [25, 39, 11, 3, 87];
    function minMax(a, b) {
        return a - b;
    }
    alert(array.sort(minMax))
    console.log("array ordenado", array.sort(minMax));

    //ESTE ES OTRO CODIGO PERO SOLO ORDENA EL PRIMER DIGITO xd
    /*var salir = 'n'
    var numeros = []

    while (salir == 'n') {
    numero = prompt('ingresa un número')
    
    var i=numeros.sort();
    if (numero != null) {
        numeros.push(parseInt(numero))
        //numeros.sort();
    }
    var seguir = confirm('desea ingresar mas numeros')
    if (seguir == false) {
        salir = 'y'
    }
}
    console.log(numeros.sort())
    alert("los elementos del array ordenado son: "+(i))

    //alert("Los elementos del array ordenados es:  "+numeros);
    //console.log(numeros)
    */
}
function ejercicio7(){
    let formatPhoneNumber = (str) => {
        var telefono = [9,8,9,6,6,4,7,0,3];
        telefono.getPhoneInternational(telefono);
        console.log(telefono)
        /*let cleaned = ('' + str).replace(/\D/g, '');
        
        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
        parsePhoneNumber('+12133734253')
        return null
        
console.log(formatPhoneNumber('9809142333'));
console.log(formatPhoneNumber('98091sss42333'));

        alert((formatPhoneNumber('9809142333')))
      };
      */
}
}