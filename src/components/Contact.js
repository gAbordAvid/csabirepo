import { Container } from 'react-bootstrap';
import '../style/app.scss';

function Contact() {
    return (
        <>
            <Container>
                <div className='text-center section w-75 m-auto'>
                    <div id='elerhetoseg' className='section__title'>
                        <h1>Elérhetőség</h1>
                    </div>
                    <div className='section__description section__description--flex mt-5'>
                        <h4>Székhely: Kiskunlacháza</h4>
                        <h4>Telefon: +3630nehívjál</h4>
                        <h4>Email: nagya@gmail.com</h4>
                    </div>
                </div>
            </Container>
        </>
    );
  }
  
  export default Contact;