import { Container } from 'react-bootstrap';
import '../style/app.scss';
import WorkCarousel from './Carousel';
import ReferenceCard from './ReferenceCard';

function References() {
    return (
        <>
            <Container className='full-width'>
                <div className='text-center section w-80 m-auto'>
                    <div id='munkaink' className='section__title'>
                        <h1>Munkáink</h1>
                    </div>
                    <WorkCarousel />
                </div>
            </Container>
        </>
    );
  }
  
  export default References;