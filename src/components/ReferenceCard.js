import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../style/app.scss';

function ReferenceCard({img, text}) {
    return (
        <div className='work-card'>
            <img src={img} />
            <div className="overlay">
                <p className="work-card__text">{text}</p>
            </div>
        </div>
      );
  }
  
  export default ReferenceCard;