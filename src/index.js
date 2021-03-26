import express from 'express';
import routes from './routes';


const app = express()
const port = 3000

// Zadatak 1
app.get('/', routes.home)
app.get('/datum', routes.datum)
app.get('/prognoza', routes.prognoza)

// Zadatak 2

// Zadatak 3

// Zadatak 4

app.listen(port, ()=> console.log(`Slusam na portu ${port}!`))

