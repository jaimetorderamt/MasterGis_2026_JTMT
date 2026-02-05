const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const DNI = prompt("Introduzca su DNI sin letra")
const resto = DNI % 23 
const letra = letras[resto]
const DNIString = new String(DNI)
const DNIletra = DNI + letra 

if (DNI<0 || DNI>99999999){
    alert ("El número proporcionado no es válido");

} else{
    alert ("La letra del DNI es: " +letra)
}