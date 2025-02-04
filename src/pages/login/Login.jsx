import { Link } from "react-router-dom"
import "./Login.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () =>{
        login();
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>HELLO PEEPS!</h1>
                    <p>A fresh social media platform where connections and creativity come to life. Share, discover, and engage with content that matters to you—all. Join us today and experience a new way to connect!
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                         <input type="text" placeholder="Username" />
                         <input type="password" placeholder="Password" />
                         <button onClick={handleLogin}>Login</button>
                    </form>
                </div>

            </div>



        </div>
    )
}

export default Login