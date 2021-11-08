import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import './styles.css'

export default function Register() {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  async function handleRegister() {
    const data = {
      name,
      phone,
      email,
      password,
      admin: false
    }

    api.post('users', data)
      .then((response) => {
        if (response.data.status === 200) {
          setName('')
          setEmail('')
          setPassword('')
        } else {
          toast.error(response.data.msg)
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Erro no cadastro')
      })
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
        </section>
        <div className="form" >
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Nome"
            name="name"
          />
          <input
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="tel"
            placeholder="Telefone"
            name="phone"
          />
          <input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            name="email"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            name="password"
          />
          <button type="submit" className="button" onClick={handleRegister} >
            Cadastrar
          </button>
          <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#7159c1" />
            Voltar pro home
          </Link>
        </div>
      </div>
    </div>
  )
}