import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import "./styles.css";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const { logado, setLogado } = React.useContext(UserContext);

  React.useEffect(() => {
    if (logado) {
      history.push("/home");
    }
  }, [logado, history])

  async function handleLogin() {
    const data = { email, password };
    api
      .post("login", data)
      .then((response) => {
        if (response.data.status === 200) {
          setEmail("");
          setPassword("");
          localStorage.setItem("userLogado", "true");
          setLogado(true)
          history.push("/home");
        } else {
          toast.error(response.data.msg)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="logon-container">
      <div className="content">
        <section>
          <h1>Login</h1>
        </section>
        <div className="form">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            name="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            name="password"
          />
          <button type="submit" className="button" onClick={handleLogin}>
            Login
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#7159c1" />
            Cadastro
          </Link>
        </div>
      </div>
    </div>
  );
}
