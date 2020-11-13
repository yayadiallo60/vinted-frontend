import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import axios from "axios";
import "./index.css";
const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(username, email, password);
    if (username && email && password) {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          { username, email, password }
        );
        setUser(response.data.token);
        setUsername("");
        setEmail("");
        setPassword("");
        history.push("/");
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setErrorMessage("Veuillez renseigner tous les champs");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">S'inscrire</h2>
      <p>{errorMessage}</p>
      <form className="form-content" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={username}
          placeholder="Nom d'utilisateur"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="form-input"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="form-input"
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="news-letter">
          <input type="checkbox" name="newsletter" />
          <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
        </div>

        <button className="form-submit-btn" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;
