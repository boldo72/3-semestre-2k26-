import { useNavigate } from "react-router-dom";

export default function Detalhes() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Mais Informações</h1>
            <button onClick={() => navigate("/contato")}>
                Ir para Contato
            </button>
        </div>
    );
}