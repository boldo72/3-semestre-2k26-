import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <div>
            <h1>Bem-vindo</h1>
            <Link to="/detalhes">Ir para Detalhes</Link>
        </div>
    );
}