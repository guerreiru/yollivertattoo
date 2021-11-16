import { useEffect, useState } from "react";
import { api } from "../../services/api";
import HomeComponent from "../../components/HomeComponent";


function Home() {
  const [loading, setLoading] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [produtoBuscado, setProdutoBuscado] = useState([]);
  const [produtoToEdit, setProdutoToEdit] = useState([]);
  const [filterActive, setFilterActive] = useState("");
  const [busca, setBusca] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //const navigate = useNavigate();

  async function loadProducts() {
    setLoading(true);
    const response = await api.get("produtos");
    if (response.data) {
      const data = await response.data.map((produto) => ({
        ...produto,
      }));
      setLoading(null);
      setProdutos(data);
    } else {
      setLoading(null);
    }
  }

  function buscarProduto() {
    const results = [];
    produtos.forEach((produto) => {
      if (produto.name.includes(busca)) {
        results.push(produto);
      }
    });
    setProdutoBuscado(results);
    setFilterActive(results[0].category)
  }

  function editarProduto(produto) {
    setProdutoToEdit(produto);
    setModalIsOpen(true);
  }

  function limparBusca() {
    setProdutoBuscado([]);
    setBusca("");
    setFilterActive("")
  }

  function deleteProduto(id) {
    api.delete(`produtos/${id}/delete`);
    const produtosUpdated = [...produtos];
    const produtoIndex = produtosUpdated.findIndex(
      (product) => product.id === id
    );
    if (produtoIndex >= 0) {
      produtosUpdated.splice(produtoIndex, 1);
      setProdutos(produtosUpdated);
      setProdutoBuscado([]);
    } else {
      throw Error();
    }
  }

  function filterByCategory({ target }) {
    const category = target.innerText.toLowerCase();
    const results = [];
    console.log(category);
    setFilterActive(category)
    produtos.forEach((produto) => {
      if (produto.category.includes(category)) {
        results.push(produto);
      }
    });
    setProdutoBuscado(results);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Carregando....</h1>
      </div>
    );
  }

  if (produtoBuscado.length > 0) {
    return (
      <HomeComponent
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        produto={produtoToEdit}
        busca={busca}
        setBusca={setBusca}
        buscarProduto={buscarProduto}
        limparBusca={limparBusca}
        filterByCategory={filterByCategory}
        limparBusca={limparBusca}
        produtos={produtoBuscado}
        produtoToEdit={produtoToEdit}
        editarProduto={editarProduto}
        deleteProduto={deleteProduto}
        filterActive={filterActive}
      />
    );
  } else {
    return (
      <HomeComponent
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        produto={produtoToEdit}
        busca={busca}
        setBusca={setBusca}
        buscarProduto={buscarProduto}
        limparBusca={limparBusca}
        filterByCategory={filterByCategory}
        limparBusca={limparBusca}
        produtos={produtos}
        produtoToEdit={produtoToEdit}
        editarProduto={editarProduto}
        deleteProduto={deleteProduto}
        filterActive={filterActive}
      />
    );
  }
}

export default Home;
