import {useState} from "react";

export function LoginPage() {
    const [username, setUsername] = useState()

    console.log(username)

    return (
        <div>
            <h1>
                HELLO FROM LOGIN PAGE
            </h1>
            <input name={'username'} value={username} onChange={event => setUsername(event.target.value)}/>
<button onClick={() => alert(`Hello ${username}!`)}>Submit</button>
        </div>
    )

}

