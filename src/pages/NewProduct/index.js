import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { api } from '../../services/api';
import './styles.css'

export default function NewProduct() {

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const history = useHistory()

  // useEffect(() => {
  //   const user = localStorage.getItem('userLogado')
  //   setUserLogado(user)
  //   if (userLogado === "false") {
  //     history.push('/')
  //   }
  // }, [userLogado])

  async function handleNewProduct() {
    const data = {
      title,
      description,
      price: +price,
      amount: +amount,
    }

    try {
      await api.post('products', data, {})
      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar')
    }
  }

  return(
    <div className="new-product-container">
      <div className="content">
        <section>
          <h1>Cadastrar novo produto</h1>
        </section>
        <div className="form">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Nome do produto"
          />
          <textarea
            value={description}
            name="description"
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição" />
          <input
            value={price}
            name="price"
            onChange={e => setPrice(e.target.value)}
            type="number"
            placeholder="Preço"
          />
          <input
            value={amount}
            name="amount"
            onChange={e => setAmount(e.target.value)}
            type="number"
            placeholder="Quantidade"
          />
          
          <button className="button" onClick={handleNewProduct} >
            Cadastrar
          </button>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#7159c1" />
            Voltar para home
          </Link>
        </div>
      </div>
    </div>
  )
}