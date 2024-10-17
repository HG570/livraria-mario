import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateAutor() {
    const { id } = useParams();
    const [autor, setAutor] = useState({
        nome: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAutor((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };
    useEffect(() => {
        axios.get("http://localhost:8081/autor/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setAutor(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/autor/${id}`,
                autor);
            navigate("/autor");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h1>Formulário para Editar o Autor</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id"
                        placeholder="ID"
                        name="id" value={autor.id} disabled
                        onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Nome</label>
                    <input type="text" className="form-control"
                        id="nome" placeholder="Nome do Autor"
                        name="nome" value={autor.nome}
                        onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">createdAt:</label>
                    <input type="text" className="form-control"
                        id="createdAt" placeholder="Data da criação"
                        name="createdAt"
                        value={autor.createdAt} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">updatedAt:</label>
                    <input type="text" className="form-control"
                        id="updatedAt" placeholder="Data de Alteração"
                        name="updatedAt" value={autor.updatedAt}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={handleClick}>Alterar</button>
            </form>
            <div className='container d-flex justify-content-center'>
                <Link to="/autor">Veja todas os autores</Link>
            </div>
        </div>
    )
}
export default UpdateAutor;
