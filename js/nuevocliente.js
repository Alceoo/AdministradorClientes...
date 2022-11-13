const formulario = document.querySelector('#formulario');

//Ahora toca seleccionar cada uno de los elementos o campos por validar

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
 const telefonoInput = document.querySelector('#telefono');
 const empresaInput = document.querySelector('#empresa');

 let arregloClientes = [];

//EVENTOS
eventos();
function eventos(){
    formulario.addEventListener('submit', validandoFormulario);
    nombreInput.addEventListener('change',leerdatosCliente);
    emailInput.addEventListener('change',leerdatosCliente);
    telefonoInput.addEventListener('change',leerdatosCliente);
    empresaInput.addEventListener('change',leerdatosCliente);
}
/*Este evento change nos detecta la acción de cambiar de input,
nos conviene porque aquí se tienen que llenar todos los inputs, así que ajam..

Pero esa información de cada input, la tenemos que registrar en algún lugar...
y al tener que agruparla como un objeto completo de Cliente, entonces tenemos 
que agrupar su información en un objeto...
este objeto se llamará, datosCliente

Este datos cliente va a guardar la información de cada campo, al hacer el 
evento de cambiar de uno a otro

*/

const datosCliente = {
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
}
/*
class UI {
    constructor(){};
    imprimirAlerta(){
        console.log('impriendo alerta, paso o no pasos');
        //Acá tendría que iterar y toda la demás webada de construir componentes...
    }


}*/
//const ui = new UI();Responder45 min
 


function leerdatosCliente(e){
/*acceder a los datos del cliente...(leer)
Para leer los datos del cliente podemos hacer el clásico, e.target.type === email,
e.target.type === telefono etc.

Ahora, lo que queremos es agrupar ea información, no sólo leerla y validarla, por lo que
lo mejor que podemos hacer es igualar el valor de los campos del objeto datosCLiente
con el e.target.value, de esta manera se llenan todos los campos a la vez en nuestro objeto
y cada que mandemos el agregarCliente me va a mandar otro nuevo objeto y así
de manera dinámica...
o sea que los objetos se van llenando sólos y mandando sólos a la consola de igual manera

esta es una buena manera de leer datos la vdd, pero para que esto funcione deben de
estar definidos los name.*/
    datosCliente[e.target.name] = e.target.value;
    console.log(datosCliente);
}

function validandoFormulario(e){
    e.preventDefault();
    console.log('validando formulario');
/*Para validar el formulario, primero necesito los datos que voy a validar

Para esto lo que haré será destructuring, el destructuring servía amm
extrayendo lo que queríamos de un objeto básicamente y lo igualamos a
una variable, esta variable en mi caso sería el mismo datosCliente, es como
decirle...
EXTRAE ESTOS DATOS DE ESTE OBJETO...
*/

    const {nombre, email, telefono, empresa} = datosCliente;

    if(nombre === '' || email === '' || telefono === '' || empresa === ''){
        console.log('Llena bien todos los campos por favor wey');
        imprimirAlerta();
    }else{//Si no están vacíos, significa que están llenos ajjaj agregando 
        /*console.log(`agregando cliente: ${nombre}`);
    Después de la validación lo que quisiera hacer sería amm mandar una alerta
    La alerta quiero que cmabie un poco la vdd*/

    /*Si, pero antes tendríamos que agrupar esa información, esos, datos cliente en 
    un arreglo, esto para poder iterar sobre el y poder hacer algo con su información..
    Que sería, crear o imprimir el html que es la siguiente funcionalidad...*/
        arregloClientes = [...arregloClientes, datosCliente]
        console.log(arregloClientes);
        //mandar llamar la función que imprime el html de cada parte
        imprimirHTML();


    }

}
/*Antes de eso, tengo que mandar toda la info o más bien, reunirla en un arreglo, 
yo supongo, la vdd no sé*/


function imprimirHTML(){
    /*voy a hacer lo mejor que pueda, voy a iterar sobre el arreglo, voy a
    exytaer esos datos con la sintaxis de punto y lo voy a crear abajo del 
    formulario básicamnete jajaj
    Ya que por lo mientras no puedo hacerlo de la otra manera, que sería
    mandar amm la información de este documento js, al html de mi otro archivo
    aún seleccionándolo, este PROBLEMA QUIZÁS LO RESUELVA DESPUÉS ...*/

    
    arregloClientes.forEach(product => {
        const div = document.createElement('div');
        

        const containerNombre = document.createElement('p');
        containerNombre.innerHTML = `${product.nombre}`;
        const containerEmail = document.createElement('p');
        containerEmail.innerHTML = `${product.email}`;
        const containerTelefono = document.createElement('p');
        containerTelefono.innerHTML = `${product.telefono}`;
        const containerEmpresa = document.createElement('p');
        containerEmpresa.innerHTML = `${product.empresa}`;

        div.append(containerNombre, containerEmail, containerTelefono, containerEmpresa);
        //Lugar donde ponerlos(abajo del formulario jeje)
        formulario.append(div);
    });
    

}

function imprimirAlerta(){

}

/**/

