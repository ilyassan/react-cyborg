import './Caroules.css';
import{FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import CaroulesItem  from './CaroulesItem';

const Caroules = (props) => {
  const items = props.data.map((item, i) => (
    <CaroulesItem
      key={i}
      isActive={i === 0 ? 'active' : ''}
      image={item.image}
      title={item.title}
    />
  ));


  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {items}
        </div>
        <div className='prev-next'>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"><FaArrowLeft/></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"><FaArrowRight/></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
};

export default Caroules;
