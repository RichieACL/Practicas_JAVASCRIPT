let dato1,dato2,num1,num2,resultado;

dato1 = window.prompt("Primer numero", "0");
num1 = parseInt(dato1);

dato2 = window.prompt("Segundo numero", "0");
num2 = parseInt(dato2);

if(num1 > num2)
{
    resultado = "El primero";
}
else
{
    resultado = "El segundo"; 
}
document.write(' <h3> El mayor es ');    
document.write( `${resultado}`);
document.write(' </h3>');