
/*En primera, vamos a crear la base de datos para los clientes....*/
(function (){

    let DB; 

    document.addEventListener('DOMContentLoaded', () => {
        creaDB();
    });
    //Lo primero es crear la base de datos, ponerle un nombre y una versión
    function creaDB(){
        const crearDB = window.indexedDB.open('crm', 1);
        //Nombre y versión de la base de datos
    
        crearDB.onerror = function(){
            console.log('hubo un error creando la base de datos');
        }//Si hubo un error al crear la base de datos
        crearDB.onsuccess = function(){
            console.log('base de datos creada correctamente');

            DB = crearDB.result; 
        }//Si la base de datos fue creada correctamente

        //Configurar la base de datos
        crearDB.onupgradeneeded = function(e){
        /*Ahora, tenemos que configurar la base de datos...
        Le pasamos un e.target.result que este va a ser el resultado de lo que se
        ejecute en esta función, que va a ser nuestra base de datos....
        */    
        const db = e.target.result; 

        const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true,});
        /*Primero se crea el objectStore, le damos el nombre con el que vamos a
        hacer referencia a nuestra db y le damos un bjeto con el keyPath(en este caso 
        como será un crud de eliminar, y editar pues vamos a necesitar EL ID)*/

        /*Una vez que creamos nuestro objectStore vamos a crear los diferentes campos
        O en otras palabras no serían los campos, sino que serían las columnas
        que vamos a llenar con los campos...

        ¿Cómo definir dichas columnas?
        Definiremos las columnas en base a la información que necesitemos guardar 
        y acumular, por ejemplo, aquí para crear un cliente necesitamos un 
        NOMBRE, CORREO, TELEFONO, EMPRESA, entonces ya tenemos nuestras columnas jajaj
        */

        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('empresa', 'empresa', {unique: false});
        objectStore.createIndex('id', 'id', {unique: true});
        console.log('Datos');

    }   
    }

})();


/*Después de esto vamos a crear los registros, para eso tenemos un apartado de 
crear registros. que es la validación del formulario básicamente, 
pero mi duda en este momento no es como pasar la validación ni eso, sino que mi
duda es, cómo mando la información de mis campos del formulario de un archivo 
a otro, o sea, no listarlos en la pantalla del mismo index, sino que 
llenarlos en la pantalla de otro index...*/








