//PRIMEROS PASOS PARA AGREGAR NUEVOS CLIENTES...

/*Listado:

1.Conectamos la base de datos que creamos en el otro archivo aquí, de esta
manera podemos validar los campos de este archivo y conectarlos a la DB de 
el otro archivo...
2.Validamos el formulario seleccionándolos desde una función local y no de un 
elemento global como siempre lo hemos hecho, que ha sido igualando cada valor a un 
objeto, después igualar esos e del objeto con el e.name etc...
3.Mandamos alertas por si algo no ocurre de la manera esperada, pero todo esto desde
la misma función...



*/

/*Comenzemos con la funcionalidad de nuevo cliente*/

(function(){
    /*Se crea otro let DB dentro del ifi, de esta forma no se van a mezclar, 
    sino que va a ser propio cada uno del archivo donde se encuentren. */
    let DB; 

    const formulario = document.querySelector('#formulario');
   
    
    /*Después me conecto a la base de datos del otro archivo
    es un, AL INICIAR EL DOCUMENTO ME VOY A CONECTAR A LA BASE DE DATOS*/
    document.addEventListener('DOMContentLoaded', () => { 
        conectarBaseDatos();
    
        formulario.addEventListener('submit', validarCliente);
    });
    

    function conectarBaseDatos(){
    /*Digamos que si la base de datos no existe, indexDB la va a crear y si existe la va
    a conectar*/
        const conectDB = window.indexedDB.open('crm', 1);

        //De nueva cuenta, si hay un error, si la base de datos no existe.
        conectDB.onerror = function(){
            console.log('La base de datos no existe');
        }
        conectDB.onsuccess = function(){
            //Base de datos creada o llamada
            console.log('Base de datos creada o mandada a llamar');
            DB = conectDB.result;  
        }
    }

    function validarCliente(e){
        e.preventDefault();
    /*Aquí pondremos variables locales de los inputs, anteriormente las teníamos de
    manera global, pero como solamente se utilizan en esta función pues llos vamos a tener
    más locales, desde aquí también vamos a leer todos los inputs*/

    //LEER TODOS LOS INPUTS
    const nombre = document.querySelector('#nombre').value;/*Algo que se me haría interesante
    seria leerlos de la otra manera, con el target.name y todo ese rollo, creo que esta manera nos podría causar
    más problemas, no lo sé. considero que englobarlo en un objeto es una mejor manera...*/
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    if(nombre === '' || email === '' || telefono === '' || empresa === ''){
        console.log('llena los campos por favor');

        imprimirAlerta('todos los campos son obligatorios', 'error');
        return;//Siempre se me olvida, si en caso de que no pase esto, no quiero ejecutar lo siguiente... 
    } else {/*Aquí también puedo hacer la validación individual y por su type, si es distinto a numero tal.*/
        console.log('Agregando nuevo cliente');
        imprimirAlerta('Creando cliente...', 'correcto')

    };
    function imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');   
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
       
        if(tipo === 'error'){
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            divMensaje.textContent = mensaje;
            setTimeout(() => {
                divMensaje.remove();
            }, 2500);
        }else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            divMensaje.textContent = mensaje; 
            setTimeout(() => {
                divMensaje.remove();
            }, 2500);
        }
        formulario.appendChild(divMensaje);
    }

    }
})();









