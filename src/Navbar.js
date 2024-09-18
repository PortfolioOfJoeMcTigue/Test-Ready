import { Link } from "react-router-dom";
//import './Navbar.css';
// import TestList from './component/TestList';
// import CreateAccount from './component/CreateAccount';
// import SignIn from './component/SignIn';
// import Home from './component/Home';
// import TestList from './component/TestList';
// import SuggestATest from './component/SuggestATest';
// import HallOfFame from './component/HallOfFame'

export const Navbar = () => {
    return (
        <div>
            <table className="Navbar" align="left">
                <tr align="center">
                    <td rowSpan="3">
                        <h1 align="center"><br />'Get Ready, Cert'</h1>
                    </td>
                </tr><tr></tr><tr></tr>
                <tr align="center">
                    <td rowSpan="4">
                        <h2 align="center">The place where you<br />can sharpen your<br />skills to pass your<br />next certification<br />test.</h2>
                    </td>
                </tr>
                <tr></tr><tr></tr><tr></tr>
                <tr>
                    <td>
                        <h2 align="center"><Link to="/" replace={true}>Home</Link></h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2 align="center"><Link to="/TestList" replace={true} >Tests We Cover</Link></h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2 align="center"><Link to="/SuggestaTest" replace={true}>Suggest a Test</Link></h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2 align="center"><Link to="/HallOfFame" replace={true} >Hall of Fame</Link></h2>
                    </td>
                </tr>
            </table>
        </div>
    );
};