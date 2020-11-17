import express from 'express';

//inicializacion express desde una const llamada app, que sera l que tenga toda la funcionalidad que me aporta express
const app = express();

//setting configurando el servidor mediante los metdosdos que me da express
app.set('port', 3000);

//starting the server
app.listen(app.get('port'), () =>{
    console.log(`El servidor se ha levantado correctamente ${app.get('port')}`);
    console.log('cambio en tu proyecto');
    console.log('cambio 2 en tu proyecto');
    
});

