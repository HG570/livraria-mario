import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatDate } from '../../utils/formatDate';
const ListAutor = () => {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        const fetchAllAutores = async () => {
            try {
                const res = await axios.get("http://localhost:8081/autor");
                setAutores(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllAutores();
    }, []);
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/autor/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando Autores</h2>
            <p><Link to="/" className="btn btn-primary">Início</Link></p>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addAutor" className="btn btn-success">Adicionar novo Autor</Link></p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Data Cadastro</th>
                                <th>Data Alteração</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {autores.map((autor) => {
                                return (
                                    <tr key={`autor-${autor.id}`}>
                                        <td>{autor.id}</td>
                                        <td>{autor.nome} </td>
                                        <td>{formatDate(autor.createdAt)} </td>
                                        <td>{formatDate(autor.updatedAt)}
                                        </td>
                                        <td className="d-flex gap-2">
                                            <Link
                                                to={`/readAutor/${autor.id}`} className="btn btn-success mx2">Ler</Link>
                                            <Link
                                                to={`/updateAutor/${autor.id}`} className="btn btn-info mx2">Editar</Link>
                                            <button
                                                onClick={() => handleDelete(autor.id)} className="btn btn-danger">Deletar</button>
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
export default ListAutor;