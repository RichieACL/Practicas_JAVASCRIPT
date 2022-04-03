let dia,mes,año;

mes = prompt("Introduzca el numero del mes","0");
mes = parseInt(mes);

if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12)
{
    document.write("Este mes tiene 31 dias");
}
else
{
if(mes==2)
    document.write("Este mes tiene menos de 30 dias");
else
document.write("Este mes tiene 30 dias");
}