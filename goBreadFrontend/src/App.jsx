import React from 'react';
import { useState } from 'react';
import CadastroCliente from './pages/Cadastro/CadastroCliente';
import Home from './pages/Home/Home';
import Comerciante from './pages/Comerciante/Comerciante';
import Login from './pages/Login/Login';
import Assinatura from './pages/Assinatura/Assinatura';
import DetailsEntrega from './pages/DetailsEntrega/DetailsEntrega';
import Pagamento from './pages/Pagamento/Pagamento';
import Padaria from './pages/Padaria/Padaria';
import Produto from './pages/Produto/Produto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortalCliente from './pages/PortalCliente/PortalCliente';
import PersonalData from './pages/PortalCliente/PersonalData';
import EditSignature from './pages/PortalCliente/EditSignature';
import CadastroComerciante from './pages/Cadastro/CadastroComerciante';
import ProdutoComerciante from './pages/ProdutoComerciante/ProdutoComerciante';
import PortalComerciante from './pages/PortalComerciante/PortalComerciante';
import DadosComerciante from './pages/PortalComerciante/DadosComerciante';
import Arquivo from './pages/PortalComerciante/Arquivo';
import ClienteComerciante from './pages/ClienteComerciante/ClienteComerciante';
import LoginComerciante from './pages/Login/LoginComerciante';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comerciante' element={<Comerciante />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastroCliente' element={<CadastroCliente />} />
          <Route path='/assinatura' element={<Assinatura />} />
          <Route path='/padaria' element={<Padaria />} />
          <Route path='/produto' element={<Produto />} />
          <Route path='/entrega' element={<DetailsEntrega />} />
          <Route path='/pagamento' element={<Pagamento />} />
          <Route path='/portalCliente' element={<PortalCliente />} />
          <Route path='/dados' element={<PersonalData />} />
          <Route path='/editarAssinatura' element={<EditSignature />} />
          <Route path='/cadastroComerciante' element={<CadastroComerciante />} />
          <Route path='/produtoComerciante' element={<ProdutoComerciante />} />
          <Route path='/portalComerciante' element={<PortalComerciante />} />
          <Route path='/dadosComerciante' element={<DadosComerciante />} />
          <Route path='/relatorios' element={<Arquivo />} />
          <Route path='/destinoCadastro' element={<ClienteComerciante />} />
          <Route path='/loginComerciante' element={<LoginComerciante />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
