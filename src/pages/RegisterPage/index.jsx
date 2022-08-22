import {useState} from "react";
import './index.css'
import {Link} from "react-router-dom";

/**
 * fetch()
 * POST /user
 * {
 *     "username": "",
 *     "password": "",
 *     "nameSurname": ""
 * }
 * header -> "content-type" : "application/json"
 */

export function RegisterPage() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [passwordType, setPasswordType] = useState('password')

    function callRegisterAPI(){
        fetch('http://localhost:1234/user', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
                nameSurname: name + surname,
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => {
                // todo yaaap bi seyler
                if(res.ok) {
                    console.log('Registration completed.')
                }
                else {
                    console.log('Registration failed.')
                }
            })
            .catch(() => {
                // todo yaaaap
                console.log('Registration failed.')
            })

    }

    function showHidePassword() {
        setPasswordType(passwordType === 'password' ? 'text' : 'password')
    }

    function passwordMatch(e) {
        e.preventDefault()
        if (password !== passwordConfirm) {
            alert(
                'Password do not match! Please retype.'
            )
        } else {
            callRegisterAPI()
        }
    }

    return (
        <form className={'registerContainer'} onSubmit={passwordMatch}>
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
                <input type={passwordType} className={'registerPasswordConfirm'} name={'passwordConfirm'}
                       value={passwordConfirm}
                       onChange={event => setPasswordConfirm(event.target.value)} placeholder={'Password Confirm'}/>
                <div className={'registerShowPassword'}>
                    <input className={'registerCheckbox'} type="checkbox" onClick={showHidePassword}/>
                    <p className={'registerP2'}>Show Password</p>
                </div>
                <div className={'registerSignUpDiv'}>
                    <button className={'registerSignUpButton'}
                            type='submit' >Sign in
                    </button>
                </div>
                <div className={'registerSignUpLink'}>
                    <p>
                        Already have an account? <Link to="/login">Sign In!</Link>
                    </p>
                </div>
            </div>

        </form>
    )
}
