import '../css/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Landingpage from './Landingpage';
import { useEffect } from "react";


function Homepage() {
  useEffect(()  => {
    setTimeout(() => {
      window.location.href = '/landing'
    }, 3000);
    console.log('use effect done')
  });

  //const navigate = useNavigate();

  return (
    <Container className='containerStyle'>
      <Row className='firstRow'>
        <Col className='firstColumnStyle'>NOUNZ</Col>
        <div className='secondRow'>
        <Col className='secondColumnStyle'>Name</Col>
        <Col className='secondColumnStyle'>Animal</Col>
        <Col className='secondColumnStyle'>Place</Col>
        <Col className='secondColumnStyle'>Thing</Col>
        </div>
      </Row>

     
    </Container>
  );
}


export default Homepage;