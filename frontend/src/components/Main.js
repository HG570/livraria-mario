import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="container">
      <h1>Navegue pelo sistema</h1>
      <div className='container d-flex justify-content-center gap-3'>
        <Link to="/editora">
          <button className="btn btn-primary">
            Editora
          </button>
        </Link>
        <Link to="/autor">
          <button className="btn btn-primary">
            Autor
          </button>
        </Link>
        <Link to="/categoria">
          <button className="btn btn-primary">
            Categoria
          </button>
        </Link>
        <Link to="/livro">
          <button className="btn btn-primary">
            Livro
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Main;
