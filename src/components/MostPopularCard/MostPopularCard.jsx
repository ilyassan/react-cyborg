import './MostPopularCard.css'

import{FaStar, FaDownload} from 'react-icons/fa'
import {CardWrapper} from '../index'

const Card = (props) => {
  return (
    <div className='most-popular-item'>
            <CardWrapper>
                <img className='most-popular-item-image' src={props.image} alt='game' />
                <div className='most-popular-item-content'>
                    <h4 className='most-popular-item-title'>
                        <nobr>{props.title}</nobr> <br/>
                        <span>{props.category}</span>
                        </h4>
                    <ul className='data'>
                        <li> <FaStar/><span>{props.rate}</span></li>
                        <li> <FaDownload/><span>{props.download}</span></li>
                    </ul>
                </div>
            </CardWrapper>
     </div>
  )
}

export default Card