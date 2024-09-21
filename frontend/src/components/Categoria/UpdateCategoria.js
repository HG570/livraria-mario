import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateCategoria() {
    const { id } = useParams();
    const [categoria, setCategoria] = useState({
        descricao: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCategoria((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };
    useEffect(() => {
        axios.get("http://localhost:8081/categoria/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setCategoria(res.data);
            })
            .catch(err => console.log(err))
    }, [id]);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/categoria/${id}`,
                categoria);
            navigate("/categoria");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h1>Formulário para Editar a Categoria</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id"
                        placeholder="ID"
                        name="id" value={categoria.id} disabled
                        onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Descrição</label>
                    <input type="text" className="form-control"
                        id="descricao" placeholder="Descrição da Categoria"
                        name="descricao" value={categoria.descricao}
                        onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">createdAt:</label>
                    <input type="text" className="form-control"
                        id="createdAt" placeholder="Data da criação"
                        name="createdAt"
                        value={categoria.createdAt} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">updatedAt:</label>
                    <input type="text" className="form-control"
                        id="updatedAt" placeholder="Data de Alteração"
                        name="updatedAt" value={categoria.updatedAt}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={handleClick}>Alterar</button>
            </form>
            <div className='container d-flex justify-content-center'>
                <Link to="/categoria">Veja todas as categorias</Link>
            </div>
        </div>
    )
}
export default UpdateCategoria;
