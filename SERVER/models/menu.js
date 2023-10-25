const mongoose= require('mongoose');

const menuSchema=  new mongoose.Schema({

    id:{
        type: Number,
        unique:true,
        maxlength:4,
        required: true
    },

    nome:{
        type: String,
        unique:true,
        required: true
    },
    prezzo:{
        type: Number,
        required: true
    },
    descrizione:{
        type: String,
        maxlength:150,
        required: true
    }
    },
    {collection: 'menu' }
);

module.exports = mongoose.model('Menu', menuSchema);
