import React,{ useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";

function Login () {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
                <Link to='/'>
                    <img
                        className="login__logo"
                        src='img/logo.png' 
                    />
                </Link>

                <div className='login__container'>
                    <h1>Sign In/Register</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value) }/>

                        <h5>Password</h5>
                        <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>

                        <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
                    </form>

                    <p>
                         Dengan sign-in, otomatis anda telah menyetujui peraturan penggunaan dan transaksi di Bintan Travel ini. Silahkan lihat pemberitahuan privasi kami, iklan berdasarkan minat kami, dan pemberitahuan kuki kami.
                    </p>

                    <button onClick={register} className='login__registerButton'>Create your  Account</button>
            </div>
        </div>
    )
}

export default Login;