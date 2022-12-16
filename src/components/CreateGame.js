import '../css/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const styledLink1 = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '2em'
}


const CreateGame = () => {

  return (
    <Container className='createGameContainer' fluid>
      <Row>
        <Link to={'Landing'} style={styledLink1}>
        <Col className='rowOneCreateGame'><i className="fa-solid fa-arrow-left"></i></Col>
        </Link>
      </Row>
      <Row >
        <Col className='rowTwoCreateGame'>Select Categories</Col>
      </Row>
      <Row>
        <Col className='rowThreeCreateGame'>
          <div><label class="form-control">
            <input type="checkbox" className='firstCheckCreateGame' name="checkbox" /></label>
            <span>Name</span></div>
          <div><label class="form-control">
            <input type="checkbox" className='secondCheckCreateGame' name="checkbox" /></label><span>Animal</span></div>
          <div><label class="form-control">
            <input type="checkbox" className='thirdCheckCreateGame' name="checkbox" /></label><span>Place</span></div>
          <div><label class="form-control">
            <input type="checkbox" className='fourCheckCreateGame' name="checkbox" /></label><span>Thing</span></div>
          <div><label class="form-control">
            <input type="checkbox" className='fiveCheckCreateGame' name="checkbox" /></label><span>Food</span></div>
          <div><label class="form-control">
            <input type="checkbox" className='sixCheckCreateGame' name="checkbox" /></label><span>Artists</span></div>
          <div><label class="form-control">
            <input type="checkbox" className='sevenCheckCreateGame' name="checkbox" /></label><span>Shows</span></div>
        </Col>
      </Row>
      <Row>
        <Col className='rowFourCreateGame'>Select time</Col>
      </Row>
      <Row>
        <Col className='rowFiveCreateGame' onClick={clickHandler}>
          <div><span id='timeSelector1' >30s</span></div>
          <div><span id='60s' >60s</span></div>
          <div><span id='timeSelector3' >90s</span></div>
        </Col>
      </Row>
      <Row>
        <Link to={'JoinGame'} style={styledLink1}>
          <Col className='rowSixCreateGame'><span>Create game</span></Col>
        </Link>
      </Row>
    </Container>
  )
};

const clickHandler = (e) => {
  if(e.target !== e.currentTarget){
    e.target.style.color = e.target.style.color === 'white'? 'black': 'white';
    //alert(e.target.style.color);
    //console.log(e.target);
    const timeSelect = e.target.id;
    console.log(timeSelect);
    const timeSelector = document.getElementById(timeSelect);
    console.log(timeSelector.innerHTML);
    
  
  }
  e.stopPropagation();
 
 };





export default CreateGame;