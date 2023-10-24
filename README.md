Documentación de la API:
Parcial 4 de desarrollo aplicativos

Profesores a cargo de la materia:
Maximiliano carubin
Andres cortez
Alumno a asignado al proyecto: Exequiel Ridolfi

A continuación, presento los pasos para poder usar la API.

El primer paso sería levantar nuestra API. Para hacerlo, vamos a la terminal del VS y presionamos la combinación (Ctrl+ñ). Este comando abrirá la terminal. Dentro de la terminal, introduciremos el siguiente comando: `npm run dev`. Apretamos Enter y esperamos a que se levante nuestra API.

El siguiente paso es ir a Postman y buscar nuestra API. En este caso, nuestra API se llama "database-parcial-cuatro". Dentro de nuestra API, hay tres carpetas con "auth", "user" y "product".

Lo primero que haremos es crear un usuario nuevo. Para eso, vamos dentro de la carpeta "auth". Una vez dentro, buscamos "signup" y completamos con el nombre, email, contraseña, rol y la URL de la imagen. Para crear el usuario, hay limitaciones, por ejemplo, la contraseña debe tener al menos 6 caracteres, y el rol debe ser "usuario" o "admin".

Después de crear el usuario, vamos al login y nos logeamos con el usuario y contraseña que creamos. Luego nos retornará el token. Copiamos ese token y lo pegamos en la autorización de nuestro usuario y nuestro producto.
Creación del producto
Después de eso, podemos administrar los usuarios o crear un producto. En este caso, lo primero que haremos es crear un producto. Para eso, vamos a la opción "create" del producto y rellenamos los campos con los datos que nosotros queramos, siempre respetando las limitaciones. Luego de respetar eso, vamos a la barra superior e apretamos "send".

Se debería ver así al crear nuestro producto:
{
    "nombre":"tambor",
    "descripcion":"este es un tambor importado desde alemania",
    "precio":"900",
    "imagenUrl":"https://tamboresAlemanes.com.gr"
}

Después de crearlo, vamos al "index" para poder mostrar nuestro producto creado. Vamos a la barra superior y Apretamos "send" y se mostrará nuestro producto creado:
[
    {
        "_id": "65349d2e9d50068a7133b585",
        "nombre": "tambor",
        "descripcion": "este es un tambor importado desde alemania",
        "precio": 900,
        "imagenUrl": "https://tamboresalemanes.com.gr",
        "createdAt": "2023-10-22T03:55:26.024Z",
        "updatedAt": "2023-10-22T03:55:26.024Z",
        "__v": 0
    }
]

Si no nos equivocamos en algo, podremos borrarlo en la opción "delete". Para eso, copiamos el ID de nuestro producto y lo introducimos barra superior nos tiene que quedar algo asi 
---------------------------------------
[delete ∨]localhost:3000/users/aquí pegamos nuestro id ◤send ∨◥

Apretamos "send" y nos mostrará esto:
{
    "_id": "65369a2607354ac66c6199df",
    "nombre": "auto",
    "descripcion": "prueba",
    "precio": 1500,
    "imagenUrl": "https://telegonod.com.grqweqweqweqweqw",
    "createdAt": "2023-10-23T16:07:02.351Z",
    "updatedAt": "2023-10-23T16:07:02.351Z",
    "__v": 0
}

Esto quiere decir que fue eliminado exitosamente. Para corroborar que se eliminó, vamos al "index" y presionamos "send". Si ya no nos sale los dateos que queríamos borrar, eso quiere decir que se borró exitosamente.

La opción "show" solo muestra el producto mediante un ID específico. Para usarlo, solo usamos la ID del producto que queremos buscar y le damos a "send"
[get ∨]localhost:3000/users/aquí pegamos nuestro id ◤send ∨◥

. Así se vería el producto correspondiente a esa ID.
{
    "_id": "65369a2607354ac66c6199df",
    "nombre": "auto",
    "descripcion": "prueba",
    "precio": 1500,
    "imagenUrl": "https://telegonod.com.grqweqweqweqweqw",
    "createdAt": "2023-10-23T16:07:02.351Z",
    "updatedAt": "2023-10-23T16:07:02.351Z",
    "__v": 0
}


Después vamos a administrar nuestro usuario
 Podemos crear otro usuario. Para hacerlo, hacemos lo mismo que antes, llenamos los campos con los datos a usar y luego le damos "send". Importante: acordarse del token y del rol.

Una vez creado, podremos mostrarlo mediante el "index" o "show". Para hacerlo, debemos copiar la ID del usuario a ver en el "show" y darle a "send".

En el caso del "index", solo le damos a "send". Para eliminarlo, debemos usar la ID del usuario a eliminar, pegarlo y darle a "send".
