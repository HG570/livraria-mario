import { Link } from "react-router-dom";
function MainB() {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
                <div class="container">
                    <a class="navbar-brand" href="/"><h1>Livraria</h1></a>
                </div>
            </nav>

            <h1>Navegue pelo sistema</h1>
            <div className="container mt-4">
                <div className="row">
                    {/* Card Editora */}
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://imgur.com/hPU7GPd.png" className="card-img-top" alt="Editora" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Editoras</h5>
                                <Link to="/editora">
                                    <button className="btn btn-primary">Ver Mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Autor */}
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://imgur.com/4yCINzu.png" className="card-img-top" alt="Autor" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Autores</h5>
                                <Link to="/autor">
                                    <button className="btn btn-primary">Ver Mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Categoria */}
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://imgur.com/BJWncqY.png" className="card-img-top" alt="Categoria" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Categorias</h5>
                                <Link to="/categoria">
                                    <button className="btn btn-primary">Ver Mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card Livro */}
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://imgur.com/sIxkXSw.png" className="card-img-top" alt="Livro" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Livros</h5>
                                <Link to="/livro">
                                    <button className="btn btn-primary">Ver Mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainB;
