import { useState } from 'react';
import '../css/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
//import Form from 'react-bootstrap/Form';
//import PlayGame from './PlayGame';


const styledLink1 = {
  textDecoration: 'none',
  color: 'black'
}



const JoinPrivateGame = () => {
  const [gameCode, setGameCode] = useState('')
  const onChangeHandler = e => {
    setGameCode(e.target.value);
  }

  return (
    <Container className='joinGameContainer' fluid>
      <Row>
        <Col className='rowOneCreateGame'><i class="fa-solid fa-arrow-left"></i></Col>
      </Row>
      <Row>
        <Col className='rowOneJoinGame'><div>
        <div className='rowOneJoinGameInputDiv'><input type='text' value={gameCode} onChange={onChangeHandler} placeholder='Enter your name' required/></div>
        </div>
          <div className='rowOneJoinGamePencilIcon'><i class="fa-solid fa-pencil"></i>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='rowTwoJoinGame'><span>Your game code is</span></Col>
      </Row>
      <Row>
        <Col className='rowThreeJoinGame'>
          <div>
            <div className='rowThreeJoinGameCodeInput'>
            <input type='text' placeholder='Enter game code' />
            </div>
            <div className='joinGameCopyIconDiv'>
              <div className='joinGameCopyIcon1'></div>
              <div className='joinGameCopyIcon2'></div></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='rowFourJoinGame'><span>Share this code with your friends to join.</span></Col>
      </Row>
      <Row>
        <Col className='rowFiveJoinGame'>
          <div>
            <label class="form-control">
              <input type="checkbox" className='onlyCheckJoinGame' name="checkbox" disabled/></label>
            <span>Open game to public</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Link style={styledLink1} to={'PlayGame'}>
        <Col className='rowSixCreateGame'><span>Start game</span></Col></Link>
      </Row>

    </Container>
  )
}


export default JoinPrivateGame;