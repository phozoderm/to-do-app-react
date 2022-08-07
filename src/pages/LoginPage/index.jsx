import {useState} from "react";

import './index.css'
import {Link} from "react-router-dom";

export function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')

    function showHidePassword() {
        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    return (
        <div className='loginPageContainer'>
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
                    <button className={'loginSubmit'} onClick={() => console.log(`Hello ${username} ${password}!`)}>Sign in
                    </button>
                </div>
                <div className={'loginSignUp'}>
                    <p className={'loginP2'}>Don't have an account?
                        <Link to="/register"> Register Here!</Link>
                    </p>
                </div>
            </div>
        </div>

    )

}

