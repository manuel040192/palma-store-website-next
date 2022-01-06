import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import styles from '../styles.module.css';

export default function ButtonAndText() {
    
    return (
        <Container>
            <Text>Si deseas comprar, por favor <br />entra a nuestra plataforma<br/>segura de pagos.</Text>
            <Stack>
                <a href='https://thepalmastoredraft.company.site/products/Medias-Azules-p428396458' className={styles.textdecoration}><Button variant="contained" size="large">Comprar</Button></a>
            </Stack>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    place-items: center;
    justify-content: center;
    align-items: center;
    padding: 30px 0 30px 0;
    width: 100%;
    height: 160px;
    margin-top: 30px;
`

const Text = styled.div`
    font-family: 'Rajdhani', sans-serif;
    color: #000000;
    font-size: 20px;
    padding-bottom: 20px;
    text-align: center;
`