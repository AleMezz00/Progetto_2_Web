const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors')

const inserisciRouter = require('./routes/inserisciRouter')
const visualizzaRouter = require('./routes/visualizzaRouter')
const aggiornaRouter = require('./routes/aggiornaRouter')
const loginAmministrtoreRouter = require('./routes/loginRouter')
const registrazioneAmministratoreRouter = require('./routes/registrazioneRouter')
const eliminaRouter = require('./routes/eliminaRouter')
const ordineRouter = require('./routes/ordineRouter')

const app = express();


//connessione database
mongoose.connect('mongodb://localhost:27017/progettoWeb', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
const db = mongoose.connection

db.once('open',()=>{
    console.log('database connesso correttamente')
})

app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//middleware

//middleware
app.get('/', (req, res) => res.render("primaPagina"));

//inserire elemento
app.use('/inserisciElemento', inserisciRouter)
app.use('/visualizzaMenu', visualizzaRouter)

app.use('/aggiornaMenu', aggiornaRouter)
app.use('/loginAmministratore', loginAmministrtoreRouter)
app.use('/registrazioneAmministratore', registrazioneAmministratoreRouter)
app.use('/eliminaProdotto',eliminaRouter)
app.use('/ordine', ordineRouter )



//connessione al server
app.listen(9000, ()=>{
    console.log('Serer connesso alla porta 9000')
})