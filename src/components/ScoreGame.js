import '../css/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Link } from 'react-router-dom';


//const styledLink1 = {
//    textDecoration: 'none',
//    color: 'black'
//}

const ScoreGame = () => {

    return (
        <Container className='createGameContainer' fluid>
            <Row>
                <Col className='rowOnePlayGame'><i class="fa-solid fa-xmark"></i></Col>
            </Row>
            <Row >
                <Col className='rowTwoScoreGame'>
                    <div className='scoreGameAlphabet'><span>Siddy</span></div>
                </Col>
            </Row>
            <Row>
                <Col className='rowThreeScoreGame'>
                    <div><span>You are scoring</span></div>
                    <div className='scoreGameUsername'><span>Amanda</span></div>
                </Col>
            </Row>
            <Row>
                <Col className='rowFourScoreGame'>
                    <div><div className='minusScoreGame1' id='minusScoreGame'> - </div><div className='plusScoreGame1' id='plusScoreGame'> + </div><span>Name</span><span className='ScoreGameAnswer'>Matthew</span><span className='ScoreGameScore'>10</span></div>
                    <div><div className='minusScoreGame2' id='minusScoreGame'> - </div><div className='plusScoreGame2' id='plusScoreGame'> + </div><span>Animal</span><span className='ScoreGameAnswer'>Monkey</span><span className='ScoreGameScore'>10</span></div>
                    <div><div className='minusScoreGame3' id='minusScoreGame'> - </div><div className='plusScoreGame3' id='plusScoreGame'> + </div><span>Place</span><span className='ScoreGameAnswer'>Monrovia</span><span className='ScoreGameScore'>10</span></div>
                    <div><div className='minusScoreGame4' id='minusScoreGame'> - </div><div className='plusScoreGame4' id='plusScoreGame'> + </div><span>Thing</span><span className='ScoreGameAnswer'>Mop</span><span className='ScoreGameScore'>10</span></div>
                    <div><div className='minusScoreGame5' id='minusScoreGame'> - </div><div className='plusScoreGame5' id='plusScoreGame'> + </div><span>Food</span><span className='ScoreGameAnswer'>Macaroni</span><span className='ScoreGameScore'>10</span></div>
                    <div><div className='minusScoreGame6' id='minusScoreGame'> - </div><div className='plusScoreGame6' id='plusScoreGame'> + </div><span>Artists</span><span className='ScoreGameAnswer'>MJ</span><span className='ScoreGameScore'>10</span></div>
                    <div><div className='minusScoreGame7' id='minusScoreGame'> - </div><div className='plusScoreGame7' id='plusScoreGame'> + </div><span>Shows</span><span className='ScoreGameAnswer'>Mother</span><span className='ScoreGameScore'>10</span></div>
                </Col>
            </Row>
            <Row>
                <Col className='rowFiveScoreGame'>
                    <div><span className='totalScoreSpan'>Total score: </span><span className='digitSpan'>50</span></div>
                </Col>
            </Row>
            <Row>
                <Col className='rowSixScoreGame'><span>Submit</span></Col>
            </Row>

        </Container>
    )
}


export default ScoreGame;