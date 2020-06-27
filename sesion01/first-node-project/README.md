### First node project

Para iniciar, ejecutar el siguiente comando en la terminal
```
$ npm start
```
`NOTA` hay que estar en la raiz del proyecto, es decir, donde se ve el archivo `package.json` y la carpeta `src`

para probar el proyecto, en una terminal aparte, ejecutar
```
$ curl http://127.0.0.1:3000/
```
la petición más simple que se puede hacer
```
$ curl -v http://127.0.0.1:3000/
```
llamada verbosa para conocer lo que se envía y lo que se recibe
```
curl -v -X OPTIONS http://127.0.0.1:3000/
```
llamada verbosa con método OPTIONS