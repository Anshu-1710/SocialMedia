import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>ANSI SOCIAL.</h1>
                    <p>A fresh social media platform where connections and creativity come to life. Share, discover, and engage with content that matters to you—all. Join us today and experience a new way to connect!
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                         <input type="text" placeholder="Username" />
                         <input type="email" placeholder="Email" />
                         <input type="password" placeholder="Password" />
                         <input type="text" placeholder="Name" />
                         <button>Register</button>
                    </form>
                </div>

            </div>



        </div>
    )
}

export default Register