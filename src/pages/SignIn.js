import React, { useState } from 'react'
// import './component/SignIn.css';

export const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <h1 align="center"><b><br />Please Sign-In<br /></b></h1>
            <form onSubmit={handleSubmit}>
                <table align="center">
                    <tr>
                        <td align="right"><label htmlFor="email"><b>Email: </b></label></td>
                        <td><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /></td>
                    </tr>
                    <tr>
                        <td align="right"><label htmlFor="password"><b>Password: </b></label></td>
                        <td><input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****************" id="password" name="password" /></td>
                    </tr>
                    <tr align="center">
                        <td align="center" colSpan="2">
                            <button type="submit">Sign-in</button>
                        </td>
                        <td></td>
                    </tr>
                </table>
            </form>
            <h1 align="center">
                <button onClick={() => props.onFormSwitch('createaccount')}>Not a Member yet? Create an Account here.</button>
            </h1>
        </>
    )
}