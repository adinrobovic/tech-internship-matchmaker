import React, { useState } from 'react';

function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input type = "email" name="email" value={inputs.email || ''} onChange={handleChange} />
            </label>
            <label>Password:
                <input type = "password" name="password" value={inputs.password || ''} onChange={handleChange} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;