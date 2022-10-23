import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../styles.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <NavMenu>
                <p><a href='/women'>Women</a></p>
                <p><a href='/petsandowners'>Pets</a></p>
                <p><a href='/goods'>Goods</a></p>
            </NavMenu>
            <OpenBurgerNav>
                <div onClick={()=>setBurgerStatus(true)}><MenuIcon /></div>
            </OpenBurgerNav>
            <CloseBurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href='/women' className={styles.textdecoration}>Women</a></li>
                <li><a href='/petsandowners' className={styles.textdecoration}>Pets</a></li>
                <li><a href='/goods' className={styles.textdecoration}>Goods</a></li>
            </CloseBurgerNav>
            <Logo>
                <p><a href='/'>PALMA</a></p>
            </Logo>
            <EmptyComponent><p className={styles.whitetext}>Text</p></EmptyComponent>
        </Container>
    )
}

const Container = styled.div`
    height: 80px;
    display: grid;
    grid-template-areas: "grid-menu-links grid-menu-logo grid-menu-icons";
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 80px;
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    font-family: 'Rajdhani', sans-serif;
    font-weight: lighter;
`

const NavMenu = styled.div`
    display: flex;
    grid-area: grid-menu-links;    
    align-items: center;
    a {
        font-family: 'Rajdhani', sans-serif;
        font-weight: 400;
        font-size: 22px;
        padding-left: 30px;
        padding-right: 15px;
        letter-spacing: 1px;
        color: #000000;
        text-decoration: none;
        width: 60px;
    }
    @media (max-width: 768px) {
        display: none;
    }    
`

const OpenBurgerNav = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;    
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 20px;
        flex-wrap: nowrap;
        color: #000000;
        div {
            display: flex;    
            justify-content: center;
            align-items: center;
        }   
    }
`

const CloseBurgerNav = styled.div`
    display: none;
    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background: white;
        width: 300px;
        z-index: 2;
        padding-top: 17px;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: start;
        transform: ${props => props.show ? 'translateX(0px)' : 'translateX(-400px)'};
        transition: transform 0.4s;
        li {
            padding: 28px 0 8px 40px;    
            list-style: none;
            
            a {
                font-family: 'Rajdhani', sans-serif;
                font-weight: 400;
                font-size: 20px;
                color: #000000;
                transition: font-weight .2s ease-in-out;
            }
            a:hover {
                font-weight: 600;
            }
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    margin-top: 10px;
    margin-right: 20px;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

const Logo = styled.div`
    display: flex;
    grid-area: grid-menu-logo;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        font-family: 'Alike';
        font-size: 28px; 
        color: #000000; 
        letter-spacing: 3px;
    }
    @media (max-width: 768px) {
        a {
            text-decoration: none;
            font-family: 'Alike';
            font-size: 28px; 
            color: #000000;
            display: flex;
        }
    }
`

const EmptyComponent = styled.div`
    display: flex;
    grid-area: grid-menu-icons;
    justify-content: space-around;
    align-items: center;
`
