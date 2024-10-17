import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { formatDate } from '../../utils/formatDate';
const ReadCategoria = () => {
    const { id } = useParams();
    const [categoria, setCategoria] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/categoria/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setCategoria(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes da Categoria</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descrição</th>
                                <th>Data Cadastro</th>
                                <th>Data Alteração</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{categoria.id}</td>
                                <td>{categoria.descricao} </td>
                                <td>{formatDate(categoria.createdAt)} </td>
                                <td>{formatDate(categoria.updatedAt)} </td>
                            </tr>
                        </tbody>
                    </table>
                    <p><Link to="/categoria">Listar categorias</Link></p>
                </div>
            </div>
        </div>
    )
}
export default ReadCategoria;