import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/app.scss';

function NavigationBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container >
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#">CÉGNÉV</Nav.Link>
                </Navbar.Collapse>
                
                <Navbar.Collapse className='justify-content-end'>
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