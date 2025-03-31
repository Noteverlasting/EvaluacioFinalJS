// localStorage.removeItem("biblioteca")

// MINI BIBLIOTECA

// const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
    { titulo: "Guerra y Paz", autor: "Lev Tolstoi", categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Anna Karenina", autor: "Lev Tolstoi", categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "L'Odisea", autor: "Homero", categoria: "drama", idioma: "català", epoca: "clásica" },
    { titulo: "Antologia de la poesia medieval catalana", autor: "Diversos", categoria: "poesia", idioma: "català", epoca: "clásica" },
    { titulo: "La Ilíada", autor: "Homero", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Poema del Mio Cid", autor: "Anónimo", categoria: "poesia", idioma: "español", epoca: "clásica" },
    { titulo: "Veinte mil leguas de viaje submarino", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "De la Terra a la Lluna", autor: "Jules Verne", categoria: "aventuras", idioma: "català", epoca: "s.XIX" },
    { titulo: "Cinco semanas en globo", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "Robinson Crusoe", autor: "Daniel Defoe", categoria: "aventuras", idioma: "català", epoca: "clásica" },
    { titulo: "Germinal", autor: 'Émile Zola', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Notre Dame de Paris", autor: 'Victor Hugo', categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "Los Miserables", autor: 'Victor Hugo', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Yo, robot", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Fundació", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Ciberiada", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Solaris", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "El hombre bicentenario", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Tokio Blues", autor: "Haruki Murakami", categoria: "drama", idioma: "español", epoca: "s.XX" },
    { titulo: "Romancero Gitano", autor: "Federico García Lorca", categoria: "poesia", idioma: "español", epoca: "s.XX" },
    { titulo: "Las aventuras de Sherlock Holmes", autor: 'Arthur Conan Doyle', categoria: "misterio", idioma: "español", epoca: "s.XIX" },
    { titulo: "Rebelió a la granja", autor: 'George Orwell', categoria: "drama", idioma: "català", epoca: "s.XX" },
    { titulo: "La Divina Comedia", autor: "Dante Alighieri", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Cròniques Marcianes", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
]
// MODIFICACION PARA EL CORRECTO FUNCIONAMIENTO DEL EJERCICIO 5.
// Ejecutamos la funcion actualizarLibros para que si hay algun cambio se muestre correctamente en el select del ejercicio 5 al iniciar la carga.
actualizarLibros()



// ==========================================================================================================
// EJERCICIO 1
// Libros disponibleS
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Llista del llibres
// const listaLibros = document.getElementById("listaLibros");

//Para este ejercicio, es preferible que en lugar de un addEventListener, se cree una funcion con un parametro (en este caso id), para poder reutilizarla en los siguientes ejercicios independentemente del id que sea.
function mostrarLibros(id) {
    // Ordenamos primero los libros segun su titulo alfabéticamente y en idioma español, incluyendo numeros si es necesario.
    biblioteca.sort((a, b) => {
        return a.titulo.localeCompare(b.titulo, "es-ES", { numeric: true });
    });

    // Creamos la constante listaLibros para obtener el contenido del id seleccionado en el parámetro de la función
    const listaLibros = document.getElementById(id);
    // Creamos una variable para ir almacenando el texto que se mostrará en la lista, primero, y como es una parte fija, definimos la etiqueta de lista ordenada
    let htmlText = "<ol>"

    // Recorremos el array biblioteca con el bucle forEach, procesando cada objeto como "libro"
    biblioteca.forEach((libro) => { 
        // Creamos el texto que se mostrará en la lista y lo añadimos.
        htmlText += `<li><span>${libro.titulo}</span>, autor: <span>${libro.autor}</span>, categoria <span>${libro.categoria}</span>, en idioma ${libro.idioma} y su época es ${libro.epoca}</li>`;
        });
    
    //Cerramos la linea de texto añadiendo etiqueta de cierre de lista ordenada
    htmlText += "</ol>"
    // Indicamos que el texto creado se muestre en el inner de listaLibros (que es el valor del id seleccionado)
    listaLibros.innerHTML = htmlText; 
}

//Llamamos a la funcion con el id #ejer1
mostrarLibros("ejer1")


// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css


// Creamos una constante que nos permite acceder al formulario
const formFiltrado = document.forms['form-filtrado']

// Creamos una constante que nos permita acceder al contenido del #ejer2, que es un <div> al cual añadiremos texto cambiando su html.
const ejer2 = document.getElementById("ejer2")

// Como tenemos definidio "todo" como el valor checked en el formulario, podemos empezar mostrando toda la lista de libros en el div ya que la selección es de todos los valores.
mostrarLibros("ejer2")

//Creamos un evento que se active cuando haya cambios en la seleccion del formulario
formFiltrado.addEventListener('change', () => {
    //Vaciamos el innerHTML para que cada vez que se ejecute el evento, no se acumulen los textos mostrados
    ejer2.innerHTML = ""

    //Definimos variables para almacenar los valores seleccionados en el formulario, necesitamos categoria, idioma y epoca
    let categoria = formFiltrado['categoria'].value
    let idioma = formFiltrado['idioma'].value
    let epoca = formFiltrado['epoca'].value

    //Comenzamos a definir el texto que irá en el div ejer2, empezando por la etiqueta de lista ordenada
    let htmlText2 = "<ol>"

    // Recorremos todos los "libro" del array biblioteca con las siguientes condiciones:
    // Si la categoria tiene el valor "todo" o (||) se corresponde con la clave 'categoria' del objeto, 
    // Y ADEMAS (&&) el idioma tiene el valor "todo" o (||) se corresponde con la clave 'idioma' 
    // Y ADEMAS (&&) la epoca tiene el valor "todo" o (||) se corresponde con la clave 'epoca';
    // Se añadira el texto a la variable htmlText2
    biblioteca.forEach((libro) => {
        if ((categoria == "todo" || libro.categoria == categoria) && (idioma == "todo" || libro.idioma == idioma) && (epoca == "todo" || libro.epoca == epoca) ) {
            htmlText2 += `<li><span>${libro.titulo}</span>, autor: <span>${libro.autor}</span>, categoria <span>${libro.categoria}</span>, en idioma ${libro.idioma} y su época es ${libro.epoca}</li>`; 
        }
    })

    //Cerramos la linea de texto con la etiqueta de cierre de lista ordenada
    htmlText2 += "</ol>"
    //Añadimos el texto htmlText2 al innerHTML de ejer2
    ejer2.innerHTML += htmlText2

})


// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX) 

// Creamos una constante que nos permite acceder al formulario
const formAutor = document.forms['form-autor']
// Creamos una constante que nos permita acceder al #ejercicio4 que es un <div>
const ejer3 = document.getElementById("ejer3")

// Definimos un evento que se accione al activar el submit del formulario, y con el parámetro e, para poder hacer un preventDefault y que no se recargue la página como viene predefinido al hacer submit.
formAutor.addEventListener('submit', (e) => {
    e.preventDefault()
    // Asignamos un string vacio al innerHTML de ejer3 para poder ir llenandolo
    ejer3.innerHTML = ""
    
    // Definimos la variable autor como el valor -en minusculas- del campo 'autor' del formulario.
    // Esto se hace para poder comparar correctamente los valores por la distinción entre mayúsculas y minúsculas. Después pasaremos el mismo dato, pero del objeto libros tambien a minúsculas.
    let autor = formAutor['autor'].value.toLowerCase()
    // Comenzamos a definir el texto que irá en el div ejer2, empezando por la etiqueta de lista ordenada
    let htmlText3 = "<ol>"
    // Definimos una variable que por defecto es true, para indicar que no hay resultados que coincidan con la busqueda
    let noHayResultados = true
    
    // Recorremos con un bucle forEach el array biblioteca
    biblioteca.forEach((libro) => {
        // Definimos la variable nombreAutor como el valor de la clave autor de cada libro pasada a minusculas, para poder comparar correctamente los dos strings.
        let nombreAutor = libro['autor'].toLowerCase()
        // Declaramos un bucle if con la condición de que si la variable autor (valor del campo autor del formulario) está incluida en la variable nombreAutor (valor de la clave autor de cada objeto del array)
        if (nombreAutor.includes(autor)){
            //1 - noHayResultados sea false
            noHayResultados = false
            //2- la variable htmlText3 añada el siguiente texto a su valor
            htmlText3 += `<li>${libro.autor}: ${libro.titulo} (${libro.categoria}, idioma: ${libro.idioma}, época: ${libro.epoca})</li>`
        }

    })
    
    //Cerramos la linea de texto con la etiqueta de cierre de lista ordenada
    htmlText3 += "</ol>"
    //Añadimos al valor del innerHTML de ejer3 la variable htmlText3
    ejer3.innerHTML += htmlText3

    // Definimos un bucle if por si se cumple noHayResultados, se muestre un nuevo texto en el innerHTML de ejer3
    if (noHayResultados) {
        ejer3.innerHTML = "No hay resultados coindicentes, por favor comprueba el texto y vuelve a intentarlo"
      }
})

// ==========================================================================================================
// EJERCICIO 4
// Añadir obra a la biblioteca
// A partir del formulario, añadir obras a la biblioteca
// Conseguir permanencia con LocalStorage
// Actualizar automáticamente el listado de obras del ejercicio 1

// Declaramos una constante para acceder al formulario
const incluirObra = document.forms['incluirObra']

// Declaramos un eventListener que se active al hacer submit, y que tenga el parámetro (e) para indicarle con preventDefault que no haga la recarga de página (accion predefinina)
incluirObra.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Obtenemos los valores ingresados en el formulario y los asignamos a variables
    let autor = incluirObra['incluir-autor'].value
    let titulo = incluirObra['incluir-titulo'].value
    let categoria = incluirObra['incluir-categoria'].value
    let idioma = incluirObra['incluir-idioma'].value
    let epoca = incluirObra['incluir-epoca'].value
    // Comprobamos que todos los datos se hayan recopilado correctamente
    console.log(autor, titulo, categoria, idioma, epoca)
    
    // Creamos un objeto llamado "valores" que contiene los datos recopilados del formulario, de manera abreviada, así que cada nueva clave (titulo, autor...) tiene el valor ingresado en su campo correspondiente
    let valores = { titulo, autor, categoria, idioma, epoca}
    // Hacemos push para añadir al final del array biblioteca el nuevo objeto valores
    biblioteca.push(valores)
    // Ejecutamos mostrarLibros (que actualizará la lista y la ordenará,aparte de mostrarla ) en el ejer1
     mostrarLibros("ejer1")
    // Guardamos el array `biblioteca` en el almacenamiento local del navegador (`localStorage`), convertido en un string JSON con `JSON.stringify` para que pueda ser almacenado.
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca))

    //MODIFICACION PARA EL EJERCICIO 5
    // Ejecutamos la funcion actualizarLibros para que si hay algun cambio se muestre correctamente en el select del ejercicio 5
    actualizarLibros()
})




// ==========================================================================================================
// EJERCICIO 5
// Quitar obras de la biblioteca. Crea en un formulario una etiqueta select con las obras de la biblioteca.
// Al seleccionar una obra y enviar el formulario, se eliminará la obra de la biblioteca.
// Actualizar automáticamente el listado de obras del ejercicio 1
// Actualizar el LocalStorage

// Declaramos una constante para acceder al formulario
const formQuitarObra = document.forms['formQuitarObra']

//En este caso debemos separar del evento formQuitarObra la funcion actualizarLibros para actualizar el valor del campo <select> cada vez que se añada o quite un objeto 'libro'.
function actualizarLibros() {
    // Almacenamos en la variable selectObra el contenido del elemento con id selectObra (en este caso un <select>)
    const selectObra = document.getElementById('selectObra');
    // Limpiamos el innerHTML de selectObra para evitar acumulaciones y repeticiones
    selectObra.innerHTML = "";
    
    // Recorremos el array biblioteca y por cada objeto añadimos al innerHTML de selectObra una linea con la <option> dandole el nombre del titulo de ese objeto tanto al campo value como al texto que mostrará <option>
    biblioteca.forEach((libro) => {
        selectObra.innerHTML += `<option value="${libro.titulo}">${libro.titulo}</option>`;
    });
}


 //Declaramos un eventListener que se active al hacer submit, y que tenga el parámetro (e) para indicarle con preventDefault que no haga la recarga de página (accion predefinina)
formQuitarObra.addEventListener('submit', (e) => {
    e.preventDefault();
    // Guardamos el valor del campo selectObra del formulario en la variable selectObra
    let selectObra = formQuitarObra['selectObra'].value;
    
    // Recorremos el array biblioteca en sus objetos e indices, ya que necesitaremos ambos parámetros
    biblioteca.forEach((libro, index) => {
        // Si el valor 'titulo' del objeto 'libro' del array biblioteca seleccionado se corresponde con el mismo valor que hay en el select selectObra:
        if (libro.titulo === selectObra) {
            //1- Eliminamos la obra del array usando splice(desde la posicion de su indice, una obra)
            biblioteca.splice(index, 1);
            //2- Salimos del forEach una vez ejecutado el código aplicando un return para que no siga iterando cuando se cumpla la condicion una vez.
            return;
        }
    });
    
    // Ejecutamos mostrarLibros (que actualizará la lista y la ordenará,aparte de mostrarla ) en el ejer1
    mostrarLibros("ejer1");
    // Guardamos el array `biblioteca` en el almacenamiento local del navegador (`localStorage`), convertido en un string JSON con `JSON.stringify` para que pueda ser almacenado.
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
    // Ejecutamos la funcion actualizarLibros para que si hay algun cambio se muestre correctamente en el <select>
    actualizarLibros(); 
});


