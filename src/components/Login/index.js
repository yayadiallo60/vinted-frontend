import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          { email, password }
        );
        setUser(response.data.token);
        setEmail("");
        setPassword("");

        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <div className="form-login-container">
      <h2 className="form-title">Se connecter</h2>
      <form className="form-content" onSubmit={handleSubmit}>
        <input
          className="form-login"
          type="text"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="form-login"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input className="form-submit-btn" type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
