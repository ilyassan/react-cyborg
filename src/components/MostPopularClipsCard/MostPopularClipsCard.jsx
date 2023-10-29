import './MostPopularClipsCard.css'

import {FaEye, FaPlay} from 'react-icons/fa' 
import {CardWrapper} from '../../components/index'

const MostPopularClipsCard = (props) => {
  return (
    <div className='popular-clips-card col-lg-3 col-md-6 col-sm-12'>

        <CardWrapper>
          <div className='image'>
              <img src={props.image} alt='pic'/>
              <a href={props.url} target='_blank' rel='noreferrer'><FaPlay/></a>
          </div>

          <div className='details'>
              <h6>{props.title}</h6>
              <span><FaEye/>{props.views}</span>
          </div>
        </CardWrapper>

      </div>

  )
}

export default MostPopularClipsCard