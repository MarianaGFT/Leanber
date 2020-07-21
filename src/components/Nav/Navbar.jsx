import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import LogoLeanber from "../../assets/Logo-Leanber-grafico.png";
import LogoLeanberNombre from "../../assets/Logo-Leanber-nombre.png";
import HeaderImg from "../../assets/Background-Header.png";

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 12px;

  .leanber-logo {
    vertical-align: sub;
    margin-right: 5px;
    width: 40px;
  }
  .leanber-name {
    width: 190px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 8px;

    .leanber-logo {
      vertical-align: sub;
      margin-right: 5px;
      width: 26px;
    }

    .leanber-name {
      width: 120px;
      margin-bottom: 10px;
    }

    .header-image {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer className='container-navbar'>
        <img className='header-image' src={HeaderImg} alt='Imagen Header'></img>
        <img className='leanber-logo' src={LogoLeanber} alt='Logo Leanber'></img>
        <img className='leanber-name' src={LogoLeanberNombre} alt='Nombre Empresa'></img>
      </NavbarContainer>
      <Burger />
    </Nav>
  );
};

export default Navbar;
