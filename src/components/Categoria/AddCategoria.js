import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddCategoria = () => {
    const [categoria, setCategoria] = useState({
        descricao: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCategoria((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/categoria", categoria);
            navigate("/categoria");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Categoria</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Categoria</h3>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Descrição:</label>
                            <input type="text" className="form-control" id="descricao"
                                placeholder="Digite a Categoria" name="descricao"
                                onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/categoria">Listar Categorias</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddCategoria;