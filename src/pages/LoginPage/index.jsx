import {useState} from "react";

import './index.css'
import {Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * fetch()
 * POST /session
 * {
 *     "username": "",
 *     "password": ""
 * }
 * header -> "content-type" : "application/json"
 */

export function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    let navigate = useNavigate()

    function showHidePassword() {
        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    function callLoginAPI() {
        fetch('http://localhost:1234/session', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
            .then((res) => {
                if (res.ok) {
                    navigate('/to-do-list', {replace:true})
                } else {
                    toast('Username or password is not correct.')
                }
            })
            .catch(() => {
                toast('Something went wrong, please try again later.')
            })
    }

    function consLog(e) {
        e.preventDefault()
        if (username.length === 0 || password.length === 0) {
            toast('Username or password cannot be empty.')
        }
        else {
            callLoginAPI()
        }
    }

    return (
        <form className='loginPageContainer' onSubmit={consLog}>
            <div className={'loginInput'}>
                <h1 className={'login'}>
                    LOGIN
                </h1>
                <input className={'loginUsername'} name={'username'} value={username}
                       onChange={event => setUsername(event.target.value)} placeholder={'Username'}/>
                <input type={passwordType} className={'loginPassword'} name={'password'} value={password}
                       onChange={event => setPassword(event.target.value)} placeholder={'Password'}/>
                <div className={'loginShowPassword'}>
                    <input className={'loginCheckbox'} type="checkbox" onClick={showHidePassword}/>
                    <p className={'loginP'}>Show Password</p>
                </div>
                <div className={'loginSubmitDiv'}>
                    <button type='submit' className={'loginSubmit'}>Sign in
                    </button>
                </div>
                <div className={'loginSignUp'}>
                    <p className={'loginP2'}>Don't have an account?
                        <Link to="/register"> Register Here!</Link>
                    </p>
                </div>
            </div>
        </form>

    )

}

