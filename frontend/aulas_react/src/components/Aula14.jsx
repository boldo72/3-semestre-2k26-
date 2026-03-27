import { estilos } from "../style/Estilos"
import { Link, useNavigate } from "react-router-dom"
const Aula14 = () => {
    const Navigate = useNavigate()


    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - react router - navegação em react </h2>
            <h3>biblioteca que permite criar e gerenciar rotas em react </h3>
            <hr />
            <Link to="/">Principal</Link>
            <br />
            <Link to="/sobre">Sobre</Link>
            <br />
            <Link to="*" >NotFound</Link>
            <br />
            <h3>navegando com o useNavigate</h3>
            <button onClick={() => Navigate('/Sobre')}>Sobre</button>
            <br />
            <h3>navegando com o useNavigate</h3>
            <button onClick={() => Navigate('/perfil/boldo')}>BOLDO🏀</button>
            <button onClick={() => Navigate('/perfil/lipe')}>LIPE🏀</button>
            <hr />
            <Link to="/inicio" >inicio</Link>
            <br />
            <Link to="/filme/:id" >Filme</Link>
        </div>
    )
}

export default Aula14