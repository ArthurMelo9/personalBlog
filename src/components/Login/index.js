import React from 'react';
import './style.css';

/**
* @author
* @function Login
**/

const Login = (props) => {
    return (
        <div className="logInBox">

            <form>
                <span>Login</span>
                <br />
                <br />
                <label><input type="text" placeholder="Username" />Username</label>
                <br />
                <br />
                <label><input type="password" placeholder="Password" /> Password</label>
                <br />
                <br />
                <span>Forgot password? <a href="#">Sign up</a></span>
            </form>


        </div>
    );

}

export default Login;