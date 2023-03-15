import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../style/app.scss';

function ReferenceCard({img, text}) {
    return (
        <div className='work-card'>
            <div className="work-card__image">
                <img src={img} />
            </div>
            <div className="work-card__text">
                <h4>{text}</h4>
            </div>
        </div>
      );
  }
  
  export default ReferenceCard;