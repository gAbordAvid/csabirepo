import '../style/app.scss';
import ReferenceCard from './ReferenceCard';
import Carousel from 'react-bootstrap/Carousel';

function WorkCarousel() {
  return (
    <Carousel variant="dark" className='pb-3'>
      <Carousel.Item>
        <ReferenceCard img="https://i.pinimg.com/originals/26/ea/fc/26eafc0b14488fea03fa8fa9751203ff.jpg" text="Rövid leírás jön ide" />
      </Carousel.Item>
      <Carousel.Item>
        <ReferenceCard img="https://i.pinimg.com/originals/26/ea/fc/26eafc0b14488fea03fa8fa9751203ff.jpg" text="Rövid leírás jön ide" />
      </Carousel.Item>
      <Carousel.Item>
        <ReferenceCard img="https://i.pinimg.com/originals/26/ea/fc/26eafc0b14488fea03fa8fa9751203ff.jpg" text="Rövid leírás jön ide" />      
      </Carousel.Item>
      <Carousel.Item>
        <ReferenceCard img="https://i.pinimg.com/originals/26/ea/fc/26eafc0b14488fea03fa8fa9751203ff.jpg" text="Rövid leírás jön ide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default WorkCarousel;