//Styles

import styled from "styled-components";

export const Nav = styled.nav`
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #3097db;
    color: #ffffff;
`;

export const NavIzq = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
`;

export const NavDer = styled(NavIzq)``;

export const Logo = styled.img`
    height: 50px;
    width: 50px;
    margin-left: 5px;
`;

export const NavSecciones = styled.li`
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding: 5px 10px;
    border: 2px;
    border-radius: 5px 15px;
    list-style: none;
    &:hover{
        cursor:pointer;
        background: #7AC3F3;
    }
`;

export const IconosNav = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 8px;
`;

export const Tarjeta = styled.div`
    height: 200px;
    width: 255px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 5px 15px;
    &:hover{
        height: 215px;
        width: 270px;
        font-size: 1.1rem;
        transition: all 0.2s ease-out;
    }
`;

export const AñadirTarjeta = styled.div`
    height: 200px;
    width: 255px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 5px 15px;
`;

export const AñadirTarjetaForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;