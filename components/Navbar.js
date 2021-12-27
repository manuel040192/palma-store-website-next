import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <NavMenu>
                <p><a href='/women'>Women</a></p>
                <p><a href='/petsandowners'>Pets</a></p>
                <p><a href='/goods'>Goods</a></p>
            </NavMenu>
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
    padding: 0 20px;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    z-index: 2;
    background-color: #ffffff;
    font-family: 'Rajdhani', sans-serif;
    font-weight: lighter;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Logo = styled.div`
    flex: 3 0 auto;
    a {
        text-decoration: none;
        font-family: 'Alike';
        font-size: 28px; 
        color: #000000; 
        letter-spacing: 3px;
        display: flex;
        padding-right: 10.7rem;
        width: 500px;
        transform: translateX(120px);
    }
`   

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex: 1;
    padding-left: 20px;

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
`

export default Header