import { useState } from "react";
import useHandleSubmit from "../functions/submitForm";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signupContent = { name, email, password };
  const { submit, error } = useHandleSubmit()

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={(e) => {
        e.preventDefault()
        submit('/store/signup', signupContent, '/login')
      }}>
        <h1>Create a new account</h1>
        <label>name:</label>
        <input
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>email:</label>
        <input
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>password:</label>
        <input
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Create</button>
        {error}
      </form>
    </div>
  );
};

export default Signup;
