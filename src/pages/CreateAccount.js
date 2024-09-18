import React, { useState } from 'react'
// import './component/SignIn.css';

// https://www.youtube.com/watch?v=Y-XW9m8qOis

export const CreateAccount = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="create-account">
            <h1 align="center"><b><br />Create an Account<br /></b></h1>
            <form onSubmit={handleSubmit}>
                <table align="center">
                    <tr>
                        <td align="right">
                            <label htmlFor="name"><b>Full Name: </b></label>
                        </td>
                        <td>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" id="name" name="name" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="email"><b>Email Address: </b></label>
                        </td>
                        <td>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="password"><b>Create a Password: </b></label>
                        </td>
                        <td>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****************" id="password" name="password" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                            <button type="submit">Create Account</button>
                        </td>
                    </tr>
                </table>
            </form>
            <h1 align="center">
                <button onClick={() => props.onFormSwitch('signin')}>Already a Member? Sign-in here.</button>
            </h1>
        </div>
    )
}