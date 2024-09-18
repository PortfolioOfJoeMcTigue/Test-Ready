import React, { useState } from 'react';
import { CreateAccount } from './CreateAccount';
import { SignIn } from './SignIn';
import './Home.css';

export const Home = () => {

    const [currentForm, setCurrentForm] = useState('signin');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return ( 
        <div>
            <h1 style={{fontSize: "5rem"}} align="center">Welcome<br />to<br />'Get Ready, Cert'</h1>
            {
                currentForm === "signin" ? <SignIn onFormSwitch={toggleForm} /> : <CreateAccount onFormSwitch={toggleForm} />
            }
        </div>
    )
};