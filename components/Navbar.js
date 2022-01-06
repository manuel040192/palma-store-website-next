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
        </Container>
    )
}


const Container = styled.div`
    min-height: 80px;
    position: fixed;
    display: flex;
    align-items: center;
    padding-right: 0 20px;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #ffffff;
    font-family: 'Rajdhani', sans-serif;
    font-weight: lighter;
    /* a {
        display: flex;
        align-items: center;
        justify-content: center;
    } */    
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex: 1;
    padding-left: 20px;
    width: 300px;
    a {
        font-family: 'Rajdhani', sans-serif;
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 1px;
        padding-right: 20px;
        padding-left: 20px;
        flex-wrap: nowrap;
        color: #000000;
        text-decoration: none;
        transition: font-weight .2s ease-in-out;
        width: 60px;
    }
    a:hover {
        font-weight: 600;
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
    flex: 3 0 auto;
    width: 300px;
    
    a {
        text-decoration: none;
        font-family: 'Alike';
        font-size: 28px; 
        color: #000000; 
        letter-spacing: 3px;
        display: flex;
        width: 112px;
        transform: translateX(270px);
    }
    @media (max-width: 768px) {
        a {
            text-decoration: none;
            font-family: 'Alike';
            font-size: 28px; 
            color: #000000;
            display: flex;
            padding-right: 10.7rem;
            width: 150px;
            transform: translateX(4.9rem);
        }
    }
`   

{/* const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex: 1;
    padding-right: 40px;

    a {
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 1px;
        padding-right: 20px;
        padding-left: 5px;
        flex-wrap: nowrap;
        color: #303030;
        text-decoration: none;
        transition: font-weight .2s ease-in-out;
        width: 60px;
    }

    a:hover {
        font-weight: 900;
    }
` */}

{/* const NavMenu = styled.div`
    display: none;
    @media (max-width: 900px) {
        display: flex;
        align-items: center;
        justify-content: start;
        flex: 1;
        padding-right: 40px;
    }
` */}
