
function MainA() {
  return (
    <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
                <div class="container">
                    <a class="navbar-brand col-6" href="/"><h1>Livraria</h1></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse col-6" id="navbarSupportedContent">
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
        </div>
  )
}
export default MainA;
