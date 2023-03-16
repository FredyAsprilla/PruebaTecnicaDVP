Parte 1 Clonar el repositorio.
El paso a paso para clonar y ejecutar el proyecto es el siguiente:
a) Debemos iniciar sesión en GitHub.com y GitHub Desktop.
b) En GitHub.com, navega a la página principal del repositorio (https://github.com/FredyAsprilla/PruebaTecnicaDVP). Encima de la lista de archivos, haga clic en <> Code. Esto desplegara un menu en el cual usted debera hacer click en "Abrir con Github Desktop".
c)Esta accion lo llevara a la aplicacion de escritorio de Github, donde le indicara que esta abriendo el repositorio; se da click en Clone, seleccionamos en el explorador de windows donde eseamos copiar este repositorio y listo, habremos clonado el repositorio.



Para ejecutar el proyecto debemos tener en cuenta lo siguiente:

a) Debemos tener instalado NodeJS.( de no poseerlo se debe descargar e instalar, con la siguiente url se puede descargar https://nodejs.org/es)
b) Debemos tener instalador Cypress.(Si no lo tenemos instalador mediente una terminal, puede ser CMD o en un editor de texto como Visual Studio Code mediante el comando npm install cypress, podremos instalarlo) pdt: se debe realizar la instalacion de cypress estando ubicados en la ruta/carpeta del proyecto.
c) Luego de instalado ejecutamos el comando en la terminal: npx cypress open.
Esto nos abrira el aplicativo de Cypress y seleccionamos la opcion E2E y alli podremos visualizar la carpeta con los archivos. (Debemos ubicarnos en la carpeta del proyecto).
Una vez hecho esto solo es ejecutar el test.
