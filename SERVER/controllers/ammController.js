const Menu = require('../models/menu');
const Ordine = require('../models/ordini')

module.exports={
    addElement: async(req, res, next)=>{
        const newElement = new Menu({
            id:req.body.id,
            nome: req.body.nome,
            prezzo: req.body.prezzo,
            descrizione: req.body.descrizione
        });

        newElement.save()
        next();

    },

    redirectView: function (req, res, next) {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    
    },

    getElement: async(req,res,next)=>{
        const menu = await Menu.find({})
            .catch(e => res.status(500).json({error: e}));

            res.json(menu)

            

    }, 

    updateElement:async (req,res,next)=>{
        const id= req.body.id
    
        console.log(id)
        Menu.updateOne({id:id}, {nome:req.body.nome, descrizione:req.body.descrizione, prezzo:req.body.prezzo})
        .then(() => res.json({message: 'aggiornamento effettuato'}))


    },

    deleteElement: async(req,res,next)=>{
        console.log(req.body.nome)


        
        Menu.deleteOne({nome:req.body.nome})
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));

    },

    getOrdine: async(req,res,next)=>{
        const ordine = await Ordine.find({})
            .catch(e => res.status(500).json({error: e}));

            res.json(ordine)

    },

    insertOrdine: async(req,res,next)=>{
        const newOrdine = new Ordine({
           ordine: req.body.ordine,
           totale: req.body.totale,
           date: new Date()
        });

        newOrdine.save()
        next();
    },



}

