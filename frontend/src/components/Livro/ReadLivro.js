import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { formatDate } from '../../utils/formatDate';
const ReadLivro = () => {
    const { id } = useParams();
    const [livro, setLivro] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8081/livro/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setLivro(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes da Livro</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Editora</th>
                                <th>Categoria</th>
                                <th>Autor</th>
                                <th>Data Cadastro</th>
                                <th>Data Alteração</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{livro.id}</td>
                                <td>{livro.titulo} </td>
                                <td>{livro.editora && livro.editora.descricao} </td>
                                <td>{livro.categoria && livro.categoria.descricao} </td>
                                <td>{livro.autor && livro.autor.nome} </td>
                                <td>{formatDate(livro.createdAt)} </td>
                                <td>{formatDate(livro.updatedAt)} </td>
                            </tr>
                        </tbody>
                    </table>
                    <p><Link to="/livro">Listar livros</Link></p>
                </div>
            </div>
        </div>
    )
}
export default ReadLivro;