import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { formatDate } from '../../utils/formatDate';
const ReadAutor = () => {
    const { id } = useParams();
    const [autor, setAutor] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/autor/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setAutor(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes da Autor</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Data Cadastro</th>
                                <th>Data Alteração</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{autor.id}</td>
                                <td>{autor.nome} </td>
                                <td>{formatDate(autor.createdAt)} </td>
                                <td>{formatDate(autor.updatedAt)} </td>
                            </tr>
                        </tbody>
                    </table>
                    <p><Link to="/autor">Listar autores</Link></p>
                </div>
            </div>
        </div>
    )
}
export default ReadAutor;