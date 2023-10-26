//Condicionales if, if else, switch

/*
let numero1 = 23;
let numero2 = 27;

if (condition) {

}


if (numero1>numero2) {
 console.log("El numero= "+numero1+ " es mayor que el numero " +numero2)
}else{
    console.log("El numero " +numero1+ " no es mayor que el numero " +numero2)
}
*/


//Pedir la edad de un usuario , decirle si es mayor de edad
/*
let edad = prompt("Dame tu edad")
if(edad>0){
    if(edad>=18)
    document.write("Eres mayor de edad")
    }else{
    document.write("Eres menor de edad")
    }
else{
    document.write("Edad no valida")
}
*/
let dia = prompt("Dame el dia de la semana") .toLowerCase();

switch (dia) {
    case "lunes":
        console.log("El dia que seleccionaste es lunes");
        break;
    case "martes":
        console.log("El dia que seleccionaste es martes");
        break;   
    case "miercoles":
        console.log("El dia que seleccionaste es miercoles");
        break;   
    case "jueves":
        console.log("El dia que seleccionaste es jueves");
        break;   
    case "viernes":
        console.log("El dia que seleccionaste es viernes");
        break;   
    case "sabado":
        console.log("El dia que seleccionaste es sabado");
        break;   
    case "domingo":
        console.log("El dia que seleccionaste es domingo");
        break;  
   
}
