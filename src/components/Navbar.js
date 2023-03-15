import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/app.scss';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Navbar.Brand href="#">HOSSZÚ CÉGNÉV</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav >
                        <Nav.Link href="#rolunk">Rólunk</Nav.Link>
                        <Nav.Link href="#munkaink">Munkáink</Nav.Link>
                        <Nav.Link href="#elerhetoseg">Elérhetőség</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
  
  export default NavigationBar;