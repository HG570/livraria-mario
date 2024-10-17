import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateLivro() {
    const { id } = useParams();
    const [livro, setLivro] = useState({
        titulo: "",
        fk_editora: "",
        fk_categoria: "",
        fk_autor: ""
    });
    const [autores, setAutores] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [editoras, setEditoras] = useState([]);

    const navigate = useNavigate();
    const handleChange = (e) => {
        setLivro((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };
    useEffect(() => {
        axios.get("http://localhost:8081/livro/" + id)
            .then(res => {
                setLivro(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    useEffect(() => {
        const fetchAllAutores = async () => {
            try {
                const res = await axios.get("http://localhost:8081/autor");
                setAutores(res.data);
                if (res.data.length > 0) {
                    setLivro(prev => ({ ...prev, fk_autor: res.data[0].id }));
                }
            } catch (err) {
                console.log(err);
            }
        };
        const fetchAllCategorias = async () => {
            try {
                const res = await axios.get("http://localhost:8081/categoria");
                setCategorias(res.data);
                if (res.data.length > 0) {
                    setLivro(prev => ({ ...prev, fk_categoria: res.data[0].id }));
                }
            } catch (err) {
                console.log(err);
            }
        };
        const fetchAllEditoras = async () => {
            try {
                const res = await axios.get("http://localhost:8081/editora");
                setEditoras(res.data);
                if (res.data.length > 0) {
                    setLivro(prev => ({ ...prev, fk_editora: res.data[0].id }));
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllAutores();
        fetchAllCategorias();
        fetchAllEditoras();
    }, []);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/livro/${id}`,
                livro);
            navigate("/livro");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h1>Formulário para Editar o Livro</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id"
                        placeholder="ID"
                        name="id" value={livro.id} disabled
                        onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Titulo</label>
                    <input type="text" className="form-control"
                        id="titulo" placeholder="Titulo do Livro"
                        name="titulo" value={livro.titulo}
                        onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Editora:</label>
                    <select 
                        type="text" className="form-select" id="fk_editora"
                        placeholder="Escolha a editora" name="fk_editora"
                        onChange={handleChange}
                    >
                        {
                            editoras.map(editora => 
                                <option
                                    key={`editora-${editora.id}`}
                                    value={editora.id}
                                    defaultValue={editora.id === livro.fk_editora}
                                >
                                    {editora.descricao}
                                </option>
                            )
                        }
                    </select>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Categoria:</label>
                    <select 
                        type="text" className="form-select" id="fk_categoria"
                        placeholder="Escolha a categoria" name="fk_categoria"
                        onChange={handleChange}
                    >
                        {
                            categorias.map(categoria => 
                                <option
                                    key={`categoria-${categoria.id}`}
                                    value={categoria.id}
                                    defaultValue={categoria.id === livro.fk_categoria}
                                >
                                    {categoria.descricao}
                                </option>
                            )
                        }
                    </select>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Autor:</label>
                    <select 
                        type="text" className="form-select" id="fk_autor"
                        placeholder="Escolha o autor" name="fk_autor"
                        onChange={handleChange}
                    >
                        {
                            autores.map(autor => 
                                <option
                                    key={`autor-${autor.id}`}
                                    value={autor.id}
                                    defaultValue={autor.id === livro.fk_autor}
                                >
                                    {autor.nome}
                                </option>
                            )
                        }
                    </select>
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">createdAt:</label>
                    <input type="text" className="form-control"
                        id="createdAt" placeholder="Data da criação"
                        name="createdAt"
                        value={livro.createdAt} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">updatedAt:</label>
                    <input type="text" className="form-control"
                        id="updatedAt" placeholder="Data de Alteração"
                        name="updatedAt" value={livro.updatedAt}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={handleClick}>Alterar</button>
            </form>
            <div className='container d-flex justify-content-center'>
                <Link to="/livro">Veja todas os livros</Link>
            </div>
        </div>
    )
}
export default UpdateLivro;
