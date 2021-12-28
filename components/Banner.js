import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import styles from '../styles.module.css';

export default function Banner() {
    
    return (
        <Container>
            <Image className="banner">    
                <Fade left duration={1400}> 
                    <div className={styles.text1}>Your Experience Is Your</div>
                </Fade>
                <Fade top duration={1200} delay={1400}>
                    <div className={styles.text2}>Attention</div>
                </Fade>
                <ButtonGroup>
                    <a href='/women' className={styles.button}>
                        <Women>
                            <p><a href='/women'>Shop Women</a></p>
                        </Women>
                    </a>
                    <a href='/petsandowners' className={styles.button}>
                        <Pets>
                            <p><a href='/petsandowners'>Shop Pets</a></p>
                        </Pets>
                    </a>
                    <a href='/goods' className={styles.button}>
                        <Goods>
                            <p><a href='/goods'>Shop Goods</a></p>
                        </Goods>
                    </a>
                </ButtonGroup>
            </Image>
        </Container>
    )
}

const Image = styled.div`
    background-image: url('https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/palmeras.jpg?alt=media&token=476d3fdd-9019-4a9e-99c0-5974d5c368c4');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 105vh;
    width: 100%;
    /* margin-left: 207px; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* position: relative; */
`

const Container = styled.div`
    width: 100vw;
`

const ButtonGroup = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    top: 55%;
    left: 20%;
    position: absolute;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`
const Women = styled.div`
    background-color: #ffffff;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 8px;
    a {
        text-decoration: none;
        color: #000000;
    }
`

const Pets = styled.div`
    background-color: #ffffff;
    height: 40px;
    width: 256px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 8px;
    a {
        text-decoration: none;
        color: #000000;
    }
`

const Goods = styled.div`
    background-color: #ffffff;
    height: 40px;
    width: 256px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 8px;
    a {
        text-decoration: none;
        color: #000000;
    }
`

const TextOne = styled.div`
    position: absolute;
    top: 34%;
    left: 6%;
    font-family: 'Rajdhani';
    font-weight: 500;
    font-size: 32px;
    letter-spacing: 2px;
`

const TextTwo = styled.div`
    transform: rotate(90deg);
    position: absolute;
    top: 34%;
    left: 17.9%;
    font-family: 'Rajdhani';
    font-weight: 500;
    font-size: 32px;
    letter-spacing: 3px;
`
