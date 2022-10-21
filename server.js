import express from "express";
import cookieParser from "cookie-parser";
 

const port = 5000
const app = express()

/*@
@ Middlewares
@*/ 
// Leer las cookies del naveagdor
app.use(cookieParser());

// parseo y lectura del body
app.use(express.json());

/*@
@ Fin Middlewares
@*/  


/*@
@ Mis rutas
@*/ 
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        msg: "Servidor levantado !!"
    })
})


app.get('/set-cookie', (req, res) => {


    //! Puede ser extraida desde el navegador
    res.cookie("My-Cookie-Name", "Xansiety")


    res.cookie("My-Secure-Cookie", "Xansiety Secure",{
        maxAge: 60000, //Tiempo en milisegundos en que vence esta cookie -> desparece por si sola transcurrido el valor
        // expires: new Date("2022-10-21") ,// Establece un tiempo de expiracion en formato de fecha JS
        httpOnly: true, //Para proteger quien puede acceder a esta cookie desde el navegador
        secure: true, // Solo podemos leer esta cookie si se observa desde un HTTPS es importante para prod
        sameSite: 'lax' // Es necesaria para poder manipular los dominios si tenemos en backend en cualquier otro dominio
        // Mismo dominio :  sameSite: 'strict'
        // Comunicandonos con otro dominio: sameSite: 'lax'
    })


    res.status(200).json({
        ok: true,
        msg: "Revisa tu navegador en devtools -> aplicación ->  Cookies"
    })
})




app.get('/read-cookies', (req, res) => {

    console.log(req.cookies)
    res.status(200).json({
        ok: true,
        msg: "Leyendo cookies, revisa tu consola ⚡donde ejecutas NODE.JS"
    })
})


// Escuchar el servidor
app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}` );
})