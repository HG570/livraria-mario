import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatDate } from '../../utils/formatDate';
const ListCategoria = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchAllCategorias = async () => {
            try {
                const res = await axios.get("http://localhost:8081/categoria");
                setCategorias(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllCategorias();
    }, []);
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/categoria/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando Categorias</h2>
            <p><Link to="/" className="btn btn-primary">Início</Link></p>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addCategoria" className="btn btn-success">Adicionar nova Categoria</Link></p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descrição</th>
                                <th>Data Cadastro</th>
                                <th>Data Alteração</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorias.map((categoria) => {
                                return (
                                    <tr key={`categoria-${categoria.id}`}>
                                        <td>{categoria.id}</td>
                                        <td>{categoria.descricao} </td>
                                        <td>{formatDate(categoria.createdAt)} </td>
                                        <td>{formatDate(categoria.updatedAt)}
                                        </td>
                                        <td className="d-flex gap-2">
                                            <Link
                                                to={`/readCategoria/${categoria.id}`} className="btn btn-success mx2">Ler</Link>
                                            <Link
                                                to={`/updateCategoria/${categoria.id}`} className="btn btn-info mx2">Editar</Link>
                                            <button
                                                onClick={() => handleDelete(categoria.id)} className="btn btn-danger">Deletar</button>
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
export default ListCategoria;