import { useParams } from "react-router-dom";

export default function Filme() {
    const { id } = useParams();

    return (
        <div>
            <h1>Exibindo dados do filme: {id}</h1>
        </div>
    );
}