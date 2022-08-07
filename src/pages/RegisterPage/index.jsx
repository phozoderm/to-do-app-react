import {useState} from "react";
import './index.css'
import {Link} from "react-router-dom";


export function RegisterPage() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [passwordConfirm, setPasswordConfirm] = useState('password')

    function showHidePassword() {
        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    return (
        <div className={'registerContainer'}>
            <div className={'registerInput'}>
                <h1 className={'registerSignUp'}>SIGN UP</h1>
                <input className={'registerName'} name={'name'} value={name}
                       onChange={event => setName(event.target.value)}
                       placeholder={'Name'}/>
                <input className={'registerSurname'} name={'surname'} value={surname}
                       onChange={event => setSurname(event.target.value)} placeholder={'Surname'}/>
                <input className={'registerUsername'} name={'username'} value={username}
                       onChange={event => setUsername(event.target.value)} placeholder={'Username'}/>
                <input type={passwordType} className={'registerPassword'} name={'password'} value={password}
                       onChange={event => setPassword(event.target.value)} placeholder={'Password'}/>
                <input type={passwordType} className={'registerPasswordConfirm'} name={'passwordConfirm'} value={passwordConfirm}
                       onChange={event => setPasswordConfirm(event.target.value)} placeholder={'Password Confirm'}/>
                <div className={'registerShowPassword'}>
                    <input className={'registerCheckbox'} type="checkbox" onClick={showHidePassword}/>
                    <p className={'registerP2'}>Show Password</p>
                </div>
                <div className={'registerSignUpDiv'}>
                    <button className={'registerSignUpButton'}
                            onClick={() => console.log(`Hello ${username} ${password}!`)}>Sign in
                    </button>
                </div>
                <div className={'registerSignUpLink'}>
                    <p>
                     Already have an account? <Link to="/login">Sign In!</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
