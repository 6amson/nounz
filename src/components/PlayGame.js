import '../css/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
//import ScoreGame from './ScoreGame';


const styledLink1 = {
    textDecoration: 'none',
    color: 'black'
}

const Alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generateRandomAlphabet(){
    const number = Math.floor(Math.random()*27);
    return Alphabet[number];
};

const alphabet = generateRandomAlphabet();


const PlayGame = () => {

    return (
        <Container className='createGameContainer' fluid>
            <Row>
                <Col className='rowOnePlayGame'><i class="fa-solid fa-xmark"></i></Col>
            </Row>
            <Row>
                <Col className='rowTwoPlayGame'>
                    <div className='playGameAlphabet'><span>Alphabet</span></div>
                    <div className='playGameTimer'><span>Timer</span></div>
                </Col>
            </Row>
            <Row>
                <Col className='rowThreePlayGame'>
                    <div><span>{alphabet}</span></div>
                    <div><span>0:57</span></div>
                </Col>
            </Row>
            <Row>
                <Col className='rowFourPlayGame'>
                    <div><input type='text' placeholder='Name' /></div>
                    <div><input type='text' placeholder='Animal' /></div>
                    <div><input type='text' placeholder='Place' /></div>
                    <div><input type='text' placeholder='Thing' /></div>
                    <div><input type='text' placeholder='Food' /></div>
                    <div><input type='text' placeholder='Artists' /></div>
                    <div><input type='text' placeholder='Shows' /></div>
                </Col>
            </Row>
            <Row>
                <Link style={styledLink1} to={'ScoreGame'}>
                <Col className='rowSixCreateGame'><span>Submit</span></Col></Link>
            </Row>

        </Container>
    )
}


export default PlayGame;