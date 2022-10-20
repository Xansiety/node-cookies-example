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

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}` );
})