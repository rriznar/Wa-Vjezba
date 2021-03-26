
// zadatak 1

const moment = require('moment');
let p = ["Sunčano" ,"Oblačno" , "Kišovito"]


let home = (req, res) => res.send('Posjeti adrese /datum i /prognoza')

let datum = (req, res) => {
    let datum_t = moment().format('DD MM YYYY, HH:MM');
    
    res.send(`Trenutni datum: ${datum_t}`)
}

let prognoza = (req, res) => {
    let vrijeme = p[Math.floor(Math.random() * p.length)];    
    
    res.send(`Danas će biti: ${vrijeme}`)
}

// Zadatak 2

// Zadatak 3

// zadatak 4

export default { home, datum, prognoza }