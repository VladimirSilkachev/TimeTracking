import React, { useState } from 'react';
import PropTypes from 'prop-types';
const db_server = require('./db_server');
import  { Redirect } from 'react-router-dom'



async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmitLog = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        if (db_server.checkLogin(username, password) != 1): {
            //
            console.log("Пользователь не найден")
        }
        else {
            const [id, setId] = useState(db_server.getId(username, password));
            return <Profile id={id} />;
            <Redirect to='/profile'  />}
        setToken(token);
    }

    const handleSubmitReg = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });

        db_server.registration(username, password)
        setToken(token);
        const [id, setId] = useState(db_server.getId(username, password));
        return <Profile id={id} />;
        <Redirect to='/profile'  />;
        console.log(token)
    }
}

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmitLog}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>


        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmitReg}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
            </label>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};