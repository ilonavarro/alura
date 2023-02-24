import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BotaoNavegacao from '../BotaoNavegacao'
import ModalCadastroUsuario from '../ModalCadastroUsuario'
import ModalLoginUsuario from '../ModalLoginUsuario'
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { useLimparToken, useObterToken } from '../../hooks'

const BarraNavegacao = () => {
  const [modalCadastroAberta, setModalCadastroAberta] = useState(false)
  const [modalLoginAberta, setModalLoginAberta] = useState(false)

  const navigate = useNavigate()

  const token = useObterToken()

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null)

  const aoEfetuarLogin = () => {
    setModalCadastroAberta(false)
    setUsuarioEstaLogado(true)
  }

  const efetuarLogout = () => {
    setUsuarioEstaLogado(false)
    useLimparToken()
    setModalLoginAberta(false)
    navigate('/')
  }

  return (
    <nav className='ab-navbar'>
      <h1 className='logo'>
        <Link to='/'>
          <img className='logo' src={logo} alt='Logo da AluraBooks' />
        </Link>
      </h1>
      <ul className='navegacao'>
        <li>
          <a href='#!'>Categorias</a>
          <ul className='submenu'>
            <li>
              <Link to='/'>Frontend</Link>
            </li>
            <li>
              <Link to='/'>Programação</Link>
            </li>
            <li>
              <Link to='/'>Infraestrutura</Link>
            </li>
            <li>
              <Link to='/'>Business</Link>
            </li>
            <li>
              <Link to='/'>Design e UX</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className='acoes'>
        {usuarioEstaLogado || (
          <>
            <li>
              <BotaoNavegacao
                texto='Login'
                textoAltSrc='Icone representando um usuário'
                imagemSrc={usuario}
                onClick={() => setModalLoginAberta(true)}
              />
              <ModalLoginUsuario
                aberta={modalLoginAberta}
                aoFechar={() => setModalLoginAberta(false)}
                aoEfetuarLogin={aoEfetuarLogin}
              />
            </li>
            <li>
              <BotaoNavegacao
                texto='Cadastrar-se'
                textoAltSrc='Icone representando um usuário'
                imagemSrc={usuario}
                onClick={() => setModalCadastroAberta(true)}
              />
              <ModalCadastroUsuario
                aberta={modalCadastroAberta}
                aoFechar={() => setModalCadastroAberta(false)}
              />
            </li>
          </>
        )}
        {usuarioEstaLogado && (
          <>
            <li>
              <Link to='/minha-conta/pedidos'>Minha Conta</Link>
            </li>
            <li>
              <BotaoNavegacao
                texto='Logout'
                textoAltSrc='Icone representando um usuário'
                imagemSrc={usuario}
                onClick={efetuarLogout}
              />
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default BarraNavegacao
