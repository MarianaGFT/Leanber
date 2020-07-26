import React from "react";
import styled from "styled-components";
import Home from "../../assets/Home.png";
import User from "../../assets/User.png";
import Users from "../../assets/Users.png";
import Layers from "../../assets/Layers.png";
import MessageCircle from "../../assets/MessageCircle.png";
import { Button } from "react-bootstrap";

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  width: 50px;
  background: linear-gradient(var(--navbar-gradient-dark), var(--navbar-gradient-light));
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 350px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 20;

  a {
    display: block;
    line-height: 100px;
    transition: 0.5s;
    padding: 10px;
  }

  span {
    font-size: 25px;
    margin-left: 10px;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: linear-gradient(var(--navbar-gradient-dark), var(--navbar-gradient-light));
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;

    span {
      font-size: 18px;
      color: #ffffff;
      font-weight: bold;
    }

    a {
      color: #fff;
      line-height: 90px;
      text-align: center;
      padding: 10px 13px;
    }

    a:hover {
      padding-left: 15px;
    }
  }
`;

const ButtonSidebar = styled.div`
  text-align: center;

  .sidebar-button {
    background-color: var(--sidebar-button);
    margin-top: 120px;
  }

  @media (max-width: 768px) {
    .sidebar-button {
      background-color: var(--sidebar-button);
      margin-top: 100px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a href='www.facebook.com'>
        <img src={Home} alt='Home icon'></img> <span>INICIO </span>
      </a>
      <a href='www.facebook.com'>
        <img src={User} alt='User icon'></img> <span> SERVICIOS </span>
      </a>
      <a href='www.facebook.com'>
        <img src={Users} alt='Users icon'></img> <span> COMUNIDAD </span>
      </a>
      <a href='www.facebook.com'>
        <img src={Layers} alt='Layers icon'></img> <span> PROYECTOS </span>
      </a>
      <a href='www.facebook.com'>
        <img src={MessageCircle} alt='Message-circle icon'></img> <span> CONTACTO </span>
      </a>
      <ButtonSidebar>
        <Button className='sidebar-button'> COLABOREMOS </Button>{" "}
      </ButtonSidebar>
    </Ul>
  );
};

export default RightNav;
