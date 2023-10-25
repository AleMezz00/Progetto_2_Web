import { useState } from 'react';
import service from '../services/service';
import Admin from './admin';
import './login.css'

function Login(){

    const [accedi, setAccedi] = useState(true)
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const handleSubmit = (e)=>{
        try{
            e.preventDefault()
            const requestBody = { 
                username: username,
                password: password
            } 
            console.log(requestBody)
        
            //const passa = [{username, password}]
            //console.log(passa)
            console.log(accedi)
            service.getLogin(requestBody).then(console.log('login avvenuto'))
            setAccedi(false)
        
        }catch(err){
            console.log('login non avvenuto')
        }
     
    }

    if(accedi){

    return(
        <>
        <div className='Login'>
            <nav>
                <h1 className= "scritta_effettua_accesso">Effettua l'accesso!</h1>
                 <ul>
                <li><a href='/'>Torna alla pagina principale</a></li>
                 </ul>
            </nav>

                <div className= "Sfondo">

                    <div className= "Container_principale">
                        <div className="form">
                            <form onSubmit={e=>{handleSubmit(e)}}>

                                <div className='form-group'>
                                    <label htmlFor='username'> Username: </label>
                                    <input type='text' required value={username} onChange={(e)=>setUsername(e.target.value)}
                                    name="username"  placeholder='username'/>
                                </div>

                                <div className='form-group-password'>
                                    <label htmlFor='password'> Password: </label>
                                    <input type='password' required value={password} onChange={(e)=>setPassword(e.target.value)}
                                    name='password' placeholder='password' />
                                </div>

                                <button type='submit' className='btn'>Accedi</button> 
                        
                            </form>

                        </div>

                    </div>
            
                </div>

        </div>

            <footer> Copyright 2022 by @Alessandro Mezzina / @Giovanna Camporeale </footer>
        </>
    );

    }
    else{
        return(
            <Admin/>
        )
    }
}

export default Login;