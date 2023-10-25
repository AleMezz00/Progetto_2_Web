const mongoose= require('mongoose');

const ordineSchema=  new mongoose.Schema({

    ordine:{
        type: Array,
        required: true
    },
    totale:{
        type:Number
    },
    data:{
        Type:Date
    }
},
   
    {collection: 'ordini' }
);

module.exports = mongoose.model('Ordini', ordineSchema);
