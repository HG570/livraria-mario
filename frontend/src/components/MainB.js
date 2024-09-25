import { Link } from "react-router-dom";
function MainB() {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Livraria</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/editora">Editora</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/autor">Autor</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/categoria">Categoria</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/livro">Livro</a>
                            </li>
                        </ul>
                    </div>
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
