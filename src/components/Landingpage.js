import '../css/index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const styledLink = {
    textDecoration: 'none'
}

const styledLink1 = {
    textDecoration: 'none',
    color: 'black'
}


const Landingpage = () => {
    return (
        <Container>
            <div className='landingPageContainer'>
                <Row className='landingPageRow'>
                    <Col><div className='landingPageFirstRow'>NOUNZ</div></Col>
                </Row>
                <Row className='landingPageRow'>
                <Link style={styledLink} to={'CreateGame'}>
                    <Col className='landingPageSecondRow'><div id='landingPageTogether'>Create game</div></Col></Link>
                </Row>
                <Row className='landingPageRow'>
                <Link style={styledLink1} to={'JoinPrivateGame'}>
                    <Col className='landingPageThirdRow'><div id='landingPageTogether'>Join private game</div></Col></Link>
                </Row>
                <Row className='landingPageRow'>
                <Link style={styledLink1} to={'JoinPublicGame'}>
                    <Col className='landingPagFourthRow'><div id='landingPageTogether'>Join public game</div></Col></Link>
                </Row>
            </div>
            <footer className='footer'>
                <div className='footerDiv'>Select language<img alt="language icon" src="photos/langIcon.png" /></div>
            </footer>
        </Container>

    );
}


export default Landingpage;