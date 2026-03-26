import { Link, useParams } from 'react-router-dom'

function Perfil() {
const {nome} = useParams()

    return (
        <div>
            <h1>Essa é a Perfil {nome}</h1>
            <Link to= '/'>voltar para pagina pricipal </Link>
        </div>
    )
}

export default Perfil