import {useState} from "react";
import './index.css'

export function LoginPage() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    console.log(username)
    console.log(password)

    return (
        <div className={'loginInput'}>
            <h1 className={'login'}>
                LOGIN
            </h1>
            <input className={'username'} name={'username'} value={username}
                   onChange={event => setUsername(event.target.value)} placeholder={'Username'}/>
            <input className={'password'} name={'password'} value={password}
                   onChange={event => setPassword(event.target.value)} placeholder={'Password'}/>
            <button className={'submit'} onClick={() => console.log(`Hello ${username} ${password}!`)}>Submit</button>
        </div>
    )

}

