import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddEditora = () => {
    const [editora, setEditora] = useState({
        descricao: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setEditora((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/editora", editora);
            navigate("/editora");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Editora</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Editora</h3>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Descrição:</label>
                            <input type="text" className="form-control" id="descricao"
                                placeholder="Digite a Editora" name="descricao"
                                onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/editora">Listar Editoras</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddEditora;