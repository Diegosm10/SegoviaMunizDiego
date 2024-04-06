/* let es como var pero vive en una parte del codigo */
let frutas = ['Pera','Manzana', 'Frutilla', 'Naranja', 'Mandarina'];
/*for (i=0; i <= frutas.length; i++) {
    console.log(frutas[i])
}*/
/* forEach no utiliza indice i y devuelve una funcion 
frutas.forEach(fruta => {
    console.log(fruta);
});
console.log(array[1])*/

for (const fruta of frutas){
    if (fruta == 'Manzana')
    console.log(fruta);
}
/* === compara y compara el tipo de dato */
