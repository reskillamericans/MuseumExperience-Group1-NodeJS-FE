
import React from 'react'
import "./Login.css"

function Login() {
    return(

    <div className="image">
     <div className="formcontainer">
             <p className="b1"> Log In </p>
             <button className="b2">Register</button>
             <h5>Welcome Back</h5>
            <h1>Login to access your personal account.</h1>
               <form action="/actionpage.php" method="GET">
                     <label for="emailaddress">Email Address</label>
                     <input type="email" name="email" id="email"></input><br></br>
                     <label for="password">Password</label>
                      <input type="password" name="password" id="password"></input>
                </form>  
                <div>
                    <p className="forgot"> Forgot Password?</p>
                </div>
                <button className="b3">Login</button>

         </div>
    </div>
)
}
export default Login;   