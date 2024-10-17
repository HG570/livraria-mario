import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddLivro = () => {
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
        console.log(e.target.name, e.target.value);
        setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };    
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/livro", livro);
            navigate("/livro");
        } catch (err) {
            console.log(err);
        }
    };

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
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Livro</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Livro</h3>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Titulo:</label>
                            <input type="text" className="form-control" id="titulo"
                                placeholder="Digite o titulo do Livro" name="titulo"
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
                                    editoras.map((editora, i) => 
                                        <option
                                            key={`editora-${editora.id}`}
                                            value={editora.id}
                                            defaultValue={i === 0}
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
                                    categorias.map((categoria, i) => 
                                        <option
                                            key={`categoria-${categoria.id}`}
                                            value={categoria.id}
                                            defaultValue={i === 0}
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
                                    autores.map((autor, i) => 
                                        <option
                                            key={`autor-${autor.id}`}
                                            value={autor.id}
                                            defaultValue={i === 0}
                                        >
                                            {autor.nome}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/livro">Listar Livros</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddLivro;