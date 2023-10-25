const User = require('../models/user');

module.exports = {
  loginAmm: (req, res,next)=>{

    const nome = req.body.username;
    const password = req.body.password;

    console.log(nome)

    const search = async (nome, password)=>{
      const amministratore= await User.find({$and: [{username:nome}, {password:password}]});

      //console.log([utente])
      if(amministratore.length==0){
        console.log('Amministratore non trovato')
        

      }else{
        console.log('Accesso effettuato');
        return res.status(200).send('amministatore trovato')
        
      }
      
    }

    search(nome, password)
   
  },

  addAmministratore: (req,res, next)=>{
  
      console.log(req.body);
      const amministratore = new User({
        username: req.body.username,
        password:req.body.password
      });
  
      amministratore.save()
      .then(console.log('inserimento avvenuto correttamente'))

      next();

  }
  
}