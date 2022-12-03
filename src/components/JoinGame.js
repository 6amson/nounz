import '../css/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
//import { useEffect } from 'react';
//import Form from 'react-bootstrap/Form';

const styledLink1 = {
    textDecoration: 'none',
    color: 'black'
}

function generateRandom (){
  var i;

 const numberstack = [];
  for(i = 0; i < 8; i++){
    numberstack.push(Math.floor(Math.random()*12).toString(16).toUpperCase());
  };
  const stack = numberstack.join('');
  return stack;
}
const called = generateRandom();




const JoinGame = () => {
/*
  function generateRandom (){
    var i;
    
   const numberstack = [];
    for(i = 0; i < 8; i++){
        numberstack.push(Math.floor(Math.random()*12).toString(16).toUpperCase());
    };
  const stack = numberstack.join('');
  generateRandom();
  return stack;
}
useEffect(
 
 )
 
*/



 

  return (
    <Container className='joinGameContainer' fluid>
      <Row>
        <Col className='rowOneCreateGame'><i className="fa-solid fa-arrow-left"></i></Col>
      </Row>
      <Row>
        <Col className='rowOneJoinGame'><div>
        <div className='rowOneJoinGameInputDiv'><input type='text' placeholder='Enter your name' /></div>
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
            <div className='rowThreeJoinGameSpan'>
              <span>{called}</span>
            </div>
            <div className='joinGameCopyIconDiv'>
              <div className='joinGameCopyIcon1'></div>
              <div className='joinGameCopyIcon2'></div></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='rowFourJoinGame'><span>Share this code with your friends to get started</span></Col>
      </Row>
      <Row>
        <Col className='rowFiveJoinGame'>
          <div>
            <label class="form-control">
              <input type="checkbox" className='onlyCheckJoinGame' name="checkbox" /></label>
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


export default JoinGame;