import { Container } from 'react-bootstrap';
import '../style/app.scss';

function Contact() {
    return (
        <>
            <Container>
                <div className='text-center section section__contact w-75 m-auto'>
                    <div id='elerhetoseg' className='section__title'>
                        <h1>Elérhetőség</h1>
                    </div>
                    <div className='section__description section__description--flex'>
                        <h4>Székhely: Kiskunlacháza</h4>
                        <h4>Telefon: <a href="tel:+3630nehívjál">+3630nehívjál</a></h4>
                        <h4>Email: <a href="mailto:nagya@gmail.com">nagya@gmail.com</a></h4>
                    </div>
                </div>
            </Container>
        </>
    );
  }
  
  export default Contact;