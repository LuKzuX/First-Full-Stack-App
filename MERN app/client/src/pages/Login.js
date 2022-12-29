import { useState } from "react";
import { Link } from "react-router-dom";
import useHandleSubmit from "../functions/submitForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const loginContent = { email, password };
  const { submit, error } = useHandleSubmit()

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault()
        submit('/store/login', loginContent, '/')
      }}>
        <h1>Online Store</h1>
        <label>email:</label>
        <input
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>password:</label>
        <input
        type={"password"}
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
        <p><Link to="/signup">Signup</Link></p>
        {error}
      </form>
    </div>
  );
};


export default Login;
