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
                        <h4>Székhely: <br />Kiskunlacháza</h4> 
                        
                        <h4>Telefon: <br /> <a href="tel:+3630nehívjál">+3630nehívjál</a></h4>
                        <h4>Email: <br /> <a href="mailto:nagya@gmail.com">nagya@gmail.com</a></h4>
                        
                        
                    </div>
                    <div className='map'>
                        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
        width="700"
        height="400"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
                        </div>
                </div>
            </Container>
        </>
    );
  }
  
  export default Contact;