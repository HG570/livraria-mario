import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddAutor = () => {
    const [autor, setAutor] = useState({
        nome: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAutor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/autor", autor);
            navigate("/autor");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Autor</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Autor</h3>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Nome:</label>
                            <input type="text" className="form-control" id="nome"
                                placeholder="Digite o nome do Autor" name="nome"
                                onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/autor">Listar Autores</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddAutor;