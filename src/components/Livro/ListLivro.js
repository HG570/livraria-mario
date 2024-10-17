import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatDate } from '../../utils/formatDate';
const ListLivro = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchAllLivros = async () => {
            try {
                const res = await axios.get("http://localhost:8081/livro");
                setLivros(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllLivros();
    }, []);
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/livro/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando Livros</h2>
            <p><Link to="/" className="btn btn-primary">Início</Link></p>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addLivro" className="btn btn-success">Adicionar novo Livro</Link></p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Editora</th>
                                <th>Categoria</th>
                                <th>Autor</th>
                                <th>Data Cadastro</th>
                                <th>Data Alteração</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map((livro) => {
                                return (
                                    <tr key={`livro-${livro.id}`}>
                                        <td>{livro.id}</td>
                                        <td>{livro.titulo} </td>
                                        <td>{livro.editora.descricao} </td>
                                        <td>{livro.categoria.descricao} </td>
                                        <td>{livro.autor.nome} </td>
                                        <td>{formatDate(livro.createdAt)} </td>
                                        <td>{formatDate(livro.updatedAt)}
                                        </td>
                                        <td className="d-flex gap-2">
                                            <Link
                                                to={`/readLivro/${livro.id}`} className="btn btn-success mx2">Ler</Link>
                                            <Link
                                                to={`/updateLivro/${livro.id}`} className="btn btn-info mx2">Editar</Link>
                                            <button
                                                onClick={() => handleDelete(livro.id)} className="btn btn-danger">Deletar</button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListLivro;