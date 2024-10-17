import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { formatDate } from '../../utils/formatDate';
const ReadEditora = () => {
    const { id } = useParams();
    const [editora, setEditora] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/editora/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setEditora(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes da Editora</h1>
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
                                <td>{editora.id}</td>
                                <td>{editora.descricao} </td>
                                <td>{formatDate(editora.createdAt)} </td>
                                <td>{formatDate(editora.updatedAt)} </td>
                            </tr>
                        </tbody>
                    </table>
                    <p><Link to="/editora">Listar editoras</Link></p>
                </div>
            </div>
        </div>
    )
}
export default ReadEditora;